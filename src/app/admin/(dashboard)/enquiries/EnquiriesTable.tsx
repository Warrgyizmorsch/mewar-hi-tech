"use client";

import React, { useState } from "react";
import { Eye, X, Download, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function EnquiriesTable({ enquiries }: { enquiries: any[] }) {
  const [selected, setSelected] = useState<any>(null);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedIds(enquiries.map(enq => enq._id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (id: string) => {
    setSelectedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const handleExport = () => {
    const dataToExport = selectedIds.length > 0 
      ? enquiries.filter(enq => selectedIds.includes(enq._id))
      : enquiries;

    if (dataToExport.length === 0) {
      toast.warning("No enquiries to export.");
      return;
    }

    const headers = ["Name", "Company", "Email", "Phone", "Type", "Product", "Message", "Date"];
    const csvData = dataToExport.map(enq => [
      `"${enq.name || ''}"`,
      `"${enq.company || ''}"`,
      `"${enq.email || ''}"`,
      `"${enq.phone || ''}"`,
      `"${enq.type || ''}"`,
      `"${enq.productName || ''}"`,
      `"${(enq.message || '').replace(/"/g, '""')}"`,
      `"${new Date(enq.createdAt).toLocaleString()}"`
    ].join(','));

    const csvContent = [headers.join(','), ...csvData].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `enquiries_${new Date().getTime()}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success(`Successfully exported ${dataToExport.length} enquiries.`);
  };

  const handleDelete = async () => {
    if (selectedIds.length === 0) return;
    if (!confirm(`Are you sure you want to delete ${selectedIds.length} selected enquiries?`)) return;

    setIsDeleting(true);
    try {
      const res = await fetch('/api/enquiry', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: selectedIds })
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

  return (
    <>
      <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50/50">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <span className="font-medium text-[#2B3674]">{selectedIds.length}</span> selected
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={handleExport}
            className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            <Download size={16} />
            <span>Export CSV</span>
          </button>
          <button
            onClick={handleDelete}
            disabled={selectedIds.length === 0 || isDeleting}
            className="flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Trash2 size={16} />
            <span>{isDeleting ? "Deleting..." : "Delete"}</span>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 w-[50px]">
                <input 
                  type="checkbox" 
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={enquiries.length > 0 && selectedIds.length === enquiries.length}
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
            {enquiries.map((enq) => (
              <tr key={enq._id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4">
                  <input 
                    type="checkbox" 
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
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
                  <span className={`px-2 py-1 rounded text-xs font-bold ${enq.type === 'Product' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                    {enq.type}
                  </span>
                  {enq.productName && <p className="text-xs mt-1 truncate max-w-[150px]">{enq.productName}</p>}
                </td>
                <td className="px-6 py-4 max-w-[200px] truncate" title={enq.message}>{enq.message}</td>
                <td className="px-6 py-4 whitespace-nowrap">{new Date(enq.createdAt).toLocaleDateString()}</td>
                <td className="px-6 py-4 text-center">
                  <button 
                    onClick={() => setSelected(enq)}
                    className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    title="View Details"
                  >
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {enquiries.length === 0 && (
              <tr>
                <td colSpan={7} className="px-6 py-8 text-center text-gray-400">No enquiries found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold text-[#2B3674]">Enquiry Details</h3>
              <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-red-500 transition-colors">
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
                  <p className="font-semibold text-gray-800">{selected.type}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">Date</p>
                  <p className="font-semibold text-gray-800">{new Date(selected.createdAt).toLocaleString()}</p>
                </div>
                {selected.productName && (
                  <div className="col-span-2">
                    <p className="text-xs font-bold text-gray-400 uppercase">Product</p>
                    <p className="font-semibold text-gray-800">{selected.productName}</p>
                  </div>
                )}
                <div className="col-span-2">
                  <p className="text-xs font-bold text-gray-400 uppercase">Message</p>
                  <p className="p-3 bg-gray-50 rounded-lg mt-1 text-gray-700 whitespace-pre-wrap leading-relaxed">{selected.message}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
