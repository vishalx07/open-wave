export type AccountProfile = {
  name: string;
  userId: number;
  username: string;
  status: string;
  email: string;
  passwordLastChanged: string;
  activePlans: string[];
  signInWith: string[];
  referralId: number;
  createdAt: Date;
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
