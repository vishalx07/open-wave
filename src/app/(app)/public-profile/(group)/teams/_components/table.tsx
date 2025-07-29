"use client";

import { Card, CardContent, DataTable } from "@jamsr-ui/react";
import { TEAM_DATA } from "../data";
import { COLUMNS } from "./columns";

export const Table = () => {
  return (
    <Card>
      <CardContent>
        {/* <Tabs
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
        </Tabs> */}

        <DataTable
          allowHover
          data={TEAM_DATA}
          columns={COLUMNS}
          rowCount={TEAM_DATA.length}
        />
      </CardContent>
    </Card>
  );
};
