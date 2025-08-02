import { Tab, Tabs } from "@jamsr-ui/react";
import { cn } from "@/lib/tw-merge";
import { TABS, type TabType } from "./data";

type Props = {
  activeTab: TabType;
  setActiveTab: React.Dispatch<React.SetStateAction<TabType>>;
};

export const NavTabs = ({ activeTab, setActiveTab }: Props) => {
  return (
    <Tabs
      variant="underlined"
      value={activeTab}
      onValueChange={setActiveTab}
      classNames={{
        base: "border-y border-divider -mx-4 h-12",
        tabList: "p-0 px-4 rounded-none gap-3 w-full",
        tabContent: "font-medium uig-selected:[&_svg]:text-primary",
        cursor: "w-full uig-selected:bg-primary",
      }}
    >
      {TABS.map(({ label, value, icon }) => (
        <Tab
          key={value}
          heading={label}
          value={value}
          startContent={
            <span className="[&>svg]:size-5 [&>svg]:transition">{icon}</span>
          }
          className={cn("h-auto py-3.5")}
        />
      ))}
    </Tabs>
  );
};
