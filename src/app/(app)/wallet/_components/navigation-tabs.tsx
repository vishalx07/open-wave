"use client";

import { Tab, Tabs } from "@jamsr-ui/react";
import { DepositHistoryTable } from "../deposit/_components/table/deposit-table";
import { WithdrawHistoryTable } from "../withdraw/table/withdraw-table";
import { TransactionsTable } from "./table/transaction-table";

const TABS = [
  {
    id: "transactions",
    label: "Transactions",
    content: <TransactionsTable />,
  },
  {
    id: "deposits",
    label: "Deposits",
    content: <DepositHistoryTable />,
  },
  {
    id: "withdrawals",
    label: "Withdrawals",
    content: <WithdrawHistoryTable />,
  },
] as const;

export const NavigationTabs = () => {
  return (
    <Tabs
      variant="underlined"
      classNames={{
        panel: "p-0",
        tabList: "p-2",
      }}
    >
      {TABS.map(({ id, label, content }) => (
        <Tab
          key={id}
          heading={label}
          value={id}
        >
          <div className="bg-background p-4">{content}</div>
        </Tab>
      ))}
    </Tabs>
  );
};
