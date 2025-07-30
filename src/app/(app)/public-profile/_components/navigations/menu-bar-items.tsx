import { type MenuBarItem } from "@/components/menu-bar/types";
import { APP_ROUTES } from "@/configs/routes";

export const MENU_BAR_ITEMS: MenuBarItem[] = [
  {
    title: "Profiles",
    items: [
      {
        title: "Default",
        url: "#",
      },
      {
        title: "Creator",
        url: "#",
      },
      {
        title: "Company",
        url: "#",
      },
      {
        title: "NFT",
        url: "#",
      },
      {
        title: "Blogger",
        url: "#",
      },
      {
        title: "CRM",
        url: "#",
      },
      {
        title: "More",
        items: [
          {
            title: "Gamer",
            url: "#",
          },
          {
            title: "Feeds",
            url: "#",
          },
          {
            title: "Plain",
            url: "#",
          },
          {
            title: "Modal",
            url: "#",
          },
        ],
      },
    ],
  },
  {
    title: "Projects",
    items: [
      {
        title: "3 Columns",
        url: "#",
      },
      {
        title: "2 Columns",
        url: "#",
      },
    ],
  },
  {
    title: "Works",
    url: "#",
  },
  {
    title: "Teams",
    url: APP_ROUTES.publicProfile.teams.root,
  },
  {
    title: "Sales",
    url: APP_ROUTES.publicProfile.sales.root,
  },
  {
    title: "Activity",
    url: "#",
  },
  {
    title: "More",
    items: [
      {
        title: "Campaigns - Card",
        url: "#",
      },
      {
        title: "Campaigns - List",
        url: "#",
      },
      {
        title: "Empty",
        url: "#",
      },
    ],
  },
];
