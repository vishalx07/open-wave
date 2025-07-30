import { Card, CardContent, Tab, Tabs } from "@jamsr-ui/react";
import { cn } from "@/lib/tw-merge";

export const Table = () => {
  return (
    <Card>
      <CardContent>
        <Tabs
          value={currentTab}
          variant="underlined"
          classNames={{
            base: "border-b border-t border-divider",
            tabList: "p-0 rounded-none",
            tabContent: "font-medium",
          }}
        >
          {TABS.map(({ label, value }, index) => (
            <Tab
              key={value}
              heading={label}
              value={value}
              className={cn("h-auto py-3.5", index === 0 && "pl-0")}
            />
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};
