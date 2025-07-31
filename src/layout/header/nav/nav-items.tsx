import { type NavItem } from "@/components/mega-menu/types";

export const NAV_ITEMS: NavItem[] = [
  {
    title: "Home",
    url: "#",
  },
  {
    title: "Profiles",
    items: [
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
        ],
      },
      {
        title: "Other Pages",
        items: [
          {
            title: "Projects - 3 Cols",
            url: "#",
          },
          {
            title: "Projects - 2 Cols",
            url: "#",
          },
        ],
      },
    ],
  },
  {
    title: "My Account",
    items: [
      {
        title: "General Pages",
      },
      {
        title: "Account Home",
      },
      {
        title: "Billing",
      },
      {
        title: "Security",
      },
      {
        title: "Members & Roles",
      },
      {
        title: "Other Pages",
      },
    ],
  },
  {
    title: "Network",
    items: [
      {
        title: "General Pages",
      },
      {
        title: "User Cards",
      },
      {
        title: "User Base",
      },
    ],
  },
  {
    title: "Apps",
    items: [
      {
        title: "Store - Client",
      },
      {
        title: "User Management",
      },
    ],
  },
];
