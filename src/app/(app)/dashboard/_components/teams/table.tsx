"use client";

import { DataTable } from "@jamsr-ui/react";
import { columns } from "./columns";
import { TEAMS_DATA } from "./data";

export const TeamTable = () => {
  return (
    <DataTable
      data={TEAMS_DATA}
      columns={columns}
    />
  );
};
