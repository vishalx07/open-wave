"use client";

import { SearchIcon } from "lucide-react";
import { DataTable, Input } from "@jamsr-ui/react";
import { mockDeposits } from "../../../_mock/deposits";
import { columns } from "./columns";
import { StatusFilter } from "./status-filter";
import { TypeFilter } from "./type-filter";

export const DepositHistoryTable = () => {
  return (
    <DataTable
      data={mockDeposits}
      rowCount={mockDeposits.length}
      columns={columns}
      className="gap-4 px-0"
      tableProps={{
        topContent: (
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Input
              placeholder="Search..."
              isFilled
              startContent={<SearchIcon size={20} />}
              className="min-w-[300px]"
            />
            <div className="flex items-center gap-2">
              <TypeFilter />
              <StatusFilter />
            </div>
          </div>
        ),
      }}
    />
  );
};
