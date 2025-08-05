export enum SubscriptionStatus {
  PAID = "Paid",
  EXPIRED = "Expired",
  PAUSED = "Paused",
}

export type Subscription = {
  name: string;
  amount: number;
  status: SubscriptionStatus;
  icon: React.ReactNode;
  which: string;
};
