import {
  CircleQuestionMark,
  CircleUser,
  CreditCardIcon,
  Crown,
  HeadphonesIcon,
  LayoutGrid,
  ShieldIcon,
  Users,
} from "lucide-react";
import { Icons } from "@/configs/icon";
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
      },
      {
        title: "Finance",
        icon: <LayoutGrid />,
        url: APP_ROUTES.dashboard.finance,
      },
      {
        title: "HR Manager",
        icon: <LayoutGrid />,
        url: APP_ROUTES.dashboard.hrManager,
      },
    ],
  },
  {
    title: "User",
    items: [
      {
        title: "Profile",
        icon: <CircleUser />,
        url: APP_ROUTES.profile.root,
        items: [
          {
            title: "My Profile",
            url: APP_ROUTES.profile.myProfile,
          },
          {
            title: "Members Profile",
            url: APP_ROUTES.profile.membersProfile.root,
          },
        ],
      },
      {
        title: "All Members",
        icon: <Users />,
        url: APP_ROUTES.allMembers.root,
      },
      {
        title: "Genealogy",
        icon: <Icons.Genealogy />,
        url: APP_ROUTES.genealogy,
      },
      {
        title: "Plans",
        icon: <Crown />,
        url: APP_ROUTES.plans,
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
    ],
  },
  {
    title: "APPS",
    items: [
      {
        title: "FAQs",
        icon: <CircleQuestionMark />,
        url: "#",
      },
      {
        title: "Support",
        icon: <HeadphonesIcon />,
        url: "#",
      },
      {
        title: "Wallet",
        url: APP_ROUTES.wallet.root,
        icon: <CreditCardIcon />,
      },
    ],
  },
];
