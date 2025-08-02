import { RecentTransactionItem } from "../recent-txn-item";
import { recentTransactionsData } from "../../_mock/recent-transactions";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Tab,
  Tabs,
} from "@jamsr-ui/react";
import { DollarSign } from "lucide-react";

export const RecentTransactions = () => {
  return (
    <Card>
      <CardHeader
        heading="Recent Transactions"
        startContent={<DollarSign className="text-foreground-secondary" />}
        endContent={<Button variant="outlined">See All</Button>}
      />
      <CardContent className="flex flex-col gap-4">
        <FilterTabs />
        <div className="flex flex-col gap-2">
          {recentTransactionsData.map((item, ind) => {
            return <RecentTransactionItem key={ind} data={item} />;
          })}
        </div>
      </CardContent>
    </Card>
  );
};

const TABS = ["Income", "Outgoing", "Pending"];

const FilterTabs = () => {
  return (
    <Tabs
      classNames={{
        tabList: "w-full",
      }}
      defaultValue="Outgoing"
      className="w-full"
    >
      {TABS.map((t) => (
        <Tab key={t} value={t} heading={t} />
      ))}
    </Tabs>
  );
};
