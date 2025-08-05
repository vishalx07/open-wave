import { CardStatus, CardType, type Card } from "../types";

export const cardsData: Card[] = [
  {
    id: 1,
    name: "Savings Card",
    status: CardStatus.ACTIVE,
    type: CardType.VIRTUAL,
    balance: 16058.94,
    cardNumber: "• • • • 1234",
    cvc: "• • •",
    expiryDate: "12/24",
    image: "/icons/dashboard2/apex.svg",
  },
  {
    id: 2,
    name: "Daily Spending Card",
    status: CardStatus.INACTIVE,
    type: CardType.VIRTUAL,
    balance: 11.25,
    cardNumber: "• • • • 6454",
    cvc: "• • •",
    expiryDate: "12/24",
    image: "/icons/dashboard2/solaris.svg",
  },
  {
    id: 3,
    name: "Cardholder Name",
    status: CardStatus.ACTIVE,
    type: CardType.PHYSICAL,
    balance: 12,
    cardNumber: "• • • • 9676",
    cvc: "• • •",
    expiryDate: "12/24",
    image: "/icons/dashboard2/apex.svg",
  },
];
