"use client";

import { UserRoundCheck } from "lucide-react";
import { LineChart, type ChartConfig } from "@jamsr-ui/charts";
import { Button, Card, CardContent, Divider, Text } from "@jamsr-ui/react";
import { Icons } from "@/configs/icon";

export const EmployeeRating = () => {
  return (
    <Card>
      <CardContent>
        <div className="flex h-12 items-center gap-2 pb-4">
          <UserRoundCheck className="text-foreground-secondary size-5" />
          <Text
            as="h3"
            className="flex-1 font-medium"
          >
            Employee Rating
          </Text>
          <Button
            size="sm"
            variant="outlined"
            className="text-foreground-secondary"
          >
            Details
          </Button>
        </div>

        <Divider />

        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-3">
            <div className="space-y-1.5">
              <Text
                as="p"
                variant="caption"
                className="text-foreground-secondary uppercase"
              >
                Total Rating
              </Text>

              <div className="flex min-w-[172px] items-center gap-1.5 whitespace-nowrap">
                <Icons.Star className="size-6 text-yellow-500" />
                <span className="text-lg font-medium">3.6/5</span>
                <span className="text-foreground-secondary text-xs">
                  (Overall 4.5)
                </span>
              </div>
            </div>

            <EmployeeRatingLineChart />
          </div>

          <div className="ring-divider flex gap-1 rounded-md p-1 ring-1 ring-inset">
            <span className="text-foreground-secondary flex-1 pl-1.5 text-xs">
              Total work hours include extra hours.
            </span>
            <Icons.Info className="text-foreground-secondary size-4" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const chartData = [
  { name: "Week 1", rating: 0 },
  { name: "Week 2", rating: 0.1 },
  { name: "Week 3", rating: 1.0 },
  { name: "Week 4", rating: 0.5 },
  { name: "Week 5", rating: 0.3 },
  { name: "Week 6", rating: 0.8 },
  { name: "Week 7", rating: 0.7 },
  { name: "Week 8", rating: 1.0 },
  { name: "Week 9", rating: 0.4 },
  { name: "Week 10", rating: 0.6 },
];

const config: ChartConfig = {
  rating: {
    label: "Rating",
    color: "var(--ui-success)",
  },
};

const EmployeeRatingLineChart = () => {
  return (
    <LineChart
      width="100%"
      height={42}
      chartData={chartData}
      config={config}
      xAxis={false}
      yAxis={false}
      tooltip={false}
      cartesianGrid={false}
      lineChart={{}}
      line={{
        dot: false,
      }}
    />
  );
};
