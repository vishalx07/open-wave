import type {
  AccountProfile,
  PermissionsType,
  SocialProvider,
  SocialSignIn,
  TrustedDevice,
} from "./type";

export const ACCOUNT: AccountProfile = {
  avatarUrl: "/images/user3.png",
  name: "Jason Tatum",
  status: "Active",
  email: "jasontt@studio.co",
  passwordLastChanged: "2 months ago",
  signInWith: ["google", "facebook", "apple"],
  referralLink: "https://studio.co/1006090",
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
    description: "Peer Transfers are not allowed",
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
