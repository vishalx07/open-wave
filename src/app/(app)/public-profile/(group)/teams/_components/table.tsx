"use client";

import { useState } from "react";
import { ArrowUpDown, SearchIcon, SlidersHorizontal } from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  Chip,
  DataTable,
  Input,
  Select,
  SelectItem,
  Tab,
  Tabs,
} from "@jamsr-ui/react";
import { cn } from "@/lib/tw-merge";
import { TABS, TEAM_DATA } from "../data";
import { COLUMNS } from "./columns";

export const Table = () => {
  const [currentTab, setCurrentTab] = useState(TABS[0]!?.value);

  return (
    <Card>
      <CardContent className="py-0">
        <Tabs
          value={currentTab}
          onValueChange={setCurrentTab}
          variant="underlined"
          classNames={{
            base: "border-b border-divider",
            tabList: "p-0 px-6 rounded-none gap-10",
            tabContent: "font-medium",
            cursor: "w-full",
          }}
        >
          {TABS.map((tab) => {
            const { label, value, count } = tab;
            return (
              <Tab
                key={value}
                heading={label}
                value={value}
                endContent={
                  <Chip
                    size="sm"
                    radius="md"
                    variant="flat"
                    color={value === "my-referrals" ? "success" : "default"}
                  >
                    {count}
                  </Chip>
                }
                className={cn("h-12 p-0")}
              />
            );
          })}
        </Tabs>

        <DataTable
          allowHover
          data={TEAM_DATA}
          columns={COLUMNS}
          rowCount={TEAM_DATA.length}
          className="gap-4 px-0"
          tableProps={{
            topContent: (
              <div className="grid grid-cols-2 items-center gap-4">
                <Input
                  placeholder="Search..."
                  isFilled
                  startContent={<SearchIcon size={20} />}
                />

                <div className="flex items-center justify-end gap-3">
                  <Select
                    placeholder="Import / Export"
                    startContent={<ArrowUpDown size={16} />}
                    classNames={{
                      base: "min-w-[180px]",
                      startContent: "text-foreground",
                      placeholder: "text-foreground",
                    }}
                  >
                    <SelectItem value="import-contact">
                      Import Contact
                    </SelectItem>
                    <SelectItem value="export-contact">
                      Export Contact
                    </SelectItem>
                  </Select>
                  <Button
                    variant="outlined"
                    startContent={<SlidersHorizontal size={16} />}
                  >
                    Filter
                  </Button>
                </div>
              </div>
            ),
          }}
        />
      </CardContent>
    </Card>
  );
};
