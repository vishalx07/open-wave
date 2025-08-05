"use client";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

type DataProps = {
  name: string;
  value: number;
  color?: string;
};
const data: DataProps[] = [
  { name: "Shopping", value: 900, color: "var(--color-blue-500)" },
  { name: "Utilities", value: 600, color: "var(--color-sky-600)" },
  { name: "Others", value: 900, color: "var(--color-neutral-700)" },
];

export const SummaryChart = () => {
  return (
    <ResponsiveContainer height={"200%"} width="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="75%"
          startAngle={180}
          endAngle={0}
          innerRadius="80%"
          outerRadius="100%"
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
