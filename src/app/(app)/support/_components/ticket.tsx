import NextLink from "next/link";
import { CheckCheck, Clock } from "lucide-react";
import { Avatar, Text } from "@jamsr-ui/react";
import { APP_ROUTES } from "@/configs/routes";
import { cn } from "@/lib/tw-merge";
import type { HelpCenterTicket } from "../types";

type Props = {
  data: HelpCenterTicket;
  isSelected?: boolean;
};

export const Ticket = ({ data, isSelected }: Props) => {
  const { id, subject, status, lastMessage, lastRepliedAt } = data;

  return (
    <NextLink
      href={APP_ROUTES.support.ticket(id)}
      className={cn(
        "hover:bg-content2/70 relative flex items-center gap-2 rounded-xl p-4 transition",
        isSelected && "bg-content2",
      )}
    >
      <Avatar
        isBordered
        color={
          status === "new"
            ? "warning"
            : status === "active"
              ? "success"
              : "default"
        }
        src={"/images/help-center.webp"}
        alt="S"
        className={"bg-background ring-offset-background p-1.5 ring-1"}
      />
      <div className="flex grow items-center justify-between gap-1">
        <div className="space-y-1">
          <Text
            variant="paragraph2"
            className={cn(
              "line-clamp-1",
              status === "closed" && "text-muted-foreground",
            )}
          >
            {subject}
          </Text>
          <Text
            variant="caption"
            className={cn(
              "text-secondary-foreground line-clamp-1",
              status === "closed" && "text-muted-foreground",
            )}
          >
            {lastMessage}
          </Text>
        </div>

        <div className="flex flex-col items-end gap-2">
          <Text
            variant="lead"
            className={cn(
              "text-foreground-secondary min-w-max",
              status === "closed" && "text-muted-foreground",
            )}
          >
            {lastRepliedAt}
          </Text>
          {status === "closed" ? (
            <CheckCheck
              size={16}
              className="text-muted-foreground"
            />
          ) : (
            <Clock
              size={16}
              className={cn(
                status === "new" && "text-warning",
                status === "active" && "text-success",
              )}
            />
          )}
        </div>
      </div>
    </NextLink>
  );
};
