"use client";

import { useState } from "react";
import { useQueryState } from "nuqs";
import { DataTable } from "@jamsr-ui/react";
import { SearchTable } from "@/components/search-table";
import { mockWithdrawals } from "../../../_mock/withdraw";
import { WithdrawStatus, WithdrawType } from "../../../types";
import { columns } from "./columns";
import { StatusFilter } from "./status-filter";
import { TypeFilter } from "./type-filter";

export const WithdrawHistoryTable = () => {
  const [typeFilter, settypeFilter] = useState<WithdrawType[]>();
  const [statusFilter, setStatusFilter] = useState<WithdrawStatus[]>();
  const [q] = useQueryState("q");

  const filterData = () => {
    return mockWithdrawals.filter((withdraw) => {
      const machesType = typeFilter ? typeFilter.includes(withdraw.type) : true;
      const matchesStatus = statusFilter
        ? statusFilter.includes(withdraw.status)
        : true;

      const matchesSearch = q
        ? withdraw.message
            .toLowerCase()
            .trim()
            .includes(q.toLowerCase().trim()) ||
          withdraw.id.toLowerCase().includes(q.toLowerCase()) ||
          withdraw.paymentMethodDetails.name
            .toLowerCase()
            .trim()
            .includes(q.toLowerCase().trim()) ||
          withdraw.amount.toString().includes(q.toLowerCase()) ||
          withdraw.netAmount.toString().includes(q.toLowerCase()) ||
          withdraw.charge.toString().includes(q.toLowerCase())
        : true;
      return machesType && matchesStatus && matchesSearch;
    });
  };
  return (
    <DataTable
      data={filterData()}
      rowCount={filterData().length}
      columns={columns}
      className="gap-4 px-0"
      tableProps={{
        topContent: (
          <div className="flex flex-wrap items-center justify-between gap-4 px-4">
            <SearchTable />
            <div className="flex items-center gap-2">
              <TypeFilter
                selectedValues={typeFilter}
                onChange={settypeFilter}
              />
              <StatusFilter
                selectedValues={statusFilter}
                onChange={setStatusFilter}
              />
            </div>
          </div>
        ),
      }}
    />
  );
};
