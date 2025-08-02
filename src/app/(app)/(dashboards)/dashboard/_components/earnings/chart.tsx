"use client";

import { AreaChart, type ChartConfig } from "@jamsr-ui/charts";
import { formatMoney } from "@/utils/format-money";

const chartData = [
  { month: "January", sales: 26600 },
  { month: "February", sales: 50500 },
  { month: "March", sales: 35700 },
  { month: "April", sales: 26300 },
  { month: "May", sales: 33900 },
  { month: "June", sales: 35400 },
  { month: "July", sales: 33000 },
  { month: "August", sales: 32000 },
  { month: "September", sales: 40000 },
  { month: "October", sales: 42000 },
  { month: "November", sales: 38000 },
  { month: "December", sales: 60000 },
];

const config: ChartConfig = {
  sales: {
    color: "var(--ui-primary)",
    colors: [
      {
        offset: "10%",
        stopColor: "var(--ui-primary)",
        stopOpacity: 0.3,
      },
      {
        offset: "100%",
        stopColor: "var(--ui-primary-400)",
        stopOpacity: 0.1,
      },
    ],
  },
};

export const EarningsChart = () => {
  return (
    <AreaChart
      config={config}
      width="100%"
      height={250}
      chartData={chartData}
      yAxis={{
        dataKey: "sales",
        tickFormatter: (value: number) => `$${formatMoney(value)}`,
      }}
      xAxis={{
        dataKey: "month",
        tickFormatter: (value: string) => value.slice(0, 3),
      }}
    />
  );
};
