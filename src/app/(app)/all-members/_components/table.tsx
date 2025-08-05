"use client";

import NextLink from "next/link";
import { SearchIcon, Share, SlidersHorizontal } from "lucide-react";
import {
  Button,
  Card,
  Chip,
  DataTable,
  Input,
  Tab,
  Tabs,
} from "@jamsr-ui/react";
import { cn } from "@/lib/tw-merge";
import { TABS, TEAM_DATA } from "../data";
import { COLUMNS } from "./columns";
import { Export } from "./export";

type Props = {
  tab?: string;
};

export const Table = ({ tab }: Props) => {
  const currentTab = TABS.find(({ value }) => value === tab)?.value ?? "active";

  return (
    <Card>
      <Tabs
        value={currentTab}
        variant="underlined"
        classNames={{
          base: "border-b border-divider bg-content2",
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
                  color={
                    value === "active"
                      ? "success"
                      : value === "inactive"
                        ? "danger"
                        : "default"
                  }
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
        variant="bordered"
        data={TEAM_DATA}
        columns={COLUMNS}
        rowCount={TEAM_DATA.length}
        classNames={{
          base: "gap-4 px-0 py-4",
          td: "border-dashed first:pl-4",
        }}
        paginationProps={{
          className: "px-4",
        }}
        tableProps={{
          topContent: (
            <div className="flex items-center justify-between gap-4 px-4">
              <Input
                fullWidth
                placeholder="Search..."
                isFilled
                startContent={<SearchIcon size={20} />}
                classNames={{
                  base: "max-w-[350px]",
                }}
              />

              <div className="flex items-center justify-end gap-3">
                <Export />

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
    </Card>
  );
};
