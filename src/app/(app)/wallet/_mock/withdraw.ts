import { Withdraw, WithdrawStatus, WithdrawType } from "../types";

export const mockWithdrawals: Withdraw[] = [
  {
    id: "clt1f9m8coyg2l87h0r2sxd9",
    amount: 100.0,
    charge: 2.0,
    netAmount: 98.0,
    message: "Payment Withdraw",
    status: WithdrawStatus.DEBIT,
    type: WithdrawType.ADMIN,
    userId: 101,
    gasFee: 1.0,
    transactionId: "clt1f9m8coyg2l87h0r2sxd9",
    updatedAt: "2025-08-01T10:15:30Z",
    createdAt: "2025-08-01T10:15:30Z",
    paymentMethodDetails: {
      name: "Admin",
      logo: "/images/support.webp",
    },
  },
  {
    id: "clt1f9mrmxsvrzy3h09cq2mk",
    amount: 200.0,
    charge: 0.0,
    netAmount: 200.0,
    message: "Payment Withdraw",
    status: WithdrawStatus.PENDING,
    type: WithdrawType.ADMIN,
    userId: 102,
    transactionId: "clt1f9mrmxsvrzy3h09cq2mk",
    createdAt: "2025-08-01T11:00:00Z",

    paymentMethodDetails: {
      name: "JamsrPay",
      logo: "/icons/dashboard2/mastercard.svg",
    },
  },

  {
    id: "clt1f9n3q24rsbke0j1ra0cv",
    amount: 75.0,
    charge: 0.75,
    netAmount: 74.25,
    message: "Plan purchased",
    status: WithdrawStatus.DEBIT,
    type: WithdrawType.MANUAL,
    userId: 107,
    transactionId: "clt1f9n3q24rsbke0j1ra0cv",
    createdAt: "2025-08-01T21:30:00Z",
    updatedAt: "2025-08-01T11:00:00Z",
    paymentMethodDetails: {
      name: "Vip 1",
      logo: "/images/purchase.webp",
    },
  },
  {
    id: "clt1f9n64fr7we7mturth7sd",
    amount: 500.0,
    charge: 5.0,
    netAmount: 495.0,
    message: "payment transferred",
    status: WithdrawStatus.DEBIT,
    type: WithdrawType.TRANSFERRED,
    userId: 108,
    transactionId: "clt1f9n64fr7we7mturth7sd",
    createdAt: "2025-08-02T14:50:00Z",
    updatedAt: "2025-08-01T11:00:00Z",
    paymentMethodDetails: {
      name: "190012",
      logo: "/images/transfer-arrow.webp",
    },
  },
];
