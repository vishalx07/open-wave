import { useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button, Card, CardContent, CardHeader, Text } from "@jamsr-ui/react";
import { NumberInput } from "@/components/number-input";
import { APP_ROUTES } from "@/configs/routes";
import { cn } from "@/lib/tw-merge";
import { SelectPaymentMethod } from "../../_components/select-payment-method";

type Props = {
  setStep: (step: number) => void;
};

const fees = [
  {
    name: "Amount",
    amount: "100 USD",
  },
  {
    name: "Charge",
    amount: "0.50%",
  },
  {
    name: "Payable Amount",
    amount: "105 USD",
    isDivider: true,
  },
];

export const Step1 = ({ setStep }: Props) => {
  const [amount, setAmount] = useState("100");

  return (
    <div className="w-full max-w-lg">
      <Text
        as="h1"
        variant="h3"
        className="mb-6 text-center"
      >
        Withdraw Money
      </Text>
      <div className="flex flex-col gap-6">
        <Card>
          <CardHeader
            heading="Amount to withdraw"
            classNames={{
              heading: "text-foreground-secondary text-md !font-light",
            }}
          />
          <CardContent className="pb-6">
            <NumberInput
              value={amount}
              onValueChange={(e) => setAmount(e)}
              classNames={{
                inputWrapper: "border-none p-0",
                input: "border-none text-3xl p-0",
              }}
              isInvalid={Number(amount) > 10000 || Number(amount) < 1}
              errorMessage={
                Number(amount) > 10000 || Number(amount) < 1
                  ? "Amount must be within 1 USD - 10,000 USD"
                  : ""
              }
            />
          </CardContent>
        </Card>
        {/* select payment method */}
        <div className="flex flex-col">
          <Text
            variant="paragraph2"
            className="pb-2 pl-3"
          >
            Paying with
          </Text>
          <SelectPaymentMethod />
          {/* fees */}
          <div className="px-3">
            {fees.map((fee, ind) => {
              return (
                <div
                  className="flex items-center gap-4"
                  key={ind}
                >
                  <div className="relative after:absolute after:inset-y-0 after:start-5 after:h-full after:w-px after:-translate-x-[0.5px] after:bg-neutral-700">
                    <div className="relative z-10 flex size-10 items-center justify-center">
                      <div className="size-2 rounded-full bg-neutral-700"></div>
                    </div>
                  </div>
                  <div
                    className={cn(
                      "relative flex grow items-center justify-between gap-4",
                      {
                        "after:absolute after:-top-2 after:w-full after:border-t after:border-dashed after:border-neutral-700":
                          fee.isDivider,
                      },
                    )}
                  >
                    <Text
                      className="text-muted-foreground"
                      variant="paragraph"
                    >
                      {fee.name}
                    </Text>
                    <Text variant="paragraph">{fee.amount}</Text>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full space-y-2">
          <Button
            fullWidth
            size="lg"
            color="primary"
            radius="xl"
            onClick={() => setStep(2)}
          >
            Continue
          </Button>
          <Button
            fullWidth
            size="lg"
            color="default"
            radius="xl"
            variant="light"
            startContent={<ChevronLeft size={16} />}
            as={Link}
            href={APP_ROUTES.wallet.root}
          >
            Go back
          </Button>
        </div>
      </div>
    </div>
  );
};
