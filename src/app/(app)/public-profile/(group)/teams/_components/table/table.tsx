"use client";

import NextLink from "next/link";
import { SearchIcon, Share, SlidersHorizontal } from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  Chip,
  DataTable,
  Input,
  Tab,
  Tabs,
} from "@jamsr-ui/react";
import { cn } from "@/lib/tw-merge";
import { TABS, TEAM_DATA } from "../../data";
import { COLUMNS } from "./columns";
import { PlansFilter } from "./plans-filter";
import { StatusFilter } from "./status-filter";

type Props = {
  tab?: string;
};

export const Table = ({ tab }: Props) => {
  const currentTab = TABS.find(({ value }) => value === tab)?.value ?? "all";

  return (
    <Card>
      <CardContent className="py-0">
        <Tabs
          value={currentTab}
          variant="underlined"
          classNames={{
            base: "border-b border-divider",
            tabList: "p-0 px-6 rounded-none gap-10",
            tabContent: "font-medium",
            cursor: "w-full",
          }}
        >
          {TABS.map((tab) => {
            const { label, value, href, count } = tab;
            return (
              <Tab
                key={value}
                heading={label}
                value={value}
                as={NextLink}
                href={href}
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
              <div className="grid grid-cols-3 items-center gap-4">
                <Input
                  placeholder="Search..."
                  isFilled
                  startContent={<SearchIcon size={20} />}
                />

                <div className="flex items-center gap-3">
                  <StatusFilter />
                  <PlansFilter />
                </div>

                <div className="flex items-center justify-end gap-3">
                  <Button
                    variant="flat"
                    startContent={<Share size={16} />}
                  >
                    Export
                  </Button>
                  <Button
                    variant="flat"
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
