"use client";

import { Wallet } from "lucide-react";
import {
  Cell,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import {
  Button,
  Card,
  CardContent,
  Divider,
  Text,
  type ButtonProps,
} from "@jamsr-ui/react";

export const CourseProgress = () => {
  return (
    <Card>
      <CardContent>
        <div className="flex h-12 items-center gap-2 pb-4">
          <Wallet className="text-foreground-secondary size-5" />
          <Text
            as="h3"
            className="flex-1 font-medium"
          >
            Course Progress
          </Text>
          <Button
            size="sm"
            variant="outlined"
            className="text-foreground-secondary"
          >
            See All
          </Button>
        </div>

        <Divider />

        <div className="pt-4 pb-0.5">
          <div className="flex items-center gap-4">
            <CourseProgressBar />
            <div>
              <Text
                as="p"
                variant="paragraph"
                className="font-medium"
              >
                Team Diversity Training
              </Text>
              <Text
                as="p"
                variant="caption"
                className="text-foreground-secondary mt-1"
              >
                Designed to foster inclusivity and leverage diverse
                perspectives.
              </Text>
              <Text
                as="button"
                variant="caption"
                className="text-primary mt-2 flex h-4 cursor-pointer items-center font-semibold underline underline-offset-3 transition hover:opacity-80"
              >
                Resume Course
              </Text>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

type ChartData = {
  value: number;
  [key: string]: string | number;
};

type CircleChartProps = {
  color: ButtonProps["color"];
  total: number;
  chartData: ChartData[];
};

const data: CircleChartProps = {
  color: "primary",
  total: 100,
  chartData: [{ value: 25, fill: "var(--ui-primary)" }],
};

const CourseProgressBar = () => {
  const { color, total, chartData } = data;
  return (
    <div className="mx-auto grid w-[80px]">
      <div className="h-[80px] w-full [grid-area:1/1]">
        <ResponsiveContainer
          className="[&_.recharts-surface]:outline-none"
          height="100%"
          width="100%"
        >
          <RadialBarChart
            data={chartData}
            barSize={10}
            cx="50%"
            cy="50%"
            endAngle={-270}
            innerRadius={90}
            outerRadius={70}
            startAngle={90}
          >
            <PolarAngleAxis
              angleAxisId={0}
              domain={[0, total]}
              tick={false}
              type="number"
            />
            <RadialBar
              angleAxisId={0}
              animationDuration={1000}
              animationEasing="ease"
              background={{
                fill: "var(--ui-default-100))",
              }}
              cornerRadius={2}
              dataKey="value"
            >
              {chartData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={`var(--ui-${color === "default" ? "foreground" : color})`}
                />
              ))}
            </RadialBar>
            <g>
              <text
                textAnchor="middle"
                x="50%"
                y="70%"
              >
                <tspan
                  className="fill-foreground text-md font-medium"
                  x="50%"
                >
                  {chartData?.[0]?.value ?? 0}%
                </tspan>
              </text>
            </g>
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
