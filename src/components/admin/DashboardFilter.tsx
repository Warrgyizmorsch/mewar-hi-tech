"use client";

import React, { useState } from "react";
import SelectionDropdown from "@/components/ui/SelectionDropdown";

export default function DashboardFilter() {
  const [filter, setFilter] = useState("Monthly");

  return (
    <div className="w-32">
      <SelectionDropdown
        value={filter}
        onChange={setFilter}
        options={["Monthly", "Weekly"]}
        className="text-sm font-medium"
      />
    </div>
  );
}
