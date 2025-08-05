import { Button, Divider, Text } from "@jamsr-ui/react";
import { cardsData } from "../../_mock/card";
import { recentTransactionsData } from "../../_mock/recent-transactions";
import { MasterCard } from "../master-card";
import { RecentTransactionItem } from "../recent-txn-item";

export const PhysicalCard = () => {
  return (
    <div className="flex flex-col gap-4">
      <SavingsCard />
    </div>
  );
};

const savingCardDetails = [
  {
    label: "Card Number",
    value: "• • • • 3456",
  },
  {
    label: "Expiry Date",
    value: "12/24",
  },
  {
    label: "CVC",
    value: "• • •",
  },
  {
    label: "Spending Limit",
    value: "$12,000.00",
  },
];

const ActionButtons = ["Unhide", "Adjust Limit", "More"];

const SavingsCard = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* wallet card */}

      {cardsData[1] && (
        <MasterCard
          data={cardsData[1]}
          isIcon
        />
      )}
      {/* card details */}
      {savingCardDetails.map((item, ind) => {
        const { label, value } = item;
        return (
          <div
            key={ind}
            className="flex items-center justify-between"
          >
            <Text
              as="p"
              variant="body1"
              className="text-foreground-secondary"
            >
              {label}
            </Text>
            <Text
              as="p"
              variant="body1"
              className="font-semibold"
            >
              {value}
            </Text>
          </div>
        );
      })}
      {/* Action button */}
      <div className="flex items-center justify-between gap-3">
        {ActionButtons.map((item, ind) => {
          return (
            <Button
              variant="outlined"
              color="default"
              className="flex-1"
              key={ind}
            >
              {item}
            </Button>
          );
        })}
      </div>
      <Divider />
      {/* Recent Transactions */}
      <div>
        <Text
          as="p"
          variant="paragraph2"
          className="text-foreground-secondary uppercase"
        >
          Recent Transactions
        </Text>
        <div className="flex flex-col gap-2">
          {recentTransactionsData.slice(0, 3).map((item, ind) => {
            return (
              <RecentTransactionItem
                key={ind}
                data={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
