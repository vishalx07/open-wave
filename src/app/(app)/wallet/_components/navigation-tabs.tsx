"use client";

import { useQueryState } from "nuqs";
import { Tab, Tabs } from "@jamsr-ui/react";
import { DepositHistoryTable } from "../deposit/_components/table/deposit-table";
import { WithdrawHistoryTable } from "../withdraw/_components/table/withdraw-table";
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

type TabKey = (typeof TABS)[number]["id"];

export const NavigationTabs = () => {
  const [tab, setTab] = useQueryState<TabKey>("tab", {
    defaultValue: "transactions",
    parse: (value) => value as TabKey,
  });

  return (
    <Tabs
      variant="underlined"
      classNames={{
        panel: "p-0",
        tabList: "p-3 pb-0",
      }}
      value={tab}
      onValueChange={setTab}
    >
      {TABS.map(({ id, label, content }) => (
        <Tab
          key={id}
          heading={label}
          value={id}
        >
          <div className="bg-background p-0">{content}</div>
        </Tab>
      ))}
    </Tabs>
  );
};
