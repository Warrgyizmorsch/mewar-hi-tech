"use client";

import React, { useState } from "react";
import { Plus, Edit2, Trash2, CheckCircle, XCircle } from "lucide-react";
import { toast } from "react-toastify";
import JobModal from "./JobModal";

export default function JobsTable({ initialJobs }: { initialJobs: any[] }) {
  const [jobs, setJobs] = useState<any[]>(initialJobs);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  const openAddModal = () => {
    setEditingJob(null);
    setIsModalOpen(true);
  };

  const openEditModal = (job: any) => {
    setEditingJob(job);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this job posting?")) return;
    
    try {
      const res = await fetch(`/api/jobs/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete job");
      
      setJobs((prev) => prev.filter((job) => job._id !== id));
      toast.success("Job deleted successfully");
    } catch (error) {
      toast.error("Error deleting job");
    }
  };

  const toggleStatus = async (job: any) => {
    try {
      const res = await fetch(`/api/jobs/${job._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isActive: !job.isActive }),
      });
      if (!res.ok) throw new Error("Failed to update status");
      
      const { data } = await res.json();
      setJobs((prev) => prev.map((j) => (j._id === job._id ? data : j)));
      toast.success(`Job marked as ${data.isActive ? "Active" : "Inactive"}`);
    } catch (error) {
      toast.error("Error updating status");
    }
  };

  const handleSave = (savedJob: any, isNew: boolean) => {
    if (isNew) {
      setJobs((prev) => [savedJob, ...prev]);
    } else {
      setJobs((prev) => prev.map((j) => (j._id === savedJob._id ? savedJob : j)));
    }
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
        <h2 className="font-semibold text-gray-700">All Job Postings</h2>
        <button
          onClick={openAddModal}
          className="flex items-center gap-2 bg-[#FFB800] text-[#0A1A3B] px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#e6a600] transition-colors"
        >
          <Plus size={16} />
          Add New Job
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-500 uppercase bg-gray-50/50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 font-semibold">Job Title & Dept</th>
              <th className="px-6 py-4 font-semibold">Type & Exp</th>
              <th className="px-6 py-4 font-semibold">Location</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {jobs.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                  No job postings found. Click "Add New Job" to create one.
                </td>
              </tr>
            ) : (
              jobs.map((job) => (
                <tr key={job._id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-900">{job.title}</p>
                    <p className="text-xs text-gray-500">{job.department}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-700">{job.type}</p>
                    <p className="text-xs text-gray-500">{job.experience}</p>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{job.location}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => toggleStatus(job)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                        job.isActive
                          ? "bg-green-100 text-green-700 hover:bg-green-200"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {job.isActive ? <CheckCircle size={14} /> : <XCircle size={14} />}
                      {job.isActive ? "Active" : "Inactive"}
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => openEditModal(job)}
                        className="p-2 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                        title="Edit Job"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(job._id)}
                        className="p-2 text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                        title="Delete Job"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <JobModal
          job={editingJob}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
