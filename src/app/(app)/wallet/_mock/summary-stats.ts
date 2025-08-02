import { Activity, CreditCard, DollarSign, TrendingUp } from "lucide-react";
import { TransactionStatus } from "../types";
import { mockTransactions } from "./transactions";

const totalBalance = mockTransactions.reduce(
  (acc, transaction) => acc + transaction.netAmount,
  0,
);
const totalIncome = mockTransactions
  .filter((t) => t.amount > 0)
  .reduce((acc, transaction) => acc + transaction.amount, 0);
const totalExpenses = Math.abs(
  mockTransactions
    .filter((t) => t.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0),
);
const pendingTransactions = mockTransactions.filter(
  (t) => t.status === TransactionStatus.PENDING,
).length;

export const mockSummaryStats = [
  {
    label: "Total Balance",
    value: totalBalance,
    icon: DollarSign,
    color: {
      bg: "bg-blue-950",
      text: "text-blue-600",
    },
  },
  {
    label: "Total Income",
    value: totalIncome,
    icon: TrendingUp,
    color: {
      bg: "bg-green-950",
      text: "text-green-600",
    },
  },
  {
    label: "Total Expenses",
    value: totalExpenses,
    icon: CreditCard,
    color: {
      bg: "bg-red-950",
      text: "text-red-600",
    },
  },
  {
    label: "Pending",
    value: pendingTransactions,
    icon: Activity,
    color: {
      bg: "bg-amber-950",
      text: "text-amber-600",
    },
  },
];
