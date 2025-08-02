import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Input,
  Text,
} from "@jamsr-ui/react";
import { APP_ROUTES } from "@/configs/routes";
import { SelectPaymentMethod } from "./select-payment-method";

type Props = {
  setStep: (step: number) => void;
};

export const Step1 = ({ setStep }: Props) => {
  return (
    <div className="w-full max-w-lg">
      <Text
        as="h1"
        variant="h3"
        className="mb-6 text-center"
      >
        Add money
      </Text>
      <div className="flex flex-col gap-6">
        <Card>
          <CardHeader
            heading="Amount to add"
            classNames={{
              heading: "text-foreground-secondary text-md !font-light",
            }}
          />
          <CardContent className="pb-6">
            <Input
              defaultValue="100"
              classNames={{
                inputWrapper: "border-none p-0",
                input: "border-none text-3xl p-0",
              }}
              isNumberInput
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
                  Debit card fee
                </Text>
                <Text variant="paragraph">2.25 USD</Text>
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
                  Our fee
                </Text>
                <Text variant="paragraph">0 USD</Text>
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
                  Total fees
                </Text>
                <Text variant="paragraph">2.25 USD</Text>
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
                  Total
                </Text>
                <Text variant="paragraph">52.25 USD</Text>
              </div>
            </div>
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
