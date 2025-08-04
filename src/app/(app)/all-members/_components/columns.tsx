import { CircleCheck, CircleX, Info } from "lucide-react";
import { Chip, Popover, type ColumnDef } from "@jamsr-ui/react";
import { TableCell, TableUser } from "@/components/table";
import { fDateTime } from "@/utils/time";
import type { Team } from "../type";

export const COLUMNS: ColumnDef<Team>[] = [
  {
    accessorKey: "fullname",
    header: "Member",
    size: 240,
    cell: ({ row }) => {
      const { email, fullname, avatarUrl } = row.original;
      return (
        <TableUser
          avatarUrl={avatarUrl}
          name={fullname}
          description={email}
        />
      );
    },
  },
  {
    accessorKey: "username",
    header: "Username / User ID",
    size: 120,
    cell: ({ row }) => {
      const { username, userId } = row.original;
      return (
        <TableCell
          title={username}
          subtitle={String(userId)}
        />
      );
    },
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
    size: 160,
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
          color={status === "active" ? "success" : "danger"}
          startContent={
            status === "active" ? (
              <CircleCheck className="text-success size-3" />
            ) : (
              <CircleX className="text-danger size-3" />
            )
          }
          className="font-medium capitalize"
        >
          {status}
        </Chip>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Registered at",
    size: 120,
    accessorFn: (row) => fDateTime(row.createdAt),
  },
  {
    accessorKey: "plans",
    header: "Active Plans",
    cell: ({
      row: {
        original: { plans },
      },
    }) => {
      const hasPlans = Boolean(plans.length);
      return (
        <Chip
          size="sm"
          variant="dot"
          color={hasPlans ? "success" : "danger"}
          endContent={
            hasPlans ? (
              <Popover
                showArrow
                trigger={<Info size={12} />}
                className="p-2 shadow-none"
                triggerOn="hover"
                placement="right"
              >
                <ListPlans plans={plans} />
              </Popover>
            ) : null
          }
          className="font-medium capitalize"
        >
          {hasPlans ? `${plans.length} Plans` : "No plans"}
        </Chip>
      );
    },
  },
];

type ListPlansProps = {
  plans: string[];
};

function ListPlans({ plans }: ListPlansProps) {
  return (
    <ul className="flex list-inside list-disc flex-col gap-1.5">
      {plans.map((plan) => (
        <li key={plan}>{plan}</li>
      ))}
    </ul>
  );
}
