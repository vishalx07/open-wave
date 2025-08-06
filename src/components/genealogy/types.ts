export enum UserStatus {
  ACTIVE,
  BLOCKED,
}

export enum UserRole {
  USER,
  ADMIN,
}

export type GenealogyUser = {
  id: string;
  userId: number;
  fullName: string;
  userName: string;
  email: string;
  avatar?: string;
  country?: string;
  level: number;
  role: UserRole;
  status: UserStatus;
  createdAt: string;
  updatedAt?: string;
  referralId?: number;
  parentId?: number;
};


