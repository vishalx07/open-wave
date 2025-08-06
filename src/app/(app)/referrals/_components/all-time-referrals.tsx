"use client";

import { AreaChart, type ChartConfig } from "@jamsr-ui/charts";
import { Link } from "@jamsr-ui/next";
import { Card, CardContent, CardHeader, Text } from "@jamsr-ui/react";

export const AllTimeReferrals = () => {
  return (
    <Card className="col-span-2">
      <CardHeader
        heading="All Time Referrals"
        endContent={
          <Link
            href={"#"}
            variant="paragraph"
            className="font-medium"
          >
            Full reports
          </Link>
        }
      />
      <CardContent className="space-y-12">
        <Text
          variant="body3"
          className="font-semibold"
        >
          6,136
        </Text>

        <AllTimeReferralsChart />
      </CardContent>
    </Card>
  );
};

const chartData = [
  { month: "January", referrals: 200 },
  { month: "February", referrals: 20 },
  { month: "March", referrals: 140 },
  { month: "April", referrals: 50 },
  { month: "May", referrals: 380 },
  { month: "June", referrals: 300 },
  { month: "July", referrals: 400 },
  { month: "August", referrals: 450 },
  { month: "September", referrals: 450 },
  { month: "October", referrals: 700 },
  { month: "November", referrals: 670 },
  { month: "December", referrals: 670 },
];

const config: ChartConfig = {
  referrals: {
    color: "var(--ui-success)",
    colors: [
      {
        offset: "10%",
        stopColor: "var(--ui-success-500)",
        stopOpacity: 0.3,
      },
      {
        offset: "100%",
        stopColor: "var(--ui-success-100)",
        stopOpacity: 0.1,
      },
    ],
  },
};

export const AllTimeReferralsChart = () => {
  return (
    <AreaChart
      config={config}
      width="100%"
      height={300}
      chartData={chartData}
      xAxis={{
        dataKey: "month",
        tickFormatter: (value: string) => value.slice(0, 3),
      }}
    />
  );
};
