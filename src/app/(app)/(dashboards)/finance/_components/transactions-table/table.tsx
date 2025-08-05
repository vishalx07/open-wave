"use client";

import { useState } from "react";
import { type SortingState } from "@tanstack/react-table";
import { DataTable } from "@jamsr-ui/react";
import { type Transaction } from "../../types";
import { COLUMNS } from "./columns";

type Props = {
  data: Transaction[];
};
export const TransactionsTable = ({ data }: Props) => {
  const [sorting, setSorting] = useState<SortingState>([
    { desc: true, id: "createdAt" },
  ]);

  return (
    <DataTable
      enableRowSelection
      columns={COLUMNS}
      data={data}
      onSortingChange={setSorting}
      state={{ sorting }}
      variant="bordered"
    />
  );
};
