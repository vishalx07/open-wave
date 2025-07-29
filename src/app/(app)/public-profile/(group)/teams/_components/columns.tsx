import { CircleCheck, CircleX, EllipsisVertical } from "lucide-react";
import { Chip, type ColumnDef } from "@jamsr-ui/react";
import { TableTimestamp, TableUser } from "@/components/table";
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
    accessorKey: "userId",
    header: "User ID",
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
    accessorKey: "referralId",
    header: "Referral ID",
    accessorFn: ({ referralId }) => (referralId === 0 ? "root" : referralId),
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
    cell: ({ row }) => {
      const { createdAt } = row.original;
      return <TableTimestamp time={createdAt} />;
    },
  },
  {
    accessorKey: "action",
    header: "",
    maxSize: 60,
    cell: () => <EllipsisVertical className="size-5" />,
  },
];
