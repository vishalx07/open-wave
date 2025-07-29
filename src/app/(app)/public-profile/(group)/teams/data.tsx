import { TriangleAlert, Undo2, UserCheck, Users } from "lucide-react";
import type { Team } from "./type";

type UserCard = {
  title: string;
  value: number;
  icon: React.ReactNode;
  users: {
    name: string;
    avatarUrl: string;
  }[];
};

export const STATUS_DATA: UserCard[] = [
  {
    title: "Total Users",
    value: 356,
    icon: <Users className="size-5 text-purple-500" />,
    users: [
      {
        name: "John Doe",
        avatarUrl: "images/user1.png",
      },
      {
        name: "Jenny Klabber",
        avatarUrl: "images/user2.png",
      },
      {
        name: "Olive",
        avatarUrl: "images/user3.png",
      },
    ],
  },
  {
    title: "Active Users",
    value: 239,
    icon: <UserCheck className="size-5 text-teal-500" />,
    users: [
      {
        name: "Jenny Klabber",
        avatarUrl: "images/user2.png",
      },
      {
        name: "Olive",
        avatarUrl: "images/user3.png",
      },
      {
        name: "John Doe",
        avatarUrl: "/images/user1.png",
      },
    ],
  },
  {
    title: "Return User Rate",
    value: 79,
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
    title: "Fake Accounts",
    value: 2,
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
    referralId: 1006093,
    fullname: "Sakura Tanaka",
    email: "sakura.tanaka88@gmail.com",
    avatarUrl: "",
    country: "Japan",
    phoneNumber: "+81 (3) 4567 8921",
    status: "active",
    createdAt: new Date("2025-07-17T17:30:00"),
  },
  {
    userId: 1006093,
    referralId: 1006091,
    fullname: "Alicia Ramirez",
    email: "alicia.ramirez92@mail.com",
    avatarUrl: "",
    country: "Mexico",
    phoneNumber: "+52 (55) 3487 2256",
    status: "active",
    createdAt: new Date("2025-07-17T17:26:00"),
  },
  {
    userId: 1006092,
    referralId: 1006090,
    fullname: "Tom Lane",
    email: "tomlane@example.com",
    avatarUrl: "",
    country: "UK",
    phoneNumber: "+44 7456 123456",
    status: "active",
    createdAt: new Date("2025-07-17T17:17:00"),
  },
  {
    userId: 1006091,
    referralId: 1006090,
    fullname: "John Doe",
    email: "johndoe@example.com",
    avatarUrl: "",
    country: "France",
    phoneNumber: "+33 (1) 94 24 99 99",
    status: "active",
    createdAt: new Date("2025-07-17T17:14:00"),
  },
  {
    userId: 1006090,
    referralId: 0,
    fullname: "Demo Users",
    email: "demo123@example.com",
    avatarUrl: "",
    country: "Indian",
    phoneNumber: "+91 9708899430",
    status: "active",
    createdAt: new Date("2025-07-14T22:48:00"),
  },
  {
    userId: 1006089,
    referralId: 1006090,
    fullname: "Marie Curie",
    email: "marie.curie@physicsworld.com",
    avatarUrl: "",
    country: "Poland",
    phoneNumber: "+48 22 123 4567",
    status: "inactive",
    createdAt: new Date("2025-07-13T09:30:00"),
  },
  {
    userId: 1006088,
    referralId: 1006089,
    fullname: "Carlos Diaz",
    email: "carlos.diaz@mxmail.com",
    avatarUrl: "",
    country: "Mexico",
    phoneNumber: "+52 55 1234 5678",
    status: "active",
    createdAt: new Date("2025-07-12T14:45:00"),
  },
  {
    userId: 1006087,
    referralId: 1006088,
    fullname: "Anna Müller",
    email: "anna.mueller@web.de",
    avatarUrl: "",
    country: "Germany",
    phoneNumber: "+49 170 1234567",
    status: "inactive",
    createdAt: new Date("2025-07-11T10:20:00"),
  },
  {
    userId: 1006086,
    referralId: 1006087,
    fullname: "David Smith",
    email: "davidsmith@ukmail.com",
    avatarUrl: "",
    country: "UK",
    phoneNumber: "+44 20 7946 0958",
    status: "active",
    createdAt: new Date("2025-07-10T16:35:00"),
  },
  {
    userId: 1006085,
    referralId: 1006091,
    fullname: "Chen Wei",
    email: "chen.wei@china.cn",
    avatarUrl: "",
    country: "China",
    phoneNumber: "+86 10 8888 9999",
    status: "active",
    createdAt: new Date("2025-07-09T08:00:00"),
  },
];
