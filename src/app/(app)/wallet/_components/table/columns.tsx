import { Link } from "@jamsr-ui/next";
import { Avatar, Chip, ChipProps, Text, type ColumnDef } from "@jamsr-ui/react";
import { cn } from "@/lib/tw-merge";
import { fDateTime } from "@/utils/time";
import { TransactionStatus, type Transaction } from "../../types";

const getClassNameByStatus = (status: TransactionStatus) => {
  switch (status) {
    case TransactionStatus.PENDING:
      return { text: "text-yellow-600", bg: "bg-yellow-50" };
    case TransactionStatus.DEBIT:
      return { text: "text-red-600", bg: "bg-red-50" };
    case TransactionStatus.CREDIT:
      return { text: "text-green-600", bg: "bg-green-50" };
    default:
      return { text: "text-gray-600", bg: "bg-gray-50" };
  }
};

const getColorByStatus = (status: TransactionStatus): ChipProps["color"] => {
  switch (status) {
    case TransactionStatus.DEBIT:
      return "danger";
    case TransactionStatus.CREDIT:
      return "success";
    case TransactionStatus.PENDING:
      return "warning";
    default:
      return "default";
  }
};

export const columns: ColumnDef<Transaction>[] = [
  {
    header: "Txn Id",
    accessorKey: "id",
    cell: ({ row }) => {
      const { id } = row.original;
      return <Link href={"#"}>#{id}</Link>;
    },
  },
  {
    header: "Amount / Charge",
    accessorKey: "amount",
    cell: ({ row: { original } }) => {
      const { amount, status: transactionStatus, charge } = original;
      const color = getClassNameByStatus(transactionStatus);
      return (
        <div className="flex flex-col gap-1">
          <Text className={cn("text-md font-semibold opacity-90", color.text)}>
            {transactionStatus === TransactionStatus.DEBIT && "-"}
            {transactionStatus === TransactionStatus.CREDIT && "+"} ${amount}
          </Text>
          <Text className="text-foreground-secondary text-sm">${charge}</Text>
        </div>
      );
    },
    size: 150,
  },
  // {
  //   header: "Charge",
  //   accessorKey: "charge",
  //   cell: ({ row }) => {
  //     const { charge } = row.original;
  //     return (
  //       <Text
  //         variant="paragraph"
  //         className="text-secondary-foreground"
  //       >
  //         ${charge}
  //       </Text>
  //     );
  //   },
  // },
  {
    header: "Net Amount",
    accessorKey: "netAmount",
    cell: ({ row }) => {
      const { netAmount } = row.original;
      return <Text variant="paragraph">${netAmount}</Text>;
    },
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => {
      const { status } = row.original;
      const color = getColorByStatus(status);
      return (
        <Chip
          size="sm"
          radius="full"
          color={color}
          variant="outlined"
          className="opacity-80"
        >
          {TransactionStatus[status]}
        </Chip>
      );
    },
  },
  {
    header: "Description",
    accessorKey: "description",
    size: 150,
  },

  {
    header: "Payment method",
    accessorKey: "paymentMethodDetails",
    cell: ({ row }) => {
      const { name, logo } = row.original.paymentMethodDetails;
      return (
        <div className="flex items-center gap-2">
          <Avatar
            src={logo}
            alt={name}
            size="xs"
            className="bg-transparent"
          />
          <Text as="p">{name}</Text>
        </div>
      );
    },
    size: 150,
  },
  {
    header: "Created At",
    accessorKey: "createdAt",
    cell: ({ row: { original } }) => fDateTime(original.createdAt),
    accessorFn: ({ createdAt }) => new Date(createdAt).getTime(),
    size: 180,
  },
];
