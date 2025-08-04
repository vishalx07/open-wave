export type Plans =
  | "pro"
  | "business"
  | "starter"
  | "free"
  | "premium"
  | "enterprise";

export type Team = {
  userId: number;
  username: string;
  fullname: string;
  email: string;
  avatarUrl: string;
  country: string;
  phoneNumber: string;
  status: "active" | "inactive";
  plans: Plans[];
  createdAt: Date;
};
