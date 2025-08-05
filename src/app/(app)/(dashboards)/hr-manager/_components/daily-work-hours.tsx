"use client";

import { Clock12 } from "lucide-react";
import { Button, Card, CardContent, Divider, Text } from "@jamsr-ui/react";

export const DailyWorkHours = () => {
  return (
    <Card>
      <CardContent>
        <div className="flex h-12 items-center gap-2 pb-4">
          <Clock12 className="text-foreground-secondary size-5" />
          <Text
            as="h3"
            className="flex-1 font-medium"
          >
            Daily Work Hours
          </Text>
          <Button
            size="sm"
            variant="outlined"
            className="text-foreground-secondary"
          >
            Details
          </Button>
        </div>

        <Divider />

        <div className="space-y-4 pt-4">
          <Text
            as="p"
            variant="body1"
            className="text-foreground-secondary"
          >
            <span className="text-foreground font-medium">12</span> hours{" "}
            <span className="text-foreground font-medium">41</span> minutes in
            total ⏳
          </Text>

          <div className="space-y-4">
            <div className="flex gap-[5px]">
              <div
                style={{ width: "30.3548%" }}
                className="h-2.5 rounded-xs bg-yellow-500"
              />
              <div
                style={{ width: "50.8541%" }}
                className="h-2.5 rounded-xs bg-sky-500"
              />
              <div
                style={{ width: "18.7911%" }}
                className="h-2.5 rounded-xs bg-purple-500"
              />
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-1 text-left text-xs">
                <div className="size-2 shrink-0 rounded-full bg-yellow-500" />
                Pause Time
              </div>
              <div className="flex items-center gap-1 text-left text-xs">
                <div className="size-2 shrink-0 rounded-full bg-sky-500" />
                Active Time
              </div>
              <div className="flex items-center gap-1 text-left text-xs">
                <div className="size-2 shrink-0 rounded-full bg-purple-500" />
                Extra Time
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
