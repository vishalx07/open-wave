import { APP_ROUTES } from "@/configs/routes";
import type { HelpCenterMessage, HelpCenterTicket, Tabs } from "./types";

export const TABS: Tabs = [
  {
    label: "All",
    value: "all",
    href: APP_ROUTES.support.tab("all"),
  },
  {
    label: "New",
    value: "new",
    href: APP_ROUTES.support.root,
  },
  {
    label: "Active",
    value: "active",
    href: APP_ROUTES.support.tab("active"),
  },
  {
    label: "Closed",
    value: "closed",
    href: APP_ROUTES.support.tab("closed"),
  },
];

export const TICKET_CATEGORIES: string[] = [
  "Account",
  "Billing",
  "General",
  "Deposit",
  "Withdrawal",
];

export const TICKET_LIST: HelpCenterTicket[] = [
  {
    id: "TCK-2025-001",
    subject: "Unable to reset password",
    description: "I tried resetting my password but never received the email.",
    status: "new",
    lastMessage:
      "We're checking with our email provider to confirm delivery issues.",
    lastRepliedAt: "3 days ago",
  },
  {
    id: "TCK-2025-002",
    subject: "Account locked after failed logins",
    description: "My account got locked. Can someone help me unlock it?",
    status: "active",
    lastMessage: "Your account has been unlocked. Please try logging in again.",
    lastRepliedAt: "1 day ago",
  },
  {
    id: "TCK-2025-003",
    subject: "Feature request: Dark mode",
    description:
      "It would be great to have a dark mode option in the settings.",
    status: "new",
    lastMessage:
      "Thanks for the suggestion! We've added it to our feature backlog.",
    lastRepliedAt: "2 hours ago",
  },
  {
    id: "TCK-2025-004",
    subject: "Billing discrepancy",
    description: "My latest invoice shows an incorrect charge. Please review.",
    status: "closed",
    lastMessage:
      "The discrepancy was due to a duplicate charge. We've issued a refund.",
    lastRepliedAt: "5 days ago",
    closedAt: "11 Jun 2025 11:58 AM",
  },
  {
    id: "TCK-2025-005",
    subject: "Mobile app crashing on startup",
    description: "The app closes immediately after I open it on Android 13.",
    status: "active",
    lastMessage: "Can you confirm if you're using version 5.3.1 of the app?",
    lastRepliedAt: "6 hours ago",
  },
  {
    id: "TCK-2025-006",
    subject: "Request to delete account",
    description:
      "I want to permanently delete my account and all related data.",
    status: "closed",
    lastMessage:
      "Your account and associated data have been permanently removed.",
    lastRepliedAt: "1 week ago",
    closedAt: "22 May 2025 05:12 PM",
  },
  {
    id: "TCK-2025-007",
    subject: "Cannot upload profile picture",
    description: "I keep getting an error when trying to upload an image.",
    status: "new",
    lastMessage:
      "Can you try uploading a smaller image and let us know if it works?",
    lastRepliedAt: "2 days ago",
  },
  {
    id: "TCK-2025-008",
    subject: "Suggestions for UI improvements",
    description: "Some parts of the UI are confusing; I have some suggestions.",
    status: "new",
    lastMessage: "We’d love to hear more—can you share screenshots or details?",
    lastRepliedAt: "30 minutes ago",
  },
];

