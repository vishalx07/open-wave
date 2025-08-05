"use client";

import { useState } from "react";
import { SortingState } from "@tanstack/react-table";
import { useQueryState } from "nuqs";
import { DataTable } from "@jamsr-ui/react";
import { SearchTable } from "@/components/search-table";
import { mockTransactions } from "../../_mock/transactions";
import { TransactionCategory, TransactionStatus } from "../../types";
import { CategoryFilter } from "./category-filter";
import { columns } from "./columns";
import { StatusFilter } from "./status-filter";

export const TransactionsTable = () => {
  const [categoryFilter, setCategoryFilter] = useState<TransactionCategory[]>();
  const [statusFilter, setStatusFilter] = useState<TransactionStatus[]>();
  const [q] = useQueryState("q");

  const filterData = () => {
    return mockTransactions.filter((transaction) => {
      const matchesCategory = categoryFilter
        ? categoryFilter.includes(transaction.category)
        : true;

      const matchesStatus = statusFilter
        ? statusFilter.includes(transaction.status)
        : true;

      const matchesSearch = q
        ? transaction.description
            .toLowerCase()
            .trim()
            .includes(q.toLowerCase().trim()) ||
          transaction.id.toLowerCase().includes(q.toLowerCase()) ||
          transaction.paymentMethodDetails.name
            .toLowerCase()
            .trim()
            .includes(q.toLowerCase().trim()) ||
          transaction.amount.toString().includes(q.toLowerCase()) ||
          transaction.netAmount.toString().includes(q.toLowerCase()) ||
          transaction.charge.toString().includes(q.toLowerCase())
        : true;
      return matchesCategory && matchesStatus && matchesSearch;
    });
  };

  const [sorting, setSorting] = useState<SortingState>([
    { desc: true, id: "updatedAt" },
  ]);

  return (
    <DataTable
      data={filterData()}
      rowCount={mockTransactions.length}
      columns={columns}
      onSortingChange={setSorting}
      state={{
        sorting,
      }}
      tableProps={{
        topContent: (
          <div className="flex flex-wrap items-center justify-between gap-4 px-4">
            <SearchTable />
            <div className="flex items-center gap-2">
              <CategoryFilter
                selectedValues={categoryFilter}
                onChange={setCategoryFilter}
              />
              <StatusFilter
                selectedValues={statusFilter}
                onChange={setStatusFilter}
                categoryFilter={categoryFilter}
              />
            </div>
          </div>
        ),
      }}
    />
  );
};
