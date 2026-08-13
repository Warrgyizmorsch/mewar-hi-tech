import React from "react";
import connectToDatabase from "@/lib/mongodb";
import Job from "@/models/Job";
import JobsTable from "./JobsTable";

export const dynamic = "force-dynamic";

export default async function AdminJobs() {
  let jobs: any[] = [];
  try {
    const conn = await connectToDatabase();
    if (conn) {
      jobs = await Job.find().sort({ createdAt: -1 });
    }
  } catch (err) {
    console.error("Failed to load jobs:", err);
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-[#2B3674]">Job Postings</h1>
          <p className="text-sm text-gray-500 mt-1">Manage active career openings.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <JobsTable initialJobs={JSON.parse(JSON.stringify(jobs))} />
      </div>
    </div>
  );
}
