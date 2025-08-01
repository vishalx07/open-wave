import NextLink from "next/link";
import { Tab, Tabs } from "@jamsr-ui/react";
import { TABS } from "../data";
import type { TabType } from "../types";

type Props = {
  currentTab: TabType;
};

export const NavTabs = ({ currentTab }: Props) => {
  return (
    <Tabs
      variant="underlined"
      value={currentTab}
    >
      {TABS.map((tab) => {
        const { label, value, href } = tab;
        return (
          <Tab
            key={value}
            value={value}
            heading={label}
            as={NextLink}
            href={href}
          />
        );
      })}
    </Tabs>
  );
};
