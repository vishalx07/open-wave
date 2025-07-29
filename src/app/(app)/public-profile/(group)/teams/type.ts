export type Team = {
  userId: number;
  referralId: number;
  fullname: string;
  email: string;
  avatarUrl: string;
  country: string;
  phoneNumber: string;
  status: "active" | "inactive";
  createdAt: Date;
};
