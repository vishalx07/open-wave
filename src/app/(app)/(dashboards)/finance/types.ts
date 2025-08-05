export enum TransactionStatus {
  DEBIT = "Debit",
  CREDIT = "Credit",
}

export enum CardStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

export enum CardType {
  VIRTUAL = "virtual",
  PHYSICAL = "physical",
}

export enum UserRole {
  CEO = "CEO",
  HR_ASSISTANT = "HR Assistant",
  DATA_ENGINEER = "Data Engineer",
  MARKETING_MANAGER = "Marketing Manager",
  OPERATIONS_MANAGER = "Operations Manager",
}

export type Transaction = {
  id: string;
  amount: number;
  charge: number;
  createdAt: string;
  account: string;
  bankDescription: string;
  status: TransactionStatus;
  user: {
    name: string;
    userId: string;
    avatar: string;
  };
  paymentMethod: {
    name: string;
    icon: React.ReactNode;
  };
};

export type Card = {
  id: number;
  name: string;
  status: CardStatus;
  type: CardType;
  balance: number;
  cardNumber: string;
  cvc: string;
  expiryDate: string;
  image: string;
};

export type User = {
  name: string;
  userId: string;
  avatar: string;
  email: string;
  registeredAt: string;
  role: UserRole;
};

export type loginSession = {
  browser: string;
  location: string;
  createdAt: string;
  ip: string;
};

export type RecentTransaction = {
  category: string;
  message: string;
  amount: string;
  date: string;
  icon: React.ReactNode;
};
