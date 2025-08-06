"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { DATA } from "./data";

const formatTotal = (total: number) => {
  return total >= 1000 ? `${(total / 1000).toFixed(1)}K` : total;
};

export const TopCountriesChart = () => {
  const { categories, color, chartData } = DATA;
  const total = 2492;

  return (
    <ResponsiveContainer
      className="[&_.recharts-surface]:outline-none"
      minHeight={240}
      width="100%"
    >
      <PieChart
        accessibilityLayer
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <Tooltip
          content={({ label, payload }) => (
            <div className="bg-background flex h-8 min-w-[120px] items-center gap-x-2 rounded-md px-1 text-xs shadow-sm">
              <span className="text-foreground font-medium">{label}</span>
              {payload?.map((p, index) => {
                const { name, value } = p;
                const category =
                  categories.find((c) => c.toLowerCase() === name) ?? name;
                return (
                  <div
                    key={`${index}-${name}`}
                    className="flex w-full items-center gap-x-2"
                  >
                    <div
                      className="size-2 flex-none rounded-full"
                      style={{
                        backgroundColor: `var(--ui-${color[index]})`,
                      }}
                    />
                    <div className="text-default-700 flex w-full items-center justify-between gap-x-2 pr-1 text-xs">
                      <span className="text-default-500">{category}</span>
                      <span className="text-default-700 font-mono font-medium">
                        {formatTotal(value as number)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          cursor={false}
        />
        <Pie
          animationDuration={1000}
          animationEasing="ease"
          data={chartData}
          dataKey="value"
          innerRadius="70%"
          nameKey="name"
          strokeWidth={0}
        >
          {chartData.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={`var(--ui-${color[index]})`}
            />
          ))}
        </Pie>
        <g>
          <text
            textAnchor="middle"
            x="50%"
            y="48%"
          >
            <tspan
              className="fill-foreground-secondary text-md"
              dy="-0.5em"
              x="50%"
            >
              Total
            </tspan>
            <tspan
              className="fill-foreground text-xl font-semibold"
              dy="1.5em"
              x="50%"
            >
              {formatTotal(total)}
            </tspan>
          </text>
        </g>
      </PieChart>
    </ResponsiveContainer>
  );
};
