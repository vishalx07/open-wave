import {
  ArrowDownLeftIcon,
  ArrowUpRightIcon,
  CalendarCheckIcon,
} from "lucide-react";

const Stats = [
  {
    name: "Income",
    value: "$16,058.94",
    icon: <ArrowDownLeftIcon color="var(--color-blue-500)" size={20} />,
  },
  {
    name: "Expenses",
    value: "$1,500.00",
    icon: <ArrowUpRightIcon color="var(--color-sky-600)" size={20} />,
  },
  {
    name: "Scheduled",
    value: "$1,500.00",
    icon: <CalendarCheckIcon color="var(--color-purple-500)" size={20} />,
  },
];

export const OverviewStats = () => {
  return (
    <div className="flex items-center flex-col lg:flex-row divide-x divide-divider">
      {Stats.map((stat, ind) => {
        return (
          <div
            key={ind}
            className="flex items-center w-full min-w-0 gap-3 py-3 first:p-0 last:pr-0 lg:px-8 lg:py-0 lg:first:pl-0"
          >
            <div className="size-10 shrink-0 flex items-center justify-center rounded-full border border-divider ">
              {stat.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-foreground-secondary">{stat.name}</span>
              <span className="font-semibold">{stat.value}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
