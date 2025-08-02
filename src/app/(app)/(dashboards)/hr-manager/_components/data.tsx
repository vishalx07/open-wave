import { type ChipProps } from "@jamsr-ui/react";
import { Icons, Logos } from "@/configs/icon";

type TimeOffStatus = "Pending" | "Confirmed" | "Rejected";

interface TimeOffEntry {
  date: string;
  type: "Casual";
  status: TimeOffStatus;
  icon: React.ReactNode;
}

interface TimeOffData {
  totalDays: number;
  usedDays: number;
  entries: TimeOffEntry[];
}

export const TIME_OFF_DATA: TimeOffData = {
  totalDays: 20,
  usedDays: 10,
  entries: [
    {
      date: "Jan 15, 2024",
      type: "Casual",
      status: "Pending",
      icon: <Icons.Clock />,
    },
    {
      date: "Jan 15, 2024",
      type: "Casual",
      status: "Confirmed",
      icon: <Icons.Check />,
    },
    {
      date: "Jan 15, 2024",
      type: "Casual",
      status: "Rejected",
      icon: <Icons.Close />,
    },
  ],
};

type CurrentProjectData = {
  icon: React.ReactNode;
  name: string;
  status: string;
  projectManager: {
    name: string;
    avatar: string;
  };
  designLead: {
    name: string;
    avatar: string;
  };
  teamAvatars: string[];
  timeline: string;
  description: string;
};

export const CURRENT_PROJECT_DATA: CurrentProjectData = {
  icon: <Logos.Monday />,
  name: "Monday.com Redesign",
  status: "In Progress",
  projectManager: {
    name: "Laura P.",
    avatar: "/images/avatars/laura.png",
  },
  designLead: {
    name: "Arthur G.",
    avatar: "/images/avatars/arthur.png",
  },
  teamAvatars: [
    "/images/avatars/james.png",
    "/images/avatars/sophia.png",
    "/images/avatars/arthur.png",
    "/images/avatars/emma.png",
  ],
  timeline: "12/10/2022 · 01/04/2023",
  description: "Mobile and desktop app design for the new look of t...",
};

interface StatusTrackerData {
  name: string;
  avatar: string;
  status: "Absent" | "Away";
  time?: string;
  replacedBy?: string;
  role?: string;
}

export const STATUS_TRACKER_DATA: StatusTrackerData[] = [
  {
    name: "James Brown 🧠",
    avatar: "/images/avatars/james.png",
    status: "Absent",
    replacedBy: "Replaced by Arthur T.",
  },
  {
    name: "Sophia Williams 🧠",
    avatar: "/images/avatars/sophia.png",
    status: "Away",
    time: "25m",
    role: "Synergy",
  },
  {
    name: "Arthur Taylor 🧠",
    avatar: "/images/avatars/arthur.png",
    status: "Away",
    time: "12m",
    role: "Apex",
  },
  {
    name: "Emma Wright 🧠",
    avatar: "/images/avatars/emma.png",
    status: "Away",
    time: "8m",
    role: "Pulse",
  },
];

export interface Note {
  title: string;
  description: string;
  todos: {
    todo: string;
    color: ChipProps["color"];
  }[];
  date: string;
}

export const NOTES_DATA: Note[] = [
  {
    title: "Text Inputs for Design System",
    description:
      "Search for inspiration to provide a rich content of text inputs for the design system.",
    todos: [
      { todo: "Today", color: "danger" },
      { todo: "To-do", color: "warning" },
    ],
    date: "Aug 03",
  },
  {
    title: "Meeting with Arthur Taylor",
    description: "Discuss the MVP version of Apex Mobile and Desktop app.",
    todos: [
      { todo: "Today", color: "danger" },
      { todo: "Meeting", color: "success" },
    ],
    date: "Aug 02",
  },
  {
    title: "Check neutral and state colors",
    description:
      "Button components will be revised and designed again due to a few errors.",
    todos: [
      { todo: "Yesterday", color: "warning" },
      { todo: "Important", color: "secondary" },
    ],
    date: "Aug 01",
  },
];

type Task = {
  title: string;
  time: string;
  icon: React.ReactNode;
};

export const TIME_TRACKER_PREV_TASKS: Task[] = [
  {
    title: "Loom Rebranding",
    time: "1:23:05",
    icon: <Logos.Loom />,
  },
  {
    title: "Evernote App Redesign",
    time: "3:14:26",
    icon: <Logos.Evernote />,
  },
];
