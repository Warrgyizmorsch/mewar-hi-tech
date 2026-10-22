import React from "react";

export default function AdminDashboardLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="h-8 w-48 bg-muted rounded-lg" />
          <div className="h-4 w-64 bg-muted/70 rounded" />
        </div>
        <div className="h-10 w-32 bg-primary/30 rounded-lg" />
      </div>

      {/* Stats Cards Skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-5 space-y-2">
            <div className="h-3 w-20 bg-muted/70 rounded" />
            <div className="h-8 w-14 bg-muted rounded" />
          </div>
        ))}
      </div>

      {/* Table Skeleton */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="h-12 bg-muted px-4 flex items-center justify-between">
          <div className="h-4 w-32 bg-muted-foreground/20 rounded" />
          <div className="h-4 w-20 bg-muted-foreground/20 rounded" />
        </div>
        <div className="divide-y divide-border">
          {[1, 2, 3, 4, 5, 6].map((row) => (
            <div key={row} className="p-4 flex items-center justify-between gap-4">
              <div className="space-y-1.5 flex-1">
                <div className="h-4 w-1/2 bg-muted rounded" />
                <div className="h-3 w-1/3 bg-muted/70 rounded" />
              </div>
              <div className="h-6 w-20 bg-muted rounded-full hidden sm:block" />
              <div className="h-8 w-16 bg-muted rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
