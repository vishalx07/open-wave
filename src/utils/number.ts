export const fValidity = (days: number) => {
  if (days === 0) return "Unlimited";
  if (days === 1) return `${days} Day`;
  return `${days} Days`;
};

const currency = "USD";

export const fPrice = (amount: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  });
  return formatter.format(amount);
};

export const fPercent = (value: number) => {
  return `${value}%`;
};
