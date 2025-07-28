import { CircleUser, FileText, Globe, Settings, User } from "lucide-react";

export const DATA = {
  user: {
    name: "Demosdckjd",
    email: "demo@kt.com",
    avatar: "/images/user2.png",
  },
  items: [
    {
      label: "Public Profile",
      url: "#",
      icon: CircleUser,
    },
    {
      label: "My Profile",
      url: "#",
      icon: User,
    },
    {
      label: "My Account",
      url: "#",
      icon: Settings,
    },
    {
      label: "Dev Forum",
      url: "#",
      icon: FileText,
    },
    {
      label: "Language",
      url: "#",
      icon: Globe,
    },
  ],
};
