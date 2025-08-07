"use client";

import { useState } from "react";
import { SortingState } from "@tanstack/react-table";
import { Card, CardHeader, DataTable } from "@jamsr-ui/react";
import { mockPlans } from "../../_mock/plan";
import { COLUMNS } from "./columns";
import { CreatePlan } from "./create-plan";

export const PlanSettingTable = () => {
  const [sorting, setSorting] = useState<SortingState>([
    { desc: true, id: "createdAt" },
  ]);

  return (
    <Card>
      <CardHeader
        heading="Plans"
        endContent={<CreatePlan />}
      />
      <DataTable
        data={mockPlans}
        columns={COLUMNS}
        rowCount={mockPlans.length}
        onSortingChange={setSorting}
        state={{
          sorting,
        }}
       
      />
    </Card>
  );
};
