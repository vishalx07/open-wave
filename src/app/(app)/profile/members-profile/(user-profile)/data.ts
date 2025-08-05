import type {
  AccountProfile,
  PermissionsType,
  SocialProvider,
  SocialSignIn,
  TrustedDevice,
} from "./type";

export const ACCOUNT: AccountProfile = {
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

export const PERMISSIONS: PermissionsType[] = [
  {
    label: "Deposit",
    description: "Deposits are allowed",
    allowed: true,
  },
  {
    label: "Withdraw",
    description: "Withdraws are allowed",
    allowed: true,
  },
  {
    label: "Peer Transfer",
    description: "Peer Transfers are allowed",
    allowed: false,
  },
  {
    label: "Ticket",
    description: "Tickets are allowed",
    allowed: true,
  },
];

export const CONNECTED_SOCIAL_PROVIDERS: SocialSignIn[] = [
  {
    provider: "google",
    email: "jasontatum@ktstudio.io",
    connected: true,
  },
  {
    provider: "linkedIn",
    email: "jasontt@keenthemes.co",
    connected: false,
  },
];

export const AVAILABLE_SOCIAL_PROVIDERS: SocialProvider[] = [
  "apple",
  "microsoft",
  "facebook",
];

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
];
