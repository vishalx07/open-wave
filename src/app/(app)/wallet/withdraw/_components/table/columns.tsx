import {
  Avatar,
  Chip,
  ChipProps,
  Link,
  Text,
  type ColumnDef,
} from "@jamsr-ui/react";
import { cn } from "@/lib/tw-merge";
import { fDateTime } from "@/utils/time";
import { Withdraw, WithdrawStatus } from "../../../types";

const getColorByStatus = (status: WithdrawStatus): ChipProps["color"] => {
  switch (status) {
    case WithdrawStatus.FAILED:
      return "danger";
    case WithdrawStatus.DEBIT:
      return "success";
    case WithdrawStatus.PENDING:
      return "warning";
    default:
      return "default";
  }
};

const getClassNameByStatus = (status: WithdrawStatus) => {
  switch (status) {
    case WithdrawStatus.PENDING:
      return { text: "text-yellow-600", bg: "bg-yellow-50" };
    case WithdrawStatus.FAILED:
      return { text: "text-foreground-secondary", bg: "bg-gray-50" };
    case WithdrawStatus.DEBIT:
      return { text: "text-green-600", bg: "bg-green-50" };
  }
};

export const columns: ColumnDef<Withdraw>[] = [
  {
    header: "#",
    cell: ({ row }) => {
      const number = row.index + 1;
      return <Text className="text-foreground-secondary">{number}</Text>;
    },
    maxSize: 50,
  },
  {
    header: "Txn Id",
    accessorKey: "transactionId",
    cell: ({ row }) => {
      const { transactionId } = row.original;
      return <Link href="#">#{transactionId}</Link>;
    },
    minSize: 150,
  },
  {
    header: "Amount",
    accessorKey: "amount",
    cell: ({ row: { original } }) => {
      const { amount, status } = original;
      const isFailed = status === WithdrawStatus.FAILED;
      const color = getClassNameByStatus(status);
      return (
        <Text
          as="p"
          className={cn(
            "text-sm font-semibold opacity-90",
            {
              "text-muted-foreground": isFailed,
            },
            color.text,
          )}
        >
          ${amount}
        </Text>
      );
    },
    size: 80,
  },
  {
    header: "charge",
    accessorKey: "charge",
    cell: ({ row: { original } }) => {
      const { charge, status } = original;
      const isFailed = status === WithdrawStatus.FAILED;
      return (
        <Text
          className={cn("text-foreground-secondary", {
            "text-muted-foreground": isFailed,
          })}
        >
          ${charge}
        </Text>
      );
    },
    size: 80,
  },
  {
    header: "Net Amount",
    accessorKey: "netAmount",
    cell: ({ row: { original } }) => {
      const { netAmount, status } = original;
      const isFailed = status === WithdrawStatus.FAILED;
      return (
        <Text
          variant="paragraph"
          className={cn("opacity-90", {
            "text-foreground-secondary": isFailed,
          })}
        >
          ${netAmount}
        </Text>
      );
    },
    size: 80,
  },
  {
    header: "method",
    accessorKey: "methodName",
    cell: ({ row: { original } }) => {
      const { paymentMethodDetails, status, message } = original;
      const isFailed = status === WithdrawStatus.FAILED;
      return (
        <div
          className={cn(
            "text-foreground-secondary flex items-center gap-2 font-light",
            isFailed && "text-muted-foreground",
          )}
        >
          <Text variant="paragraph">{message} </Text> {" - "}
          <div className="flex items-center gap-2">
            <Avatar
              src={paymentMethodDetails.logo}
              alt={paymentMethodDetails.name}
              size="xs"
              radius="none"
              className="bg-transparent"
            />
            <Text as="p">{paymentMethodDetails.name}</Text>
          </div>
        </div>
      );
    },
    size: 250,
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
          variant="flat"
          color={getColorByStatus(status)}
          className="opacity-90"
        >
          {WithdrawStatus[status]}
        </Chip>
      );
    },
  },
  {
    header: "Created At",
    accessorKey: "createdAt",
    cell: ({ row: { original } }) => (
      <Text
        variant="paragraph"
        className="text-foreground-secondary font-light"
      >
        {fDateTime(original.createdAt)}
      </Text>
    ),
    accessorFn: ({ createdAt }) => new Date(createdAt).getTime(),
    size: 180,
  },
  {
    header: "Updated At",
    accessorKey: "updatedAt",
    cell: ({ row: { original } }) => (
      <Text
        variant="paragraph"
        className="text-foreground-secondary font-light"
      >
        {fDateTime(original.updatedAt ?? "")}
      </Text>
    ),
  },
];
