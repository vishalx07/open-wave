export type NotificationStatus = "unread" | "read";

export type Notification = {
  id: string;
  user: {
    fullName: string;
    avatarUrl: string;
  };
  title: string;
  description: string;
  timeAgo: string;
  category:
    | "communications"
    | "system"
    | "task"
    | "reminder"
    | "security"
    | "social"
    | "general";
  status: NotificationStatus;
};
