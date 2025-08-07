import { ColumnDef } from "@tanstack/react-table";
import { Chip, Text } from "@jamsr-ui/react";
import { fPercent, fPrice, fValidity } from "@/utils/number";
import { fDateTime } from "@/utils/time";
import { Plan } from "../../types";
import { DeletePlan } from "./delete-plan";
import { EditPlan } from "./edit-plan";

export const COLUMNS: ColumnDef<Plan>[] = [
  {
    header: "#",
    cell: ({ row }) => {
      const number = row.index + 1;
      return <Text className="text-foreground-secondary">{number}</Text>;
    },
    maxSize: 50,
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Investment",
    accessorKey: "maxInvestment",
    accessorFn: ({ minInvestment, maxInvestment }) =>
      `${fPrice(minInvestment)} - ${fPrice(maxInvestment)}`,
    size: 160,
  },
  {
    header: "Daily ROI",
    accessorKey: "ROI",
    accessorFn: ({ roi }) => fPercent(roi),
  },
  {
    header: "Validity",
    accessorKey: "validity",
    accessorFn: ({ validity }) => fValidity(validity),
  },
  {
    header: "Status",
    accessorKey: "isActive",
    cell: ({
      row: {
        original: { isActive },
      },
    }) => (
      <Chip
        size="sm"
        variant="flat"
        color={isActive ? "success" : "danger"}
      >
        {isActive ? "active" : "inactive"}
      </Chip>
    ),
  },
  {
    header: "Created At",
    accessorKey: "createdAt",
    accessorFn: (row) => fDateTime(row.createdAt),
    size: 120,
  },
  {
    header: "Updated At",
    accessorKey: "updatedAt",
    cell: ({ row: { original } }) => fDateTime(original.updatedAt ?? null),
  },
  {
    header: "Action",
    accessorKey: "action",
    cell({ row: { original } }) {
      return (
        <div className="flex flex-row gap-1">
          <EditPlan data={original} />
          <DeletePlan />
        </div>
      );
    },
    size: 120,
  },
];
