import React from "react";
import { MessageSquare, Users, Mail, TrendingUp } from "lucide-react";
import connectToDatabase from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";
import Career from "@/models/Career";
import Newsletter from "@/models/Newsletter";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  let totalEnquiries = 0;
  let totalCareers = 0;
  let totalNewsletters = 0;
  let recentEnquiries: any[] = [];
  let dbError = false;

  try {
    const conn = await connectToDatabase();
    if (conn) {
      totalEnquiries = await Enquiry.countDocuments();
      totalCareers = await Career.countDocuments();
      totalNewsletters = await Newsletter.countDocuments();
      recentEnquiries = await Enquiry.find().sort({ createdAt: -1 }).limit(5);
    }
  } catch (error) {
    console.error("MongoDB Connection Error in Admin Dashboard:", error);
    dbError = true;
  }

  const stats = [
    { label: "Total Enquiries", value: totalEnquiries, icon: MessageSquare, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Job Applications", value: totalCareers, icon: Users, color: "text-green-600", bg: "bg-green-50" },
    { label: "Subscribers", value: totalNewsletters, icon: Mail, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Total Revenue", value: "N/A", icon: TrendingUp, color: "text-yellow-600", bg: "bg-yellow-50" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#2B3674]">Welcome back, Admin! 👋</h1>
        <p className="text-sm text-gray-500 mt-1">Here's what's happening with your business today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
             <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.bg} ${stat.color}`}>
                <stat.icon size={24} />
             </div>
             <div>
                <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                <h3 className="text-2xl font-bold text-[#2B3674]">{stat.value}</h3>
             </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* Chart Placeholder (Left) */}
         <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col">
            <div className="flex justify-between items-center mb-6">
               <h3 className="text-lg font-bold text-[#2B3674]">Activity Overview</h3>
               <select className="bg-gray-50 border border-gray-200 text-sm rounded-lg px-3 py-1 outline-none text-gray-600 font-medium">
                  <option>Monthly</option>
                  <option>Weekly</option>
               </select>
            </div>
            <div className="flex-1 min-h-[300px] flex items-center justify-center border-2 border-dashed border-gray-100 rounded-xl bg-gray-50/50">
               <p className="text-gray-400 font-medium text-sm">Chart Data Visualization Area</p>
            </div>
         </div>

         {/* Recent Enquiries List (Right) */}
         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-6">
               <h3 className="text-lg font-bold text-[#2B3674]">Recent Enquiries</h3>
               <Link href="/admin/enquiries" className="text-xs text-blue-600 font-bold hover:underline">View All</Link>
            </div>
            
            <div className="space-y-4">
               {recentEnquiries.map((enq) => (
                  <div key={String(enq._id)} className="flex flex-col border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                     <div className="flex justify-between items-start">
                        <span className="font-bold text-sm text-[#2B3674] truncate">{enq.name}</span>
                        <span className="text-[10px] text-gray-400 whitespace-nowrap ml-2">
                           {new Date(enq.createdAt).toLocaleDateString()}
                        </span>
                     </div>
                     <span className="text-xs text-gray-500 truncate max-w-full">
                        {enq.type === 'Product' ? `Interested in ${enq.productName}` : 'General Enquiry'}
                     </span>
                  </div>
               ))}
               {recentEnquiries.length === 0 && (
                  <p className="text-sm text-gray-400 text-center py-4">No recent enquiries found.</p>
               )}
            </div>
         </div>
      </div>
    </div>
  );
}
