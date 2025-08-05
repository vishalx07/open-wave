export type PaymentMethod = {
  id: number;
  name: string;
  logo: string;
  description: string;
  minWithdraw: number;
  maxWithdraw: number;
  charge: number;
  gasFee: number;
  arrives?: string;
  isResently?: boolean;
};

export enum UserRole {
  CEO = "CEO",
  HR_ASSISTANT = "HR Assistant",
  DATA_ENGINEER = "Data Engineer",
  MARKETING_MANAGER = "Marketing Manager",
  OPERATIONS_MANAGER = "Operations Manager",
}

export type User = {
  name: string;
  userId: string;
  avatar: string;
  email: string;
  registeredAt: string;
  role: UserRole;
};

// Transaction
export enum TransactionStatus {
  CREDIT,
  DEBIT,
  PENDING,
  FAILED,
}
export enum TransactionCategory {
  WITHDRAW,
  DEPOSIT,
  PEER_TRANSFER,
  PLAN_PURCHASE,
  REFERRAL_INCOME,
  ROI_INCOME,
}

export type Transaction = {
  id: string;
  amount: number;
  charge: number;
  netAmount: number;
  description: string;
  status: TransactionStatus;
  category: TransactionCategory;
  userId: number;
  createdAt: string;
  updatedAt?: string;
  level?: number;
  paymentMethodDetails: {
    name: string;
    logo: string;
  };
};

// Deposit
export enum DepositStatus {
  PENDING,
  CREDIT,
  FAILED,
}

export enum DepositType {
  MANUAL,
  INSTANT,
  ADMIN,
  RECEIVED,
}

export type Deposit = {
  id: string;
  userId: number;
  agentId?: number;
  amount: number;
  charge: number;
  netAmount: number;
  status: DepositStatus;
  type: DepositType;
  message: string;
  transactionId: string;
  createdAt: string;
  updatedAt?: string;
  paymentMethodDetails: {
    name: string;
    logo: string;
  };
};

// Withdrawal

export enum WithdrawStatus {
  PENDING,
  DEBIT,
  FAILED,
}

export enum WithdrawType {
  MANUAL,
  ADMIN,
  TRANSFERRED,
}

export type Withdraw = {
  id: string;
  userId: number;
  agentId?: number;
  amount: number;
  charge: number;
  netAmount: number;
  status: WithdrawStatus;
  type: WithdrawType;
  message: string;
  transactionId: string;
  gasFee?: number;
  createdAt: string;
  updatedAt?: string;
  paymentMethodDetails: {
    name: string;
    logo: string;
  };
};
