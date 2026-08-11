"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Users, MessageSquare, Mail, LogOut, FileText } from "lucide-react";
import { toast } from "react-toastify";

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch (error) {
      toast.error("Failed to logout");
    }
  };

  const navItems = [
    { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { label: "Enquiries", href: "/admin/enquiries", icon: MessageSquare },
    { label: "Careers", href: "/admin/careers", icon: Users },
    { label: "Newsletters", href: "/admin/newsletters", icon: Mail },
    { label: "Blogs", href: "/admin/blogs", icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-[#F4F7FE] flex text-[#2B3674] font-sans">
      {/* Sidebar */}
      <aside className="w-[260px] bg-[#0A1A3B] text-white flex flex-col shrink-0">
        <div className="h-20 flex items-center px-6 border-b border-white/10">
          <Link href="/" className="flex items-center gap-3">
             <img src="/logos/logo.png" alt="Logo" className="h-10 bg-white p-1 rounded object-contain" />
             <div>
                <h2 className="font-bold tracking-wider leading-tight text-sm uppercase text-[#FFB800]">Mewar</h2>
                <span className="eyebrow text-white/50">Admin Panel</span>
             </div>
          </Link>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                  isActive 
                    ? "bg-[#FFB800] text-[#0A1A3B]" 
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                <item.icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-white/10">
           <button 
             onClick={handleLogout}
             className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-red-400 hover:bg-red-400/10 transition-colors"
           >
             <LogOut size={18} />
             Logout
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 shrink-0">
          <div className="font-semibold text-lg">
             {navItems.find(i => i.href === pathname)?.label || "Dashboard"}
          </div>
          <div className="flex items-center gap-4">
             <div className="text-sm text-right hidden sm:block">
                <p className="font-bold leading-tight">Admin User</p>
                <p className="text-xs text-gray-500">Super Admin</p>
             </div>
             <div className="w-10 h-10 rounded-full bg-gray-100 border-2 border-[#0A1A3B] shadow-sm flex items-center justify-center font-bold text-[#0A1A3B]">
                A
             </div>
          </div>
        </header>
        
        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-8">
           {children}
        </div>
      </main>
    </div>
  );
}
