"use client";

import { useState } from "react";
import { Calendar, ListFilter, Search } from "lucide-react";
import { Button, Card, CardContent, Input, Kbd, Text } from "@jamsr-ui/react";
import { type TabType } from "./data";
import { Events } from "./events";
import { Holiday } from "./holiday";
import { Meetings } from "./meetings";
import { NavTabs } from "./nav-tabs";
import { TimePicker } from "./time-picker";

export const Schedule = () => {
  const [activeTab, setActiveTab] = useState<TabType>("meetings");

  return (
    <Card className="row-span-2">
      <CardContent>
        <div className="flex h-12 items-center gap-2 pb-4">
          <Calendar className="text-foreground-secondary size-5" />
          <Text
            as="h3"
            className="flex-1 font-medium"
          >
            Schedule
          </Text>
          <Button
            size="sm"
            variant="outlined"
            className="text-foreground-secondary"
          >
            See All
          </Button>
        </div>

        <div>
          <TimePicker />
        </div>

        <div className="py-4">
          <Input
            placeholder="Search..."
            startContent={<Search className="size-5" />}
            endContent={
              <span className="flex gap-2">
                <Kbd keys={["command"]}>K</Kbd>
                <ListFilter className="size-5 cursor-pointer" />
              </span>
            }
          />
        </div>

        <NavTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <div>
          {activeTab === "meetings" && <Meetings />}
          {activeTab === "events" && <Events />}
          {activeTab === "holiday" && <Holiday />}
        </div>
      </CardContent>
    </Card>
  );
};
