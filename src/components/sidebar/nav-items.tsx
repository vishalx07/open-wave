import { LayoutGrid } from "lucide-react";
import { APP_ROUTES } from "@/configs/routes";
import { type NavItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
  {
    title: "General",
    items: [
      {
        title: "Dashboard",
        icon: <LayoutGrid />,
        url: APP_ROUTES.dashboard,
      },
    ],
  },
  {
    title: "Levels",
    items: [
      {
        title: "Levels",
        icon: <LayoutGrid />,
        url: "#",
        items: [
          {
            title: "Level 1",
            url: "#",
          },
          {
            title: "Level 2",
            url: "#",
            items: [
              {
                title: "Level 2.1",
                url: "#",
              },
              {
                title: "Level 2.2",
                url: "#",
              },
              {
                title: "Level 2.3",
                url: "#",
              },
            ],
          },
          {
            title: "Level 3",
            url: "#",
          },
        ],
      },
      {
        title: "Level 1",
        icon: <LayoutGrid />,
        url: "#",
      },
      {
        title: "Level 2",
        icon: <LayoutGrid />,
        url: "#",
      },
      {
        title: "Level 3",
        icon: <LayoutGrid />,
        url: "#",
      },
      {
        title: "Level 4",
        icon: <LayoutGrid />,
        url: "#",
      },
      {
        title: "Level 5",
        icon: <LayoutGrid />,
        url: "#",
      },
      {
        title: "Level 6",
        icon: <LayoutGrid />,
        url: "#",
      },
    ],
  },
];
