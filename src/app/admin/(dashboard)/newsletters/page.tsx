import React from "react";
import connectToDatabase from "@/lib/mongodb";
import Newsletter from "@/models/Newsletter";

export const dynamic = "force-dynamic";

export default async function AdminNewsletters() {
  let subscribers: any[] = [];
  try {
    const conn = await connectToDatabase();
    if (conn) {
      subscribers = await Newsletter.find().sort({ createdAt: -1 });
    }
  } catch (err) {
    console.error("Failed to load newsletter subscribers:", err);
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-[#2B3674]">Newsletter Subscribers</h1>
          <p className="text-sm text-gray-500 mt-1">View all email addresses subscribed to the newsletter.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-100">
              <tr>
                <th className="px-6 py-4">Email Address</th>
                <th className="px-6 py-4">Subscription Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {subscribers.map((sub) => (
                <tr key={String(sub._id)} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-[#2B3674]">{sub.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap" suppressHydrationWarning>
                    {sub.createdAt ? new Date(sub.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) : "-"}
                  </td>
                </tr>
              ))}
              {subscribers.length === 0 && (
                <tr>
                  <td colSpan={2} className="px-6 py-8 text-center text-gray-400">No subscribers found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
