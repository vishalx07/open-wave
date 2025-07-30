import { TriangleAlert, Undo2, UserCheck, Users } from "lucide-react";

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
    title: "Active Users",
    value: 239,
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
