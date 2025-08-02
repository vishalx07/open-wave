import { CalendarMinus2, MessageCircleMore, Shell } from "lucide-react";

export type TabType = "meetings" | "events" | "holiday";

export const TABS: {
  label: string;
  value: TabType;
  icon: React.ReactNode;
}[] = [
  {
    label: "Meetings",
    value: "meetings",
    icon: <MessageCircleMore />,
  },
  {
    label: "Events",
    value: "events",
    icon: <CalendarMinus2 />,
  },
  {
    label: "Holiday",
    value: "holiday",
    icon: <Shell />,
  },
];

export type Meeting = {
  title: string;
  time: string;
  attendees: { name: string; avatarUrl?: string }[];
  platform: string;
  department: "Marketing" | "Product Manager" | "Partnership";
};

export const MEETINGS_DATA: Meeting[] = [
  {
    title: "Meeting with James Brown",
    time: "8:00 - 8:45 AM (UTC)",
    attendees: [
      { name: "Emma", avatarUrl: "/images/avatars/emma.png" },
      { name: "Sophia", avatarUrl: "/images/avatars/sophia.png" },
      { name: "James", avatarUrl: "/images/avatars/james.png" },
    ],
    platform: "On Google Meet",
    department: "Marketing",
  },
  {
    title: "Meeting with Laura Perez",
    time: "9:00 - 9:45 AM (UTC)",
    attendees: [
      { name: "James", avatarUrl: "/images/avatars/james.png" },
      { name: "Arthur", avatarUrl: "/images/avatars/arthur.png" },
      { name: "Sophia", avatarUrl: "/images/avatars/sophia.png" },
    ],
    platform: "On Zoom",
    department: "Product Manager",
  },
  {
    title: "Meeting with Arthur Taylor",
    time: "10:00 - 11:00 AM (UTC)",
    attendees: [
      { name: "Wei", avatarUrl: "/images/avatars/wei.png" },
      { name: "Emma", avatarUrl: "/images/avatars/emma.png" },
      { name: "Arthur", avatarUrl: "/images/avatars/arthur.png" },
    ],
    platform: "On Slack",
    department: "Partnership",
  },
];

export type Event = {
  title: string;
  time: string;
  location: string;
  locationColor: string;
  organizer: string;
  attendeesCount: string;
};

export const EVENTS_DATA: Event[] = [
  {
    title: "Tesla 4th year Celebration Party",
    time: "7:00 - 11:00 PM (UTC)",
    location: "341 Windy Ridge Road, LA",
    locationColor: "text-red-500",
    organizer: "by Sofia Williams",
    attendeesCount: "16/25",
  },
  {
    title: "Designing Camp for AlignUI",
    time: "9:00 AM - 10:00 PM (UTC)",
    location: "928 Bagwell Avenue, FL",
    locationColor: "text-sky-500",
    organizer: "by Matthew Johnson",
    attendeesCount: "12/15",
  },
  {
    title: "AlignUI Launch Party",
    time: "8:00 - 12:00 PM (UTC)",
    location: "148 Harley Brook Lane, VA",
    locationColor: "text-green-500",
    organizer: "by Emma Wright",
    attendeesCount: "25/40",
  },
];

type Holiday = {
  title: string;
  date: string;
  message: string;
  type: "Religious Holiday" | "International Holiday";
  breakDuration: string;
  icon: string;
};

export const HOLIDAYS_DATA: Holiday[] = [
  {
    title: "Christmas Holiday",
    date: "DEC 25 - DEC 27",
    message: "Happy Christmas!",
    type: "Religious Holiday",
    breakDuration: "2-days break",
    icon: "🎄",
  },
  {
    title: "Woman's Day",
    date: "mar 08",
    message: "Happy Women's Day!",
    type: "International Holiday",
    breakDuration: "1-days break",
    icon: "🌸",
  },
  {
    title: "Workers' Day",
    date: "MAY 01",
    message: "Happy Workers' Day!",
    type: "International Holiday",
    breakDuration: "1-days break",
    icon: "👩‍💻",
  },
];
