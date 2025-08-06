import { Notification } from "./types";

export const TABS: {
  label: string;
  value: "all" | "unread" | "read";
}[] = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "New",
    value: "unread",
  },
  {
    label: "Read",
    value: "read",
  },
];

export const NOTIFICATIONS: Notification[] = [
  {
    id: "1",
    user: {
      fullName: "Alice Johnson",
      avatarUrl: "",
    },
    title: "New Message Received",
    description: "You have a new message from Michael Smith.",
    timeAgo: "5 minutes ago",
    category: "communications",
    status: "unread",
  },
  {
    id: "2",
    user: {
      fullName: "Brian Lee",
      avatarUrl: "",
    },
    title: "Task Assigned",
    description: "You’ve been assigned a new task: ‘Prepare Quarterly Report’.",
    timeAgo: "2 hours ago",
    category: "task",
    status: "read",
  },
  {
    id: "3",
    user: {
      fullName: "Catherine Wong",
      avatarUrl: "",
    },
    title: "System Update",
    description:
      "System will undergo maintenance on August 10th, 2:00 AM - 4:00 AM.",
    timeAgo: "1 day ago",
    category: "system",
    status: "read",
  },
  {
    id: "4",
    user: {
      fullName: "Daniel Kim",
      avatarUrl: "",
    },
    title: "Password Expiring Soon",
    description:
      "Your password will expire in 5 days. Please update it to maintain access.",
    timeAgo: "3 hours ago",
    category: "security",
    status: "unread",
  },
  {
    id: "5",
    user: {
      fullName: "Ella Martinez",
      avatarUrl: "",
    },
    title: "Comment Mention",
    description: "You were mentioned in a comment by Alex Rivera.",
    timeAgo: "10 minutes ago",
    category: "communications",
    status: "unread",
  },
  {
    id: "6",
    user: {
      fullName: "Farah Malik",
      avatarUrl: "",
    },
    title: "Event Reminder",
    description: "Reminder: Team stand-up meeting tomorrow at 9:00 AM.",
    timeAgo: "6 hours ago",
    category: "reminder",
    status: "read",
  },
  {
    id: "7",
    user: {
      fullName: "George Thompson",
      avatarUrl: "",
    },
    title: "Access Granted",
    description: "You now have access to the Finance Dashboard.",
    timeAgo: "20 minutes ago",
    category: "system",
    status: "unread",
  },
  {
    id: "8",
    user: {
      fullName: "Hannah Patel",
      avatarUrl: "",
    },
    title: "New Connection Request",
    description: "You have a new connection request from Laura Jenkins.",
    timeAgo: "15 minutes ago",
    category: "social",
    status: "unread",
  },
  {
    id: "9",
    user: {
      fullName: "Isaac Newton",
      avatarUrl: "",
    },
    title: "Weekly Summary Ready",
    description: "Your weekly activity summary is now available.",
    timeAgo: "2 days ago",
    category: "general",
    status: "read",
  },
  {
    id: "10",
    user: {
      fullName: "Julia Roberts",
      avatarUrl: "",
    },
    title: "Profile Update Successful",
    description: "Your profile information was successfully updated.",
    timeAgo: "30 minutes ago",
    category: "general",
    status: "read",
  },
];
