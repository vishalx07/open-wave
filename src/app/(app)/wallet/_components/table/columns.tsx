import { Link } from "@jamsr-ui/next";
import { Avatar, Chip, ChipProps, Text, type ColumnDef } from "@jamsr-ui/react";
import { cn } from "@/lib/tw-merge";
import { fDateTime } from "@/utils/time";
import {
  TransactionCategory,
  TransactionStatus,
  type Transaction,
} from "../../types";

const getClassNameByStatus = (status: TransactionStatus) => {
  switch (status) {
    case TransactionStatus.PENDING:
      return { text: "text-yellow-600", bg: "bg-yellow-50" };
    case TransactionStatus.DEBIT:
      return { text: "text-red-600", bg: "bg-red-50" };
    case TransactionStatus.CREDIT:
      return { text: "text-green-600", bg: "bg-green-50" };
    default:
      return { text: "text-foreground-secondary", bg: "bg-gray-50" };
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
    header: "#",
    cell: ({ row }) => {
      const number = row.index + 1;
      return <Text className="text-foreground-secondary">{number}</Text>;
    },
    maxSize: 50,
  },
  {
    header: "Txn Id",
    accessorKey: "id",
    cell: ({ row }) => {
      const { id } = row.original;
      return <Link href={"#"}>#{id}</Link>;
    },
    size: 150,
  },
  {
    header: "Amount",
    accessorKey: "amount",
    cell: ({ row: { original } }) => {
      const { amount, status: transactionStatus, category } = original;
      const color = getClassNameByStatus(transactionStatus);
      return (
        <Text className={cn("text-sm font-semibold opacity-90", color.text)}>
          {(category === TransactionCategory.WITHDRAW ||
            transactionStatus === TransactionStatus.DEBIT) &&
            "-"}
          {(category === TransactionCategory.DEPOSIT ||
            transactionStatus === TransactionStatus.CREDIT) &&
            "+"}{" "}
          ${amount}
        </Text>
      );
    },

    size: 80,
  },
  {
    header: "Charge",
    accessorKey: "charge",
    cell: ({ row }) => {
      const { charge } = row.original;
      return (
        <Text
          variant="paragraph"
          className="text-secondary-foreground"
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
    cell: ({ row }) => {
      const { netAmount, status } = row.original;
      const isFailed = status === TransactionStatus.FAILED;
      return (
        <Text
          variant={"paragraph"}
          className={cn("opacity-90", isFailed && "text-foreground-secondary")}
        >
          ${netAmount}
        </Text>
      );
    },
    size: 80,
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
          variant="flat"
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
    cell: ({ row }) => {
      const {
        description,
        status,
        category,
        level,
        paymentMethodDetails: { name, logo },
      } = row.original;
      const isFailed = status === TransactionStatus.FAILED;
      const isReferral = category === TransactionCategory.REFERRAL_INCOME;

      return (
        <div
          className={cn(
            "text-foreground-secondary flex items-center gap-2 font-light",
            isFailed && "text-muted-foreground",
          )}
        >
          <Text variant="paragraph">
            {description}{" "}
            {isReferral && (
              <span className="text-muted-foreground italic">
                (level {level})
              </span>
            )}
          </Text>{" "}
          {" - "}
          <div className="flex items-center gap-2">
            <Avatar
              src={logo}
              alt={name}
              size="xs"
              radius="none"
              className="bg-transparent"
            />
            <Text>{name}</Text>
          </div>
        </div>
      );
    },
    size: 250,
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
    size: 180,
  },
];
