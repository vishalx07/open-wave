import { Chip, ChipProps, Link, Text, type ColumnDef } from "@jamsr-ui/react";
import { fDateTime } from "@/utils/time";
import { Deposit, DepositStatus } from "../../../types";

const getColorByStatus = (status: DepositStatus): ChipProps["color"] => {
  switch (status) {
    case DepositStatus.FAILED:
      return "danger";
    case DepositStatus.SUCCESS:
      return "success";
    case DepositStatus.PENDING:
      return "warning";
    default:
      return "default";
  }
};

export const columns: ColumnDef<Deposit>[] = [
  {
    id: "transactionId",
    header: "Txn Id",
    accessorKey: "transactionId",
    cell: ({ row }) => {
      const { transactionId } = row.original;
      return <Link href={"#"}>#{transactionId}</Link>;
    },
    minSize: 150,
  },

  {
    id: "amount",
    header: "Amount / Charge",
    accessorKey: "amount",
    cell: ({ row: { original } }) => {
      const { amount, charge } = original;
      return (
        <div className="flex flex-col gap-1">
          <Text
            as="p"
            className="text-success text-md font-semibold"
          >
            ${amount}
          </Text>
          <Text className="text-foreground-secondary text-sm">${charge}</Text>
        </div>
      );
    },
    size: 150,
  },
  // {
  //   id: "charge",
  //   header: "charge",
  //   accessorKey: "charge",
  //   accessorFn: ({ charge }) => `$${charge}`,
  // },
  {
    id: "netAmount",
    header: "Net Amount",
    accessorKey: "netAmount",
    cell: ({ row: { original } }) => {
      const { netAmount } = original;
      return <Text variant="paragraph">${netAmount}</Text>;
    },
    size: 150,
  },
  {
    id: "methodName",
    header: "method",
    accessorKey: "methodName",
    size: 120,
  },
  {
    id: "status",
    header: "status",
    accessorKey: "status",
    cell: ({ row }) => {
      const { status } = row.original;
      return (
        <Chip
          size="sm"
          variant="outlined"
          className="opacity-80"
          color={getColorByStatus(status)}
        >
          {DepositStatus[status]}
        </Chip>
      );
    },
  },
  {
    header: "Requested At",
    accessorKey: "createdAt",
    cell: ({ row: { original } }) => fDateTime(original.createdAt),
    size: 180,
  },
  {
    header: "Proceed At",
    accessorKey: "updatedAt",
    cell: ({ row: { original } }) => fDateTime(original.updatedAt || ""),
    size: 160,
  },
];
