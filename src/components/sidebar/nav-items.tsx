import { CircleUser, LayoutGrid } from "lucide-react";
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
    title: "User",
    items: [
      {
        title: "Public Profile",
        icon: <CircleUser />,
        url: APP_ROUTES.publicProfile.root,
        items: [
          {
            title: "Profiles",
            url: APP_ROUTES.publicProfile.profiles.root,
            items: [
              {
                title: "Default",
                url: APP_ROUTES.publicProfile.profiles.default,
              },
              {
                title: "Creator",
                url: APP_ROUTES.publicProfile.profiles.creator,
              },
              {
                title: "Company",
                url: APP_ROUTES.publicProfile.profiles.company,
              },
              {
                title: "NFT",
                url: APP_ROUTES.publicProfile.profiles.nft,
              },
              {
                title: "Blogger",
                url: APP_ROUTES.publicProfile.profiles.blogger,
              },
              {
                title: "CRM",
                url: APP_ROUTES.publicProfile.profiles.crm,
              },
              {
                title: "Gamer",
                url: APP_ROUTES.publicProfile.profiles.gamer,
              },
              {
                title: "Feeds",
                url: APP_ROUTES.publicProfile.profiles.feeds,
              },
              {
                title: "Plain",
                url: APP_ROUTES.publicProfile.profiles.plain,
              },
              {
                title: "Modal",
                url: APP_ROUTES.publicProfile.profiles.modal,
              },
            ],
          },
          {
            title: "Projects",
            url: APP_ROUTES.publicProfile.projects.root,
            items: [
              {
                title: "3 Columns",
                url: APP_ROUTES.publicProfile.projects["3Columns"],
              },
              {
                title: "2 Columns",
                url: APP_ROUTES.publicProfile.projects["2Columns"],
              },
            ],
          },
          {
            title: "Works",
            url: APP_ROUTES.publicProfile.works,
          },
          {
            title: "Teams",
            url: APP_ROUTES.publicProfile.teams,
          },
          {
            title: "Network",
            url: APP_ROUTES.publicProfile.network,
          },
          {
            title: "Activity",
            url: APP_ROUTES.publicProfile.activity,
          },
          {
            title: "Campaigns - Card",
            url: APP_ROUTES.publicProfile.campaigns.card,
          },
          {
            title: "Campaigns - List",
            url: APP_ROUTES.publicProfile.campaigns.list,
          },
          {
            title: "Empty",
            url: APP_ROUTES.publicProfile.empty,
          },
        ],
      },
    ],
  },
];
