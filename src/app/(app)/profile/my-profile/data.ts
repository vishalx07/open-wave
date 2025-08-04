import type { AccountProfile, TrustedDevice } from "./types";

export const ACCOUNT: AccountProfile = {
  avatarUrl: "/images/user3.png",
  name: "Jason Tatum",
  status: "Active",
  email: "jasontt@studio.co",
  passwordLastChanged: "2 months ago",
  signInWith: ["google", "facebook", "apple"],
  referralLink: "https://studio.co/1006090",
};

export const TRUSTED_DEVICES: TrustedDevice[] = [
  {
    location: {
      city: "Seville",
      country: "Spain",
      flag: "🇪🇸",
    },
    os: "MacOS 12.19.6",
    lastActive: "Today at 9:03 AM",
  },
  {
    location: {
      city: "Lyon",
      country: "France",
      flag: "🇫🇷",
    },
    os: "Android 14.35",
    lastActive: "Mar 18 at 9:03 AM",
  },
  {
    location: {
      city: "Toronto",
      country: "Canada",
      flag: "🇨🇦",
    },
    os: "Windows 11 Pro",
    lastActive: "Jul 30 at 4:45 PM",
  },
];
