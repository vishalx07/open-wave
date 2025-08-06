export type Plan = {
  id: string;
  name: string;
  image: string;
  minInvestment: number;
  maxInvestment: number;
  maxReturn: number;
  roi: number;
  tradableAmount: number;
  validity: number;
  isActive: boolean;
  createdAt: string;
  updatedAt?: string;
};
