import { type MenuBarItem } from "@/components/menu-bar/types";
import { APP_ROUTES } from "@/configs/routes";

export const MENU_BAR_ITEMS: MenuBarItem[] = [
  {
    title: "Profile",
    url: APP_ROUTES.profile.membersProfile.root,
  },
  {
    title: "Teams",
    url: APP_ROUTES.profile.membersProfile.teams.root,
  },
  {
    title: "Sales",
    url: APP_ROUTES.profile.membersProfile.sales.root,
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
