import { ArrowDownLeftIcon, ArrowUpRightIcon } from "lucide-react";
import { TransactionStatus, type Transaction } from "../types";

export const transactionsData: Transaction[] = [
  {
    id: "APX1242352",
    amount: 45.2,
    charge: 2.5,
    createdAt: "September 12, 2024",
    account: "Ops Payroll",
    bankDescription: "APEXLLC_V84G2H16D ・ REF #84664",
    status: TransactionStatus.DEBIT,
    user: {
      userId: "A-8486214",
      name: "James Brown",
      avatar: "/james.png",
    },
    paymentMethod: {
      name: "Money Transfer",
      icon: <ArrowUpRightIcon />,
    },
  },
  {
    id: "APX1242353",
    amount: 234.1,
    charge: 0.3,
    createdAt: "September 12, 2024",
    account: "Checking",
    bankDescription: "APEXLLC_V84G2H16D ・ REF #84664",
    status: TransactionStatus.CREDIT,
    user: {
      userId: "A-8486215",
      name: "Sophia Williams",
      avatar: "/sophia.png",
    },
    paymentMethod: {
      name: "Money Transfer",
      icon: <ArrowDownLeftIcon />,
    },
  },
  {
    id: "APX1242354",
    amount: 45.3,
    charge: 0.3,
    createdAt: "September 12, 2024",
    account: "Checking",
    bankDescription: "APEXLLC_V84G2H16D ・ REF #84664",
    status: TransactionStatus.DEBIT,
    user: {
      userId: "A-8486216",
      name: "Matthew Johnson",
      avatar: "/arthur.png",
    },
    paymentMethod: {
      name: "Money Transfer",
      icon: <ArrowUpRightIcon />,
    },
  },
];
