import {
  CircleUser,
  HeadphonesIcon,
  LayoutGrid,
  Settings,
  ShieldIcon,
} from "lucide-react";
import { APP_ROUTES } from "@/configs/routes/app";
import { type NavItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
  {
    title: "General",
    items: [
      {
        title: "Dashboard",
        icon: <LayoutGrid />,
        url: APP_ROUTES.dashboard.root,
        items: [
          {
            title: "Dashboard v1",
            url: APP_ROUTES.dashboard.v1,
          },
          {
            title: "Dashboard v2",
            url: APP_ROUTES.dashboard.v2,
          },
        ],
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
            url: APP_ROUTES.publicProfile.teams.root,
          },
          {
            title: "Sales",
            url: APP_ROUTES.publicProfile.sales.root,
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
        title: "Authentication",
        icon: <ShieldIcon />,
        url: APP_ROUTES.auth.root,
        items: [
          {
            title: "Login",
            url: APP_ROUTES.auth.login.root,
            items: [
              {
                title: "Login v1",
                url: APP_ROUTES.auth.login.v1,
              },
              {
                title: "Login v2",
                url: APP_ROUTES.auth.login.v2,
              },
              {
                title: "Login v3",
                url: APP_ROUTES.auth.login.v3,
              },
              {
                title: "Login v4",
                url: APP_ROUTES.auth.login.v4,
              },
            ],
          },
          {
            title: "Register",
            url: APP_ROUTES.auth.register.root,
            items: [
              {
                title: "Register v1",
                url: APP_ROUTES.auth.register.v1,
              },
              {
                title: "Register v2",
                url: APP_ROUTES.auth.register.v2,
              },
              {
                title: "Register v4",
                url: APP_ROUTES.auth.register.v4,
              },
            ],
          },
          {
            title: "Verify Email",
            url: APP_ROUTES.auth.verifyEmail.root,
            items: [
              {
                title: "Verify Email 1",
                url: APP_ROUTES.auth.verifyEmail.v1,
              },
              {
                title: "Verify Email 2",
                url: APP_ROUTES.auth.verifyEmail.v2,
              },
            ],
          },
          {
            title: "Forgot Password",
            url: APP_ROUTES.auth.forgotPassword.root,
            items: [
              {
                title: "Forgot Password v1",
                url: APP_ROUTES.auth.forgotPassword.v1,
              },
              {
                title: "Forgot Password v2",
                url: APP_ROUTES.auth.forgotPassword.v2,
              },
              {
                title: "Forgot Password v4",
                url: APP_ROUTES.auth.forgotPassword.v4,
              },
            ],
          },
          {
            title: "Reset Password",
            url: APP_ROUTES.auth.resetPassword.root,
            items: [
              {
                title: "Reset Password v1",
                url: APP_ROUTES.auth.resetPassword.v1,
              },
              {
                title: "Reset Password v2",
                url: APP_ROUTES.auth.resetPassword.v2,
              },
            ],
          },
          {
            title: "Change Password",
            url: APP_ROUTES.auth.changePassword.root,
            items: [
              {
                title: "Change Password v1",
                url: APP_ROUTES.auth.changePassword.v1,
              },
            ],
          },
          {
            title: "2FA",
            url: APP_ROUTES.auth.twoFA.root,
            items: [
              {
                title: "2FA v1",
                url: APP_ROUTES.auth.twoFA.v1,
              },
              {
                title: "2FA v2",
                url: APP_ROUTES.auth.twoFA.v2,
              },
            ],
          },
        ],
      },
      {
        title: "Support",
        icon: <HeadphonesIcon />,
        url: "#",
      },
      {
        title: "My Account",
        url: APP_ROUTES.myAccount.root,
        icon: <Settings />,
        items: [
          {
            title: "Account",
            url: APP_ROUTES.myAccount.account,
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
