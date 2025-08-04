import { IconButton, Tab, Tabs, Text } from "@jamsr-ui/react";
import { ChevronRightIcon } from "lucide-react";

const TABS = [
  {
    heading: "Daily",
    value: "daily",
    limitAmount: "$100.00",
  },
  {
    heading: "Weekly",
    value: "weekly",
    limitAmount: "$500.00",
  },
  {
    heading: "Monthly",
    value: "monthly",
    limitAmount: "$1,500.00",
  },
];

export const SavingLimitTabs = () => {
  return (
    <Tabs
      defaultValue="weekly"
      classNames={{
        tabList: "w-full",
      }}
    >
      {TABS.map((tab) => {
        return (
          <Tab key={tab.value} value={tab.value} heading={tab.heading}>
            <div className="flex items-center gap-2">
              <div className="flex-1 mt-1 items-baseline gap-1">
                <Text variant="body1" className="text-foreground-secondary">
                  Spending Limit
                </Text>
                <Text as="h1" variant="h4" className="font-semibold">
                  {tab.limitAmount}{" "}
                  <span className="text-foreground-secondary text-sm ">
                    / {tab.value}
                  </span>
                </Text>
              </div>
              <IconButton size="sm" label="more" variant="light">
                <ChevronRightIcon size={16} />
              </IconButton>
            </div>
          </Tab>
        );
      })}
    </Tabs>
  );
};
