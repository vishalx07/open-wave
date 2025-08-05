import { type ColumnDef } from "@tanstack/react-table";
import { MoreVerticalIcon } from "lucide-react";
import { Avatar } from "@jamsr-ui/next";
import { IconButton, Text } from "@jamsr-ui/react";
import { TransactionStatus, type Transaction } from "../../types";
import { IconWrapper } from "../icon-wrapper";

export const COLUMNS: ColumnDef<Transaction>[] = [
  {
    header: "To/From",
    accessorKey: "user",
    cell: ({
      row: {
        original: { user },
      },
    }) => {
      return (
        <div className="flex items-center gap-2">
          <Avatar
            src={user.avatar}
            alt={user.name}
            width={50}
            height={50}
            size="sm"
            className="border-divider border"
          />
          <Text
            as="p"
            variant="paragraph2"
            className="font-semibold"
          >
            {user.name}
          </Text>
        </div>
      );
    },
  },
  {
    header: "Amount",
    accessorKey: "amount",
    cell: ({
      row: {
        original: { amount, status },
      },
    }) => {
      return (
        <Text
          as="p"
          className="text-foreground-secondary"
        >
          {status === TransactionStatus.DEBIT && "-"}${amount}
        </Text>
      );
    },
  },
  {
    header: "Account",
    accessorKey: "account",
    cell: ({
      row: {
        original: { account },
      },
    }) => {
      return (
        <Text
          as="p"
          className="text-foreground-secondary"
        >
          {account}
        </Text>
      );
    },
  },
  {
    header: "Date & Time",
    accessorKey: "createdAt",
    cell: ({
      row: {
        original: { createdAt },
      },
    }) => {
      return (
        <Text
          as="p"
          className="text-foreground-secondary"
        >
          {createdAt}
        </Text>
      );
    },
  },
  {
    header: "Payment Method",
    accessorKey: "paymentMethod",
    cell: ({
      row: {
        original: {
          paymentMethod: { icon, name },
        },
      },
    }) => {
      return (
        <div className="text-foreground-secondary flex items-center gap-2">
          <IconWrapper
            className="size-8"
            icon={icon}
          />
          <Text
            as="p"
            variant="paragraph2"
          >
            {name}
          </Text>
        </div>
      );
    },
  },
  {
    accessorKey: "Actions",
    cell: () => {
      return (
        <IconButton
          label="more"
          size="sm"
          variant="flat"
        >
          <MoreVerticalIcon
            className="text-foreground-secondary"
            size={16}
          />
        </IconButton>
      );
    },
  },
];
