import { Avatar, Text } from "@jamsr-ui/react";
import { Notification } from "./types";

type Props = {
  notification: Notification;
};

export const NotificationItem = ({ notification }: Props) => {
  const { user, category, description, timeAgo, title } = notification;

  return (
    <div className="hover:bg-content2/70 border-divider relative flex cursor-pointer gap-2 border-b p-4 transition last:border-0">
      <Avatar
        alt={user.fullName}
        src={user.avatarUrl}
      />
      <div className="space-y-2">
        <div className="space-y-0.5">
          <Text
            variant="paragraph2"
            className="line-clamp-1"
          >
            {title}
          </Text>

          <div className="text-muted-foreground line-clamp-1 flex items-center gap-1.5 text-xs">
            {timeAgo}{" "}
            <span className="bg-muted-foreground size-1 rounded-full" />
            {category}
          </div>
        </div>

        <Text
          variant="paragraph2"
          className="text-foreground-secondary line-clamp-2"
        >
          {description}
        </Text>
      </div>
    </div>
  );
};
