"use client";

import React, { useState } from "react";
import { Eye, X, Download } from "lucide-react";

export default function CareersTable({ applications }: { applications: any[] }) {
  const [selected, setSelected] = useState<any>(null);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-100">
            <tr>
              <th className="px-6 py-4">Applicant</th>
              <th className="px-6 py-4">Position</th>
              <th className="px-6 py-4">Experience</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4 text-center">Resume</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {applications.map((app) => (
              <tr key={app._id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4">
                  <p className="font-bold text-[#2B3674]">{app.name}</p>
                  <p className="text-xs text-gray-400">{app.email}</p>
                  <p className="text-xs text-gray-400">{app.phone}</p>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-700">{app.position}</td>
                <td className="px-6 py-4 max-w-[200px] truncate" title={app.experience}>{app.experience || "-"}</td>
                <td className="px-6 py-4 whitespace-nowrap" suppressHydrationWarning>
                  {app.createdAt ? new Date(app.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) : "-"}
                </td>
                <td className="px-6 py-4 text-center">
                  <a 
                    href={app.resumeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg text-xs font-bold transition-colors"
                  >
                    <Download size={14} /> Download
                  </a>
                </td>
                <td className="px-6 py-4 text-center">
                  <button 
                    onClick={() => setSelected(app)}
                    className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    title="View Details"
                  >
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {applications.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-gray-400">No applications found.</td>
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
              <h3 className="text-xl font-bold text-[#2B3674]">Application Details</h3>
              <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-red-500 transition-colors">
                <X size={24} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto space-y-4 text-sm text-gray-600">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">Applicant Name</p>
                  <p className="font-semibold text-gray-800">{selected.name}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">Position Applied For</p>
                  <p className="font-semibold text-gray-800">{selected.position}</p>
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
                  <p className="text-xs font-bold text-gray-400 uppercase">Date Applied</p>
                  <p className="font-semibold text-gray-800">{new Date(selected.createdAt).toLocaleString()}</p>
                </div>
                
                <div className="col-span-2">
                  <p className="text-xs font-bold text-gray-400 uppercase">Experience summary</p>
                  <p className="p-3 bg-gray-50 rounded-lg mt-1 text-gray-700 whitespace-pre-wrap leading-relaxed">{selected.experience || "No experience summary provided."}</p>
                </div>
              </div>
              
              <div className="pt-4 flex justify-end">
                <a 
                  href={selected.resumeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:opacity-90 rounded-lg text-sm font-bold transition-colors"
                >
                  <Download size={16} /> Open Resume File
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
