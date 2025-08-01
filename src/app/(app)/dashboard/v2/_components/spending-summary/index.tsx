import { ChartPieIcon, InfoIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Select,
  SelectItem,
  Text,
} from "@jamsr-ui/react";
import { SummaryChart } from "./summary-chart";
import { SummaryStats } from "./summay-stats";

export const SpendingSummary = () => {
  return (
    <Card className="h-full w-full min-w-0">
      <CardHeader
        heading="Spending Summary"
        startContent={<ChartPieIcon />}
        endContent={
          <Select defaultValue={["last-year"]}>
            <SelectItem value="3-months">3 Months</SelectItem>
            <SelectItem value="6-months">6 Months</SelectItem>
            <SelectItem value="last-year">Last Year</SelectItem>
            <SelectItem value="all-time">All Time</SelectItem>
          </Select>
        }
      />
      <CardContent className="flex flex-col gap-4">
        <Divider />
        <div className="pointer-events-none relative flex w-full flex-1 items-center justify-center">
          <SummaryChart />
          <div className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <Text
              className="text-foreground-secondary"
              variant="paragraph2"
            >
              SPEND
            </Text>
            <Text
              as="h1"
              variant="h3"
              className="font-semibold"
            >
              $1,800.00
            </Text>
          </div>
        </div>

        <Divider />
        <SummaryStats />
        <div className="gapp-2 border-divider flex items-center justify-between rounded-md border px-2 py-1">
          <Text
            as="p"
            variant="paragraph2"
            className="text-foreground-secondary"
          >
            Your weekly spending limit is $2000.
          </Text>
          <InfoIcon size={14} />
        </div>
      </CardContent>
    </Card>
  );
};
