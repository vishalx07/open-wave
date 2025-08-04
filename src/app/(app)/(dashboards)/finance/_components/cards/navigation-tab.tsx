import { Tab, Tabs } from "@jamsr-ui/react";
import { VirtualCard } from "./virtual-card";
import { PhysicalCard } from "./physical-card";

const TABS = [
  {
    value: "virtual",
    heading: "Virtual",
    content: <VirtualCard />,
  },
  {
    value: "physical",
    heading: "Physical",
    content: <PhysicalCard />,
  },
];

export const NavigationTab = () => {
  return (
    <Tabs
      defaultValue="virtual"
      classNames={{
        tabList: "w-full",
      }}
    >
      {TABS.map((tab) => {
        return (
          <Tab key={tab.value} value={tab.value} heading={tab.heading}>
            {tab.content}
          </Tab>
        );
      })}
    </Tabs>
  );
};
