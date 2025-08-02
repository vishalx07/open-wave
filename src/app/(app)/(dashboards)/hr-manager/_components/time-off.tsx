"use client";

import React from "react";
import { Clock } from "lucide-react";
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
  Chip,
  Divider,
  Text,
  type ButtonProps,
} from "@jamsr-ui/react";
import { cn } from "@/lib/tw-merge";
import { TIME_OFF_DATA } from "./data";

export const TimeOff = () => {
  return (
    <Card>
      <CardContent>
        <div className="flex h-12 items-center gap-2 pb-4">
          <Clock className="text-foreground-secondary size-5" />
          <Text
            as="h3"
            className="flex-1 font-medium"
          >
            Time Off
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

        <div className="py-7">
          <TimeOffBar />
        </div>

        <div className="space-y-4">
          {TIME_OFF_DATA.entries.map((item, index) => {
            const { icon, date, status, type } = item;
            return (
              <React.Fragment key={index}>
                <Divider />

                {/* icon */}
                <div className="flex items-center gap-1">
                  <span
                    className={cn(
                      "[&>svg]:size-4",
                      status === "Pending" && "[&>svg]:text-warning",
                      status === "Confirmed" && "[&>svg]:text-success",
                      status === "Rejected" && "[&>svg]:text-danger",
                    )}
                  >
                    {icon}
                  </span>

                  <Text
                    as="p"
                    variant="paragraph2"
                    className="flex-1"
                  >
                    {date}&nbsp;
                    <span className="text-foreground-secondary text-xs">
                      ({type})
                    </span>
                  </Text>

                  <Chip
                    size="xs"
                    variant="flat"
                    color={
                      status === "Pending"
                        ? "warning"
                        : status === "Confirmed"
                          ? "success"
                          : status === "Rejected"
                            ? "danger"
                            : "default"
                    }
                  >
                    {status}
                  </Chip>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

type ChartData = {
  name: string;
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
  total: TIME_OFF_DATA.totalDays,
  chartData: [
    {
      name: `OUT OF ${TIME_OFF_DATA.totalDays}`,
      value: TIME_OFF_DATA.usedDays,
      fill: "var(--ui-primary)",
    },
  ],
};

const TimeOffBar = () => {
  const { color, total, chartData } = data;
  return (
    <div className="mx-auto grid w-[208px]">
      <div className="h-[104px] w-full [grid-area:1/1]">
        <ResponsiveContainer
          className="[&_.recharts-surface]:outline-none"
          height="100%"
          width="100%"
        >
          <RadialBarChart
            data={chartData}
            barSize={44}
            cx={104}
            cy={104}
            startAngle={180}
            endAngle={0}
            innerRadius={104}
            outerRadius={75}
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
                  className="fill-foreground text-2xl font-semibold"
                  x="50%"
                >
                  {chartData?.[0]?.value ?? 0}
                </tspan>
                <tspan
                  className="fill-default-500 text-sm"
                  dy="2em"
                  x="50%"
                >
                  {chartData?.[0]?.name}
                </tspan>
              </text>
            </g>
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
