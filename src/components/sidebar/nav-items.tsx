import { CircleUser, LayoutGrid, Settings } from "lucide-react";
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
      {
        title: "My Account",
        url: APP_ROUTES.myAccount.root,
        icon: <Settings />,
        items: [
          {
            title: "Account",
            url: APP_ROUTES.myAccount.account.root,
            items: [
              {
                title: "Get Started",
                url: APP_ROUTES.myAccount.account.getStarted,
              },
              {
                title: "User Profile",
                url: "#",
              },
              {
                title: "Company Profile",
                url: "#",
              },
              {
                title: "Settings - With Sidebar",
                url: "#",
              },
              {
                title: "Settings - Enterprise",
                url: "#",
              },
              {
                title: "Settings - Plain",
                url: "#",
              },
              {
                title: "Settings - Modal",
                url: "#",
              },
            ],
          },
          {
            title: "Billing",
            url: APP_ROUTES.myAccount.billing.root,
            items: [
              {
                title: "Billing - Basic",
                url: "#",
              },
              {
                title: "Billing - Enterprise",
                url: "#",
              },
              {
                title: "Plans",
                url: "#",
              },
              {
                title: "Billing History",
                url: "#",
              },
            ],
          },
          {
            title: "Security",
            url: APP_ROUTES.myAccount.security.root,
            items: [
              {
                title: "Get Started",
                url: "#",
              },
              {
                title: "Security Overview",
                url: "#",
              },
              {
                title: "Allowed IP Addresses",
                url: "#",
              },
              {
                title: "Privacy Settings",
                url: "#",
              },
              {
                title: "Device Management",
                url: "#",
              },
              {
                title: "Backup & Recovery",
                url: "#",
              },
              {
                title: "Current Sessions",
                url: "#",
              },
              {
                title: "Security Log",
                url: "#",
              },
            ],
          },
          {
            title: "Members & Roles",
            url: APP_ROUTES.myAccount.members.root,
            items: [
              {
                title: "Teams Starter",
                url: "#",
              },
              {
                title: "Teams",
                url: "#",
              },
              {
                title: "Team Info",
                url: "#",
              },
              {
                title: "Members Starter",
                url: "#",
              },
              {
                title: "Team Members",
                url: "#",
              },
              {
                title: "Import Members",
                url: "#",
              },
              {
                title: "Roles",
                url: "#",
              },
              {
                title: "Permissions - Toggler",
                url: "#",
              },
              {
                title: "Permissions - Check",
                url: "#",
              },
            ],
          },
          {
            title: "Integrations",
            url: "#",
          },
          {
            title: "API Keys",
            url: "#",
          },
          {
            title: "Appearance",
            url: "#",
          },
          {
            title: "Invite a Friend",
            url: "#",
          },
          {
            title: "Activity",
            url: "#",
          },
        ],
      },
    ],
  },
];
