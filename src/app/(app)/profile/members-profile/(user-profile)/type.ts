export type AccountProfile = {
  avatarUrl: string;
  name: string;
  status: string;
  email: string;
  passwordLastChanged: string;
  signInWith: string[];
  referralLink: string;
};

export type PermissionsType = {
  label: string;
  description: string;
  allowed: boolean;
};

export type SocialProvider =
  | "google"
  | "linkedIn"
  | "apple"
  | "microsoft"
  | "facebook";

export interface SocialSignIn {
  provider: SocialProvider;
  email?: string;
  connected: boolean;
}

export interface TrustedDevice {
  location: {
    city: string;
    country: string;
    flag: string;
  };
  os: string;
  lastActive: string;
}
