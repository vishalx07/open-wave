import { useState } from "react";
import { ChevronLeft, HandCoins } from "lucide-react";
import { Avatar } from "@jamsr-ui/next";
import { Button, Card, CardContent, CardHeader, Text } from "@jamsr-ui/react";
import { NumberInput } from "@/components/number-input";

type Props = {
  setStep: (step: number) => void;
};
export const Step2 = ({ setStep }: Props) => {
  const [amount, setAmount] = useState("100");

  return (
    <div className="w-full max-w-lg">
      <Text
        as="h1"
        variant="h3"
        className="mb-6 text-center"
      >
        How much are you sending to
      </Text>
      <div className="mb-6 flex items-center justify-center gap-2">
        <Avatar
          src="/images/dashboard2/arthur.png"
          alt="apex"
          width={25}
          height={25}
        />
        <div className="flex flex-col text-sm">
          <span>Isabella Cruz</span>
          <span className="text-muted-foreground">@isabellacruz</span>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {/* amount to send */}

        <Card>
          <CardHeader
            heading="Amount"
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
        {/* limit */}

        <div className="border-divider bg-default/10 text-default-600 flex items-center justify-between rounded-xl border p-4 text-sm font-semibold">
          <span> Limit </span>
          <span className="flex items-center gap-2">1 USD - 10,000 USD</span>
        </div>

        {/* payment method */}
        <div className="flex flex-col">
          <Button
            variant="flat"
            startContent={
              <div className="border-divider bg-background flex size-10 items-center justify-center rounded-full border">
                <HandCoins
                  size={16}
                  className="text-foreground-secondary"
                />
              </div>
            }
            radius="xl"
            size="lg"
            className="mt-1 justify-start p-3 select-text"
            disableAnimation
            disableRipple
          >
            <div className="flex grow items-center justify-between gap-4">
              <span className="text-muted-foreground">Charge</span>
              <span className="text-danger flex items-center gap-2 font-semibold">
                0.50%
              </span>
            </div>
          </Button>
          {/* fees */}
          <div className="px-3">
            <div className="flex items-center gap-4">
              <div className="relative after:absolute after:inset-y-0 after:start-5 after:h-full after:w-px after:-translate-x-[0.5px] after:bg-neutral-700">
                <div className="relative z-10 flex size-10 items-center justify-center">
                  <div className="size-2 rounded-full bg-neutral-700"></div>
                </div>
              </div>
              <div className="flex grow items-center justify-between gap-4">
                <Text
                  className="text-muted-foreground"
                  variant="paragraph"
                >
                  Amount
                </Text>
                <Text variant="paragraph">100 USD</Text>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative after:absolute after:inset-y-0 after:start-5 after:h-full after:w-px after:-translate-x-[0.5px] after:bg-neutral-700">
                <div className="relative z-10 flex size-10 items-center justify-center">
                  <div className="size-2 rounded-full bg-neutral-700"></div>
                </div>
              </div>
              <div className="flex grow items-center justify-between gap-4">
                <Text
                  className="text-muted-foreground"
                  variant="paragraph"
                >
                  Charge
                </Text>
                <Text variant="paragraph">5 USD</Text>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative after:absolute after:inset-y-0 after:start-5 after:h-full after:w-px after:-translate-x-[0.5px] after:bg-neutral-700">
                <div className="relative z-10 flex size-10 items-center justify-center">
                  <div className="size-2 rounded-full bg-neutral-700"></div>
                </div>
              </div>
              <div className="relative flex grow items-center justify-between gap-4 after:absolute after:-top-2 after:w-full after:border-t after:border-dashed after:border-neutral-700">
                <Text
                  className="text-muted-foreground"
                  variant="paragraph"
                >
                  Payable Amount
                </Text>
                <Text variant="paragraph">105 USD</Text>
              </div>
            </div>
          </div>
        </div>
        {/* buttons */}
        <div className="w-full space-y-2">
          <Button
            fullWidth
            size="lg"
            color="primary"
            radius="xl"
            onClick={() => setStep(3)}
          >
            Proceed Transfer
          </Button>
          <Button
            fullWidth
            size="lg"
            color="default"
            radius="xl"
            variant="light"
            onClick={() => setStep(1)}
            startContent={<ChevronLeft size={16} />}
          >
            Go back
          </Button>
        </div>
      </div>
    </div>
  );
};
