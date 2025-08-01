import { IconWrapper } from "../icon-wrapper";
import { Text } from "@jamsr-ui/react";
import { DollarSignIcon, ScrollTextIcon, ShoppingBagIcon } from "lucide-react";

const Stats = [
  {
    name: "Shopping",
    value: "$900.00",
    icon: <ShoppingBagIcon color="var(--color-blue-500)" size={20} />,
  },
  {
    name: "Utilities",
    value: "$600.00",
    icon: <ScrollTextIcon color="var(--color-sky-600)" size={20} />,
  },
  {
    name: "Others",
    value: "$900.00",
    icon: <DollarSignIcon color="var(--color-neutral-700)" size={20} />,
  },
];

export const SummaryStats = () => {
  return (
    <div className="grid grid-cols-3 divide-x divide-neutral-700">
      {Stats.map((stat, ind) => {
        return (
          <div key={ind} className="flex flex-col items-center  gap-3 px-2">
            <IconWrapper icon={stat.icon} />
            <div className="space-y-1 text-center">
              <Text variant="paragraph2" className="text-foreground-secondary">
                {stat.name}
              </Text>
              <Text variant="paragraph2" className="font-semibold">
                {stat.value}
              </Text>
            </div>
          </div>
        );
      })}
    </div>
  );
};
