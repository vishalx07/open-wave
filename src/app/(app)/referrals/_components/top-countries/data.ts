import { type ButtonProps } from "@jamsr-ui/react";

type ChartData = {
  name: string;
  [key: string]: string | number;
};

export type CircleChartProps = {
  color: ButtonProps["color"][];
  categories: string[];
  chartData: ChartData[];
};

export const DATA: CircleChartProps = {
  color: ["success", "warning", "secondary", "danger"],
  categories: ["America", "Asia", "Europe", "Affrica"],
  chartData: [
    { name: "America", value: 3500 },
    { name: "Asia", value: 2500 },
    { name: "Europe", value: 1500 },
    { name: "Affrica", value: 500 },
  ],
};
