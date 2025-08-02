import { PaymentMethod } from "../types";

export const mockPaymentMethods: PaymentMethod[] = [
  {
    id: 1,
    name: "OpenWave USD balance",
    logo: "/icons/dashboard2/US.svg",
    description: "Availabe balnace 45,125 USD",
    minWithdraw: 100,
    maxWithdraw: 10000,
    charge: 1.5,
    gasFee: 0,
    arrives: "in seconds",
    isResently: true,
  },
  {
    id: 2,
    name: "Debit card •••• 8080",
    logo: "/icons/dashboard2/mastercard.svg",
    description: "Expires 12/24",
    minWithdraw: 100,
    maxWithdraw: 10000,
    charge: 2.5,
    gasFee: 0,
    arrives: "by Tuesday, 29 October",
    isResently: true,
  },
  {
    id: 3,
    name: "OpenWave USD balance",
    logo: "/icons/dashboard2/EU.svg",
    description: "Availabe balnace 45,125 USD",
    minWithdraw: 100,
    maxWithdraw: 10000,
    charge: 1.5,
    gasFee: 0,
    arrives: "by Tuesday, 29 October",
  },
];
