"use client";

import { formatMoney } from "@/utils/format-money";
import { BarChart, type ChartConfig } from "@jamsr-ui/charts";

const chartData = [
  { month: "J", income: 30000, expenses: 12000, scheduled: 18000 },
  { month: "F", income: 7500, expenses: 12500, scheduled: 10000 },
  { month: "M", income: 22000, expenses: 21000, scheduled: 20000 },
  { month: "A", income: 8750, expenses: 12250, scheduled: 14000 },
  { month: "M", income: 20000, expenses: 20000, scheduled: 10000 },
  { month: "J", income: 14000, expenses: 18000, scheduled: 8000 },
  { month: "J", income: 20000, expenses: 20000, scheduled: 10000 },
  { month: "A", income: 12000, expenses: 16000, scheduled: 6000 },
  { month: "S", income: 24000, expenses: 24000, scheduled: 12000 },
  { month: "O", income: 11000, expenses: 13000, scheduled: 11000 },
  { month: "N", income: 22000, expenses: 26000, scheduled: 12000 },
  { month: "D", income: 10000, expenses: 12000, scheduled: 8000 },
];

const config: ChartConfig = {
  scheduled: {
    color: "var(--color-purple-500)",
    label: "Scheduled",
  },
  expenses: {
    color: "var(--color-sky-600)",
    label: "Expenses",
  },
  income: {
    color: "var(--color-blue-500)",
    label: "Income",
  },
};

export const OverviewChart = () => {
  return (
    <BarChart
      height={200}
      width="100%"
      chartData={chartData}
      config={config}
      barChart={{
        margin: { top: 20, right: 14, left: -8, bottom: 5 },
      }}
      xAxis={{
        dataKey: "month",
        tickFormatter: (value: string) => value.slice(0, 3),
      }}
      yAxis={{
        tickFormatter: (value: number) => formatMoney(value),
      }}
      bar={{
        stackId: "bar",
        radius: 0,
      }}
      legend={false}
    />
  );
};
