import { UserRole, type User } from "../types";

export const usersData: User[] = [
  {
    userId: "A-8486214",
    name: "Arthur Taylor",
    avatar: "/images/dashboard2/arthur.png",
    email: "arthur@alignui.com",
    registeredAt: "Nov 12, 2024 at 9:22 PM",
    role: UserRole.CEO,
  },
  {
    userId: "A-8486215",
    name: "Sophia Williams",
    email: "sophia@alignui.com",
    avatar: "/images/dashboard2/sophia.png",
    registeredAt: "Nov 12, 2024 at 9:22 PM",
    role: UserRole.HR_ASSISTANT,
  },
  {
    userId: "A-8486216",
    name: "Matthew Johnson",
    email: "matthew@alignui.com",
    avatar: "/images/dashboard2/laura.png",
    registeredAt: "Sep 23, 2023 at 7:00 PM",
    role: UserRole.DATA_ENGINEER,
  },
  {
    userId: "A-8486217",
    name: "James Brown",
    email: "james@alignui.com",
    avatar: "/images/dashboard2/james.png",
    registeredAt: "Nov 12, 2024 at 9:22 PM",
    role: UserRole.MARKETING_MANAGER,
  },
  {
    userId: "A-8486218",
    name: "Wei Chen",
    email: "wei@alignui.com",
    avatar: "/images/dashboard2/wei.png",
    registeredAt: "Sep 23, 2023 at 7:00 PM",
    role: UserRole.OPERATIONS_MANAGER,
  },
];
