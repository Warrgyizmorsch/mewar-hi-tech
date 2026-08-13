import React, { useState } from "react";
import { X, Save } from "lucide-react";
import { toast } from "react-toastify";

export default function JobModal({
  job,
  onClose,
  onSave,
}: {
  job?: any;
  onClose: () => void;
  onSave: (job: any, isNew: boolean) => void;
}) {
  const isNew = !job;
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: job?.title || "",
    department: job?.department || "",
    experience: job?.experience || "",
    education: job?.education || "",
    location: job?.location || "Sukher Industrial Area, Udaipur",
    type: job?.type || "Full-Time",
    isActive: job?.isActive ?? true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const url = isNew ? "/api/jobs" : `/api/jobs/${job._id}`;
      const method = isNew ? "POST" : "PUT";
      
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to save job");
      
      toast.success(isNew ? "Job created successfully!" : "Job updated successfully!");
      onSave(data.data, isNew);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h3 className="font-bold text-xl text-[#2B3674]">
            {isNew ? "Create New Job Posting" : "Edit Job Posting"}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-1">
          <form id="jobForm" onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Job Title *</label>
                <input
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFB800]"
                  placeholder="e.g., HR Executive"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Department *</label>
                <input
                  name="department"
                  required
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFB800]"
                  placeholder="e.g., Human Resources"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Experience *</label>
                <input
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFB800]"
                  placeholder="e.g., 3 Years"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Education *</label>
                <input
                  name="education"
                  required
                  value={formData.education}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFB800]"
                  placeholder="e.g., Graduate"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Location *</label>
                <input
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFB800]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Job Type *</label>
                <select
                  name="type"
                  required
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFB800]"
                >
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mt-4">
              <input
                type="checkbox"
                id="isActive"
                name="isActive"
                checked={formData.isActive}
                onChange={handleChange}
                className="w-4 h-4 text-[#FFB800] rounded focus:ring-[#FFB800]"
              />
              <label htmlFor="isActive" className="text-sm font-semibold text-gray-700 cursor-pointer">
                Publish on website immediately (Active)
              </label>
            </div>
          </form>
        </div>

        <div className="p-6 border-t border-gray-100 flex justify-end gap-3 bg-gray-50/50 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg text-gray-600 font-semibold hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="jobForm"
            disabled={loading}
            className="px-6 py-2.5 rounded-lg bg-[#0A1A3B] text-white font-semibold flex items-center gap-2 hover:bg-[#0A1A3B]/90 transition-colors disabled:opacity-70"
          >
            <Save size={18} />
            {loading ? "Saving..." : "Save Job"}
          </button>
        </div>
      </div>
    </div>
  );
}
