import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Select,
  SelectItem,
} from "@jamsr-ui/react";
import { LineChartIcon } from "lucide-react";
import { OverviewChart } from "./overview-chart";
import { OverviewStats } from "./overview-stats";

export const BudgetOverview = () => {
  return (
    <Card>
      <CardHeader
        heading="Budget Overview"
        startContent={<LineChartIcon />}
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
        <OverviewStats />
        <Divider />
        <OverviewChart />
      </CardContent>
    </Card>
  );
};
