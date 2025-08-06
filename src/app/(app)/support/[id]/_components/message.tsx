import { Avatar, Text } from "@jamsr-ui/react";
import { cn } from "@/lib/tw-merge";
import { fTime } from "@/utils/time";
import type { HelpCenterMessage } from "../../types";

type Props = {
  conversation: HelpCenterMessage;
};

export const Message = ({ conversation }: Props) => {
  const { message, sender, timestamp } = conversation;

  return (
    <div
      className={cn(
        "flex",
        sender === "user" ? "justify-end" : "justify-start",
      )}
    >
      <div
        className={cn(
          "flex max-w-sm gap-3",
          sender === "user" && "flex-row-reverse",
        )}
      >
        <Avatar
          src={sender === "user" ? "/images/user3.png" : "/images/user2.png"}
          alt={sender === "user" ? "User" : "Support"}
          width={100}
          height={100}
        />
        <div className="space-y-1">
          <p
            className={cn(
              "text-foreground-secondary text-sm",
              sender === "user" && "text-end",
            )}
          >
            {sender === "user" ? "John Doe" : "Support Team - Admin"}
          </p>
          <div
            className={cn(
              "bg-content2 space-y-1 rounded-2xl px-4 py-2",
              sender === "support" ? "rounded-tl-none" : "rounded-tr-none",
            )}
          >
            <p className="text-sm">{message}</p>
            <Text
              variant="lead"
              className="text-foreground-secondary text-end"
            >
              {fTime(timestamp)}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