export const TICKET_CONVERSATIONS: HelpCenterMessage[] = [
  // TCK-2025-001: Unable to reset password
  {
    ticketId: "TCK-2025-001",
    sender: "user",
    message: "I tried resetting my password but never received the email.",
    timestamp: "2025-07-28T10:15:00Z",
  },
  {
    ticketId: "TCK-2025-001",
    sender: "support",
    message: "Thanks for reporting. Can you confirm your registered email?",
    timestamp: "2025-07-28T10:17:00Z",
  },
  {
    ticketId: "TCK-2025-001",
    sender: "user",
    message: "Yes, it’s user@example.com",
    timestamp: "2025-07-28T10:18:00Z",
  },
  {
    ticketId: "TCK-2025-001",
    sender: "support",
    message:
      "We're checking with our email provider to confirm delivery issues.",
    timestamp: "2025-07-28T10:20:00Z",
  },
  {
    ticketId: "TCK-2025-001",
    sender: "support",
    message:
      "We've verified that the reset email was sent but may have landed in spam. Can you check your spam or junk folder?",
    timestamp: "2025-07-28T10:35:00Z",
  },
  {
    ticketId: "TCK-2025-001",
    sender: "user",
    message: "You're right, I found it in my spam folder. Thanks!",
    timestamp: "2025-07-28T10:37:00Z",
  },
  {
    ticketId: "TCK-2025-001",
    sender: "support",
    message:
      "Great! Please let us know if you're able to complete the reset successfully.",
    timestamp: "2025-07-28T10:38:00Z",
  },
  {
    ticketId: "TCK-2025-001",
    sender: "user",
    message: "Password reset worked. All good now.",
    timestamp: "2025-07-28T10:40:00Z",
  },
  {
    ticketId: "TCK-2025-001",
    sender: "support",
    message:
      "Happy to hear that! Let us know if you need help with anything else.",
    timestamp: "2025-07-28T10:42:00Z",
  },

  // TCK-2025-002: Account locked
  {
    ticketId: "TCK-2025-002",
    sender: "user",
    message: "I entered the wrong password too many times. Now I’m locked out.",
    timestamp: "2025-07-30T08:00:00Z",
  },
  {
    ticketId: "TCK-2025-002",
    sender: "support",
    message: "Your account has been unlocked. Please try logging in again.",
    timestamp: "2025-07-30T08:10:00Z",
  },

  // TCK-2025-003: Feature request
  {
    ticketId: "TCK-2025-003",
    sender: "user",
    message: "Dark mode would be really helpful for late-night use.",
    timestamp: "2025-07-31T02:15:00Z",
  },
  {
    ticketId: "TCK-2025-003",
    sender: "support",
    message:
      "Thanks for the suggestion! We've added it to our feature backlog.",
    timestamp: "2025-07-31T02:20:00Z",
  },

  // TCK-2025-004: Billing issue
  {
    ticketId: "TCK-2025-004",
    sender: "user",
    message: "My invoice shows a charge I don’t recognize.",
    timestamp: "2025-07-25T15:10:00Z",
  },
  {
    ticketId: "TCK-2025-004",
    sender: "support",
    message:
      "The discrepancy was due to a duplicate charge. We've issued a refund.",
    timestamp: "2025-07-25T16:30:00Z",
  },

  // TCK-2025-005: App crash
  {
    ticketId: "TCK-2025-005",
    sender: "user",
    message: "The app keeps crashing on Android 13.",
    timestamp: "2025-07-31T11:00:00Z",
  },
  {
    ticketId: "TCK-2025-005",
    sender: "support",
    message: "Can you confirm if you're using version 5.3.1 of the app?",
    timestamp: "2025-07-31T11:15:00Z",
  },

  // TCK-2025-006: Delete account
  {
    ticketId: "TCK-2025-006",
    sender: "user",
    message: "Please delete my account and all associated data.",
    timestamp: "2025-07-24T09:00:00Z",
  },
  {
    ticketId: "TCK-2025-006",
    sender: "support",
    message: "Your account and associated data have been permanently removed.",
    timestamp: "2025-07-24T10:00:00Z",
  },

  // TCK-2025-007: Profile picture upload error
  {
    ticketId: "TCK-2025-007",
    sender: "user",
    message: "I get an error when uploading a profile picture.",
    timestamp: "2025-07-29T12:00:00Z",
  },
  {
    ticketId: "TCK-2025-007",
    sender: "support",
    message:
      "Can you try uploading a smaller image and let us know if it works?",
    timestamp: "2025-07-29T12:10:00Z",
  },

  // TCK-2025-008: UI suggestions
  {
    ticketId: "TCK-2025-008",
    sender: "user",
    message: "The UI could use clearer labeling in some areas.",
    timestamp: "2025-07-31T03:00:00Z",
  },
  {
    ticketId: "TCK-2025-008",
    sender: "support",
    message: "We’d love to hear more—can you share screenshots or details?",
    timestamp: "2025-07-31T03:10:00Z",
  },
];
