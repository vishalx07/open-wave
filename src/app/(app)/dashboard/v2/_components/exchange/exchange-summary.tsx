import { Text } from "@jamsr-ui/react";

const summary = [
  {
    label: "Tax (2%)",
    amount: "$2.00",
  },
  {
    label: "Exhange fee (1%)",
    amount: "$1.00",
  },
  {
    label: "Total Amount",
    amount: "$97.00",
  },
];

export const ExchangeSummary = () => {
  return (
    <div className="flex flex-col gap-2">
      {summary.map((item, ind) => {
        return (
          <div key={ind} className="flex items-center justify-between">
            <Text
              as="p"
              variant="paragraph2"
              className="text-foreground-secondary"
            >
              {item.label}
            </Text>
            <Text as="p" variant="paragraph2" className="font-semibold">
              {item.amount}
            </Text>
          </div>
        );
      })}
    </div>
  );
};
