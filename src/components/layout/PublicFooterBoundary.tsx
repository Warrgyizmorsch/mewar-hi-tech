"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function PublicFooterBoundary({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/admin" || pathname.startsWith("/admin/") ||
      pathname === "/3d-experience" || pathname.startsWith("/3d-experience/")) {
    return null;
  }

  return children;
}
