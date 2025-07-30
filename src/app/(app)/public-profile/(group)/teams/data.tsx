import { type Route } from "next";
import { TriangleAlert, Undo2, UserCheck, Users } from "lucide-react";
import { APP_ROUTES } from "@/configs/routes";
import type { Team } from "./type";

export const TABS: {
  label: string;
  value: "all" | "my-referrals";
  href: Route;
  count: number;
}[] = [
  {
    label: "All",
    value: "all",
    href: APP_ROUTES.publicProfile.teams.root,
    count: 66,
  },
  {
    label: "My Referrals",
    value: "my-referrals",
    href: APP_ROUTES.publicProfile.teams.tab("my-referrals"),
    count: 29,
  },
];

type StatusCard = {
  title: string;
  value:
    | "active"
    | "premium"
    | "free"
    | "referrals_active"
    | "referrals_premium";
  count: number;
  icon: React.ReactNode;
  users: {
    name: string;
    avatarUrl: string;
  }[];
};

export const STATUS_DATA: StatusCard[] = [
  {
    value: "active",
    title: "Active Users",
    count: 239,
    icon: <UserCheck className="size-5 text-teal-500" />,
    users: [
      {
        name: "Jenny Klabber",
        avatarUrl: "/images/user2.png",
      },
      {
        name: "Olive",
        avatarUrl: "/images/user3.png",
      },
      {
        name: "John Doe",
        avatarUrl: "/images/user1.png",
      },
    ],
  },
  {
    value: "premium",
    title: "Premium Users",
    count: 356,
    icon: <Users className="size-5 text-purple-500" />,
    users: [
      {
        name: "John Doe",
        avatarUrl: "/images/user1.png",
      },
      {
        name: "Jenny Klabber",
        avatarUrl: "/images/user2.png",
      },
      {
        name: "Olive",
        avatarUrl: "/images/user3.png",
      },
    ],
  },
  {
    value: "free",
    title: "Free Users",
    count: 1260,
    icon: <Users className="size-5 text-purple-500" />,
    users: [
      {
        name: "Jenny Klabber",
        avatarUrl: "/images/user2.png",
      },
      {
        name: "Olive",
        avatarUrl: "/images/user3.png",
      },
      {
        name: "John Doe",
        avatarUrl: "/images/user1.png",
      },
    ],
  },
  {
    value: "referrals_active",
    title: "Referral's Active Users",
    count: 79,
    icon: <Undo2 className="size-5 text-blue-500" />,
    users: [
      {
        name: "John Doe",
        avatarUrl: "/images/user1.png",
      },

      {
        name: "Olive",
        avatarUrl: "/images/user3.png",
      },
      {
        name: "Jenny Klabber",
        avatarUrl: "/images/user2.png",
      },
    ],
  },
  {
    value: "referrals_premium",
    title: "Referral's Premium Users",
    count: 2,
    icon: <TriangleAlert className="size-5 text-red-500" />,
    users: [
      {
        name: "Olive",
        avatarUrl: "/images/user3.png",
      },
      {
        name: "John Doe",
        avatarUrl: "/images/user1.png",
      },
      {
        name: "Jenny Klabber",
        avatarUrl: "/images/user2.png",
      },
    ],
  },
];

export const TEAM_DATA: Team[] = [
  {
    userId: 1006094,
    username: "sakuratanaka94",
    fullname: "Sakura Tanaka",
    email: "sakura.tanaka88@gmail.com",
    avatarUrl: "",
    country: "Japan",
    phoneNumber: "+81 (3) 4567 8921",
    status: "active",
    plans: [],
    createdAt: new Date("2025-07-17T17:30:00"),
  },
  {
    userId: 1006093,
    username: "aliciaramirez93",
    fullname: "Alicia Ramirez",
    email: "alicia.ramirez92@mail.com",
    avatarUrl: "",
    country: "Mexico",
    phoneNumber: "+52 (55) 3487 2256",
    status: "active",
    plans: ["pro", "business"],
    createdAt: new Date("2025-07-17T17:26:00"),
  },
  {
    userId: 1006092,
    username: "tomlane92",
    fullname: "Tom Lane",
    email: "tomlane@example.com",
    avatarUrl: "",
    country: "UK",
    phoneNumber: "+44 7456 123456",
    status: "active",
    plans: ["starter"],
    createdAt: new Date("2025-07-17T17:17:00"),
  },
  {
    userId: 1006091,
    username: "johndoe91",
    fullname: "John Doe",
    email: "johndoe@example.com",
    avatarUrl: "",
    country: "France",
    phoneNumber: "+33 (1) 94 24 99 99",
    status: "active",
    plans: ["starter", "pro", "business"],
    createdAt: new Date("2025-07-17T17:14:00"),
  },
  {
    userId: 1006090,
    username: "demousers90",
    fullname: "Demo Users",
    email: "demo123@example.com",
    avatarUrl: "",
    country: "India",
    phoneNumber: "+91 9708899430",
    status: "active",
    plans: [],
    createdAt: new Date("2025-07-14T22:48:00"),
  },
  {
    userId: 1006089,
    username: "mariecurie89",
    fullname: "Marie Curie",
    email: "marie.curie@physicsworld.com",
    avatarUrl: "",
    country: "Poland",
    phoneNumber: "+48 22 123 4567",
    status: "inactive",
    plans: ["starter", "free"],
    createdAt: new Date("2025-07-13T09:30:00"),
  },
  {
    userId: 1006088,
    username: "carlosdiaz88",
    fullname: "Carlos Diaz",
    email: "carlos.diaz@mxmail.com",
    avatarUrl: "",
    country: "Mexico",
    phoneNumber: "+52 55 1234 5678",
    status: "active",
    plans: ["pro"],
    createdAt: new Date("2025-07-12T14:45:00"),
  },
  {
    userId: 1006087,
    username: "annamuller87",
    fullname: "Anna Müller",
    email: "anna.mueller@web.de",
    avatarUrl: "",
    country: "Germany",
    phoneNumber: "+49 170 1234567",
    status: "inactive",
    plans: [],
    createdAt: new Date("2025-07-11T10:20:00"),
  },
  {
    userId: 1006086,
    username: "davidsmith86",
    fullname: "David Smith",
    email: "davidsmith@ukmail.com",
    avatarUrl: "",
    country: "UK",
    phoneNumber: "+44 20 7946 0958",
    status: "active",
    plans: ["enterprise", "premium"],
    createdAt: new Date("2025-07-10T16:35:00"),
  },
  {
    userId: 1006085,
    username: "chenwei85",
    fullname: "Chen Wei",
    email: "chen.wei@china.cn",
    avatarUrl: "",
    country: "China",
    phoneNumber: "+86 10 8888 9999",
    status: "active",
    plans: ["starter", "pro", "business"],
    createdAt: new Date("2025-07-09T08:00:00"),
  },
];
