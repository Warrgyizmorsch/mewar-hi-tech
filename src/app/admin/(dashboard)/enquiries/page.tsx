import React from "react";
import connectToDatabase from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";
import EnquiriesTable from "./EnquiriesTable";

export const dynamic = "force-dynamic";

export default async function AdminEnquiries() {
  let enquiries: any[] = [];
  try {
    const conn = await connectToDatabase();
    if (conn) {
      enquiries = await Enquiry.find().sort({ createdAt: -1 });
    }
  } catch (err) {
    console.error("Failed to load enquiries:", err);
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-[#2B3674]">Enquiries</h1>
          <p className="text-sm text-gray-500 mt-1">Manage contact and product enquiries.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <EnquiriesTable enquiries={JSON.parse(JSON.stringify(enquiries))} />
      </div>
    </div>
  );
}
