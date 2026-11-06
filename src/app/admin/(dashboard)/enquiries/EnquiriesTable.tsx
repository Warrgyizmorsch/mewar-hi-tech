"use client";

import React, { useState } from "react";
import { Eye, X, Download, Trash2, Filter, FileSpreadsheet } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import * as XLSX from "xlsx";

export default function EnquiriesTable({
  enquiries = [],
  role = "admin",
}: {
  enquiries: any[];
  role?: string;
}) {
  const [selected, setSelected] = useState<any>(null);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [filter, setFilter] = useState<string>("all");
  const router = useRouter();

  const isSparePartsRole = role === "spare_parts";

  // All enquiries are shown in "All", including product enquiries
  const accessibleEnquiries = enquiries;

  // Filter helper matching logic
  const matchFilter = (enq: any, currentFilter: string) => {
    if (currentFilter === "all") return true;
    const t = (enq.type || "").toLowerCase();
    if (currentFilter === "SparePart") {
      return t === "sparepart" || t === "spare part" || t === "spare_part" || t === "both";
    }
    if (currentFilter === "Contact") {
      return t === "contact" || (!t && !enq.productName && !enq.partName);
    }
    return true;
  };

  // Dynamic counts for each filter option
  const allCount = accessibleEnquiries.length;
  const spareCount = accessibleEnquiries.filter((e) => matchFilter(e, "SparePart")).length;
  const contactCount = accessibleEnquiries.filter((e) => matchFilter(e, "Contact")).length;

  // Filter options: All (all enquiries), Spare Parts, Contact (no separate Product option)
  const filterOptions = [
    { value: "all", label: "All", count: allCount },
    { value: "SparePart", label: "Spare Parts", count: spareCount },
    { value: "Contact", label: "Contact", count: contactCount },
  ];

  // Enquiries filtered by active selection
  const filteredEnquiries = accessibleEnquiries.filter((e) => matchFilter(e, filter));

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setSelectedIds([]); // Clear selection when filter changes to avoid hidden selections
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedIds(filteredEnquiries.map((enq) => enq._id));
    } else {
      const currentFilteredIds = new Set(filteredEnquiries.map((enq) => enq._id));
      setSelectedIds((prev) => prev.filter((id) => !currentFilteredIds.has(id)));
    }
  };

  const handleSelectOne = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const isAllSelected =
    filteredEnquiries.length > 0 &&
    filteredEnquiries.every((enq) => selectedIds.includes(enq._id));

  // Export directly in native Excel (.xlsx) format
  const handleExportExcel = () => {
    const dataToExport =
      selectedIds.length > 0
        ? filteredEnquiries.filter((enq) => selectedIds.includes(enq._id))
        : filteredEnquiries;

    if (dataToExport.length === 0) {
      toast.warning("No enquiries to export in current filter.");
      return;
    }

    const worksheetData = dataToExport.map((enq) => ({
      "Name": enq.name || "",
      "Company": enq.company || "",
      "Email": enq.email || "",
      "Phone": enq.phone || "",
      "Address / Location": enq.address || "",
      "Enquiry Type":
        enq.type === "SparePart"
          ? "Spare Part"
          : enq.type === "Both"
          ? "Product & Spare Parts"
          : enq.type || "Contact",
      "Product / Machine": enq.productName || enq.machineType || "",
      "Spare Part / Wear Liner": enq.partName || "",
      "Message": enq.message || "",
      "Date": new Date(enq.createdAt).toLocaleString(),
    }));

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);

    // Set custom column widths for clean readability
    worksheet["!cols"] = [
      { wch: 22 }, // Name
      { wch: 22 }, // Company
      { wch: 26 }, // Email
      { wch: 16 }, // Phone
      { wch: 26 }, // Address
      { wch: 20 }, // Enquiry Type
      { wch: 30 }, // Product
      { wch: 28 }, // Spare Part
      { wch: 42 }, // Message
      { wch: 22 }, // Date
    ];

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Enquiries");

    const filterTag = filter === "all" ? "all" : filter.toLowerCase();
    XLSX.writeFile(
      workbook,
      `Mewar_Enquiries_${filterTag}_${new Date().toISOString().slice(0, 10)}.xlsx`
    );

    toast.success(`Successfully exported ${dataToExport.length} enquiries to Excel.`);
  };

  const handleDelete = async () => {
    if (selectedIds.length === 0) return;
    if (
      !confirm(
        `Are you sure you want to delete ${selectedIds.length} selected enquiries?`
      )
    )
      return;

    setIsDeleting(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: selectedIds }),
      });

      if (res.ok) {
        setSelectedIds([]);
        toast.success(`Successfully deleted ${selectedIds.length} enquiries.`);
        router.refresh();
      } else {
        toast.error("Failed to delete enquiries.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while deleting.");
    } finally {
      setIsDeleting(false);
    }
  };

  const activeFilterObj =
    filterOptions.find((opt) => opt.value === filter) || filterOptions[0];

  return (
    <>
      {/* ── Toolbar: Filter Selection & Actions ── */}
      <div className="p-4 border-b border-gray-100 bg-gray-50/50 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Left: Filter Buttons & Selection Dropdown */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center space-x-1.5 text-gray-500 mr-1">
              <Filter size={15} className="text-amber-500 shrink-0" />
              <span className="text-xs font-bold uppercase tracking-wider">Filter:</span>
            </div>

            {/* Quick Pill Filter Buttons */}
            <div className="hidden sm:inline-flex items-center gap-1 p-1 bg-white rounded-xl border border-gray-200/80 shadow-2xs">
              {filterOptions.map((opt) => {
                const isActive = filter === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleFilterChange(opt.value)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 ${
                      isActive
                        ? "bg-[#0A1A3B] text-white shadow-xs"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/70"
                    }`}
                  >
                    <span>{opt.label}</span>
                    <span
                      className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                        isActive
                          ? "bg-amber-400 text-gray-950 font-extrabold"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {opt.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Dropdown Selection */}
            <div className="sm:hidden relative inline-block">
              <select
                value={filter}
                onChange={(e) => handleFilterChange(e.target.value)}
                className="appearance-none pl-3 pr-8 py-1.5 bg-white border border-gray-200 text-gray-800 rounded-lg text-xs font-bold shadow-2xs focus:outline-hidden focus:border-amber-500"
              >
                {filterOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label} ({opt.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Selection Count Pill */}
            <div className="text-xs text-gray-500 pl-1 font-medium">
              <span className="font-bold text-[#2B3674]">{selectedIds.length}</span> of{" "}
              <span className="font-semibold text-gray-700">{filteredEnquiries.length}</span> selected
            </div>
          </div>

          {/* Right: Export Excel & Delete Actions */}
          <div className="flex items-center space-x-2.5 self-end sm:self-auto">
            <button
              type="button"
              onClick={handleExportExcel}
              title="Export enquiries to Excel (.xlsx)"
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all text-xs sm:text-sm font-semibold shadow-2xs cursor-pointer"
            >
              <FileSpreadsheet size={16} className="text-emerald-600 shrink-0" />
              <span>Export Excel</span>
            </button>

            <button
              type="button"
              onClick={handleDelete}
              disabled={selectedIds.length === 0 || isDeleting}
              className="flex items-center space-x-2 px-3.5 py-2 bg-red-50 border border-red-200/60 text-red-600 rounded-lg hover:bg-red-100 transition-all text-xs sm:text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed shadow-2xs cursor-pointer"
            >
              <Trash2 size={15} className="shrink-0" />
              <span>{isDeleting ? "Deleting..." : "Delete"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── Table ── */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 w-[50px]">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  checked={isAllSelected}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Contact Info</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Message</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredEnquiries.map((enq) => (
              <tr key={enq._id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    checked={selectedIds.includes(enq._id)}
                    onChange={() => handleSelectOne(enq._id)}
                  />
                </td>
                <td className="px-6 py-4">
                  <p className="font-bold text-[#2B3674]">{enq.name}</p>
                  <p className="text-xs text-gray-400">{enq.company || "-"}</p>
                </td>
                <td className="px-6 py-4">
                  <p>{enq.email}</p>
                  <p>{enq.phone}</p>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold whitespace-nowrap shadow-2xs ${
                      enq.type === "SparePart"
                        ? "bg-amber-100 text-amber-900 border border-amber-300"
                        : enq.type === "Both"
                        ? "bg-purple-100 text-purple-900 border border-purple-300"
                        : enq.type === "Product"
                        ? "bg-blue-100 text-blue-800 border border-blue-200"
                        : "bg-emerald-100 text-emerald-800 border border-emerald-200"
                    }`}
                  >
                    {enq.type === "SparePart"
                      ? "Spare Part"
                      : enq.type === "Both"
                      ? "Product & Parts"
                      : enq.type === "Product"
                      ? "Product"
                      : "Contact"}
                  </span>
                  {(enq.productName || enq.machineType) && (
                    <p
                      className="text-xs mt-1 font-bold text-gray-800 truncate max-w-[180px]"
                      title={enq.productName || enq.machineType}
                    >
                      <span className="text-gray-400 font-normal">Item:</span>{" "}
                      {enq.productName || enq.machineType}
                    </p>
                  )}
                  {enq.partName && (
                    <p
                      className="text-xs mt-0.5 font-medium text-amber-800 truncate max-w-[180px]"
                      title={enq.partName}
                    >
                      <span className="text-gray-400 font-normal">Part:</span>{" "}
                      {enq.partName}
                    </p>
                  )}
                </td>
                <td className="px-6 py-4 max-w-[200px] truncate" title={enq.message}>
                  {enq.message}
                </td>
                <td className="px-6 py-4 whitespace-nowrap" suppressHydrationWarning>
                  {enq.createdAt
                    ? new Date(enq.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })
                    : "-"}
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => setSelected(enq)}
                    className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                    title="View Details"
                  >
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {filteredEnquiries.length === 0 && (
              <tr>
                <td colSpan={7} className="px-6 py-12 text-center text-gray-400">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <Filter size={24} className="text-gray-300" />
                    <p className="font-semibold text-gray-600">
                      No {activeFilterObj.label} found.
                    </p>
                    {filter !== "all" && (
                      <button
                        type="button"
                        onClick={() => handleFilterChange("all")}
                        className="text-xs text-[#0A1A3B] font-bold underline hover:text-amber-600 cursor-pointer"
                      >
                        Clear filter to view all
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ── Details Modal ── */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold text-[#2B3674]">Enquiry Details</h3>
              <button
                onClick={() => setSelected(null)}
                className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto space-y-4 text-sm text-gray-600">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">Name</p>
                  <p className="font-semibold text-gray-800">{selected.name}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">Company</p>
                  <p className="font-semibold text-gray-800">{selected.company || "N/A"}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">Email</p>
                  <p className="font-semibold text-gray-800">{selected.email}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">Phone</p>
                  <p className="font-semibold text-gray-800">{selected.phone}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">Type</p>
                  <p className="font-semibold text-gray-800">
                    {selected.type === "SparePart"
                      ? "Spare Part"
                      : selected.type === "Both"
                      ? "Product & Spare Parts"
                      : selected.type === "Product"
                      ? "Product"
                      : "Contact"}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">Date</p>
                  <p className="font-semibold text-gray-800" suppressHydrationWarning>
                    {selected.createdAt
                      ? new Date(selected.createdAt).toLocaleString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : "-"}
                  </p>
                </div>
                {(selected.productName || selected.machineType) && (
                  <div className="col-span-2">
                    <p className="text-xs font-bold text-gray-400 uppercase">
                      Product / Requested Machine
                    </p>
                    <p className="font-semibold text-gray-800 bg-gray-50 p-2.5 rounded-lg border border-gray-100 mt-1">
                      {selected.productName || selected.machineType}
                    </p>
                  </div>
                )}
                {selected.partName && (
                  <div className="col-span-2">
                    <p className="text-xs font-bold text-gray-400 uppercase">
                      Required Spare Parts / Wear Liners
                    </p>
                    <p className="font-semibold text-gray-800 bg-amber-50/70 p-2.5 rounded-lg border border-amber-200/60 mt-1">
                      {selected.partName}
                    </p>
                  </div>
                )}
                {selected.address && (
                  <div className="col-span-2">
                    <p className="text-xs font-bold text-gray-400 uppercase">
                      Company / Plant Location
                    </p>
                    <p className="font-semibold text-gray-800 bg-gray-50 p-2.5 rounded-lg border border-gray-100 mt-1">
                      {selected.address}
                    </p>
                  </div>
                )}
                <div className="col-span-2">
                  <p className="text-xs font-bold text-gray-400 uppercase">Message</p>
                  <p className="p-3 bg-gray-50 rounded-lg mt-1 text-gray-700 whitespace-pre-wrap leading-relaxed">
                    {selected.message}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
