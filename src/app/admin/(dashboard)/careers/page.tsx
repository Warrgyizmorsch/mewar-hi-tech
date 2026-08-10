import React from "react";
import connectToDatabase from "@/lib/mongodb";
import Career from "@/models/Career";
import CareersTable from "./CareersTable";

export const dynamic = "force-dynamic";

export default async function AdminCareers() {
  let applications: any[] = [];
  try {
    const conn = await connectToDatabase();
    if (conn) {
      applications = await Career.find().sort({ createdAt: -1 });
    }
  } catch (err) {
    console.error("Failed to load career applications:", err);
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-[#2B3674]">Careers</h1>
          <p className="text-sm text-gray-500 mt-1">Manage job applications and resumes.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <CareersTable applications={JSON.parse(JSON.stringify(applications))} />
      </div>
    </div>
  );
}
