export type AccountProfile = {
  avatarUrl: string;
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

export interface TrustedDevice {
  location: {
    city: string;
    country: string;
    flag: string;
  };
  os: string;
  lastActive: string;
}
