import { Chip, ChipProps, Link, Text, type ColumnDef } from "@jamsr-ui/react";
import { fDateTime } from "@/utils/time";
import { Withdraw, WithdrawStatus } from "../../types";

const getColorByStatus = (status: WithdrawStatus): ChipProps["color"] => {
  switch (status) {
    case WithdrawStatus.FAILED:
      return "danger";
    case WithdrawStatus.SUCCESS:
      return "success";
    case WithdrawStatus.PENDING:
      return "warning";
    default:
      return "default";
  }
};

export const columns: ColumnDef<Withdraw>[] = [
  {
    id: "transactionId",
    header: "Txn Id",
    accessorKey: "transactionId",
    cell: ({ row }) => {
      const { transactionId } = row.original;
      return <Link href="#">#{transactionId}</Link>;
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
          <Text className="text-success text-md font-semibold">${amount}</Text>
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
  // {
  //   id: "gasFee",
  //   header: "Gas Fee",
  //   accessorKey: "gasFee",
  //   accessorFn: ({ gasFee }) => `$${gasFee}`,
  // },
  {
    id: "netAmount",
    header: "Net Amount",
    accessorKey: "netAmount",
    cell: ({ row: { original } }) => {
      const { netAmount } = original;
      return <Text>${netAmount}</Text>;
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
          {WithdrawStatus[status]}
        </Chip>
      );
    },
  },
  {
    id: "createdAt",
    header: "Requested At",
    accessorKey: "createdAt",
    cell: ({ row: { original } }) => fDateTime(original.createdAt),
    accessorFn: ({ createdAt }) => new Date(createdAt).getTime(),
    size: 180,
  },
  {
    id: "updatedAt",
    header: "Proceed At",
    accessorKey: "updatedAt",
    cell: ({ row: { original } }) => fDateTime(original.updatedAt),
    accessorFn: ({ updatedAt }) => new Date(updatedAt).getTime(),
    size: 160,
  },
];
