import type { AccountProfile, TrustedDevice } from "./types";

export const ACCOUNT: AccountProfile = {
  avatarUrl: "/images/user3.png",
  name: "Ethan Morgan",
  userId: 1006047,
  username: "ethanmorgan",
  status: "Active",
  email: "jasontt@gmail.com",
  passwordLastChanged: "3 months ago",
  activePlans: ["pro", "business"],
  signInWith: ["google", "facebook", "apple"],
  referralId: 1006090,
  createdAt: new Date("2023-07-17T17:30:00"),
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
