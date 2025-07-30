"use client";

import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";
import { Avatar, Card, CardContent, IconButton, Text } from "@jamsr-ui/react";
import { STATUS_DATA } from "../data";

export const FreePremiumStatusGrid = () => {
  const [selectedStatus, setSelectedStatus] = useState<"free" | "premium">(
    "premium",
  );

  const currentStatus = STATUS_DATA.find(
    (item) => item.value === selectedStatus,
  );
  if (!currentStatus) return null;

  const { value, title, count, icon, users } = currentStatus;

  return (
    <Card>
      <CardContent>
        <div className="mb-3 flex items-start justify-between gap-3">
          <div className="bg-content2 inline-flex size-10 items-center justify-center rounded-lg">
            {icon}
          </div>

          <IconButton
            size="sm"
            variant="light"
            label="More Actions"
            onClick={() =>
              setSelectedStatus((prev) =>
                prev === "free" ? "premium" : "free",
              )
            }
          >
            <ArrowLeftRight className="size-4" />
          </IconButton>
        </div>

        <Text
          variant="body1"
          className="text-foreground-secondary"
        >
          {title}
        </Text>

        <div className="flex items-center justify-between gap-3">
          <Text variant="h4">{count}</Text>
          <div className="*:ring-background flex -space-x-0.5 *:ring-2">
            {users.map((user) => {
              const { name, avatarUrl } = user;
              return (
                <Avatar
                  key={name}
                  alt={name}
                  src={avatarUrl}
                  size="xs"
                  width={100}
                  height={100}
                />
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
