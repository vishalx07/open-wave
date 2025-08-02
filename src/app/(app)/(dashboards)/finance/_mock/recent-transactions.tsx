import { ChartPieIcon, HouseIcon, ShoppingCartIcon } from "lucide-react";
import { Dashboard2Icons } from "../icons";
import { type RecentTransaction } from "../types";

export const recentTransactionsData: RecentTransaction[] = [
  {
    category: "Stock Dividend",
    message: "Payment from stock investments.",
    amount: "$1,500.00",
    date: "September 15, 2024",
    icon: <ChartPieIcon size={16} />,
  },
  {
    category: "Rental Income",
    message: "Rental payment from Mr. Dudley.",
    amount: "$800.00",
    date: "September 17, 2024",
    icon: <HouseIcon size={16} />,
  },
  {
    category: "Grocery Shopping",
    message: "Purchase of monthly groceries.",
    amount: "-$84.14-$84.14",
    date: "September 16, 2024",
    icon: <ShoppingCartIcon size={16} />,
  },
  {
    category: "Refund from Amazon",
    message: "Refund of order no #123456",
    amount: "$1,500.00",
    date: "September 15, 2024",
    icon: <Dashboard2Icons.AmazonIcon className="size-4" />,
  },
];
