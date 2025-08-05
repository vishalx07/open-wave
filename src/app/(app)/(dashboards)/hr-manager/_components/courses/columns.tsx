"use client";

import { EllipsisVertical } from "lucide-react";
import { Chip, LinearProgress, Text, type ColumnDef } from "@jamsr-ui/react";
import { TableCell, TableUser } from "@/components/table";
import { Icons } from "@/configs/icon";
import { type Course } from "./data";

export const COLUMNS: ColumnDef<Course>[] = [
  {
    accessorKey: "instructor.name",
    header: "Instructor",
    size: 200,
    cell: ({ row }) => {
      const { name, role, avatarUrl } = row.original.instructor;
      return (
        <TableUser
          avatarUrl={avatarUrl}
          name={name}
          description={role}
        />
      );
    },
  },
  {
    accessorKey: "courseName",
    header: "Course Name",
    size: 160,
    cell: ({ row }) => {
      const { courseName, dateRange } = row.original;
      return (
        <TableCell
          title={courseName}
          subtitle={dateRange}
        />
      );
    },
  },
  {
    accessorKey: "progress",
    header: "Progress",
    size: 160,
    cell: ({ row }) => {
      const { progress } = row.original;
      return (
        <div className="flex items-center gap-2">
          <LinearProgress
            progress={progress}
            className="w-full"
          />
          <Text
            as="p"
            variant="caption"
            className="text-foreground-secondary"
          >
            {progress}%
          </Text>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const { status } = row.original;
      return (
        <Chip
          size="sm"
          variant="flat"
          color={status === "Completed" ? "success" : "warning"}
          startContent={
            status === "Completed" ? (
              <Icons.Check className="text-success size-3" />
            ) : (
              <Icons.Clock className="text-warning size-3" />
            )
          }
          className="font-medium"
        >
          {status}
        </Chip>
      );
    },
  },
  {
    accessorKey: "action",
    header: "",
    maxSize: 60,
    cell: () => <EllipsisVertical className="size-5" />,
  },
];
