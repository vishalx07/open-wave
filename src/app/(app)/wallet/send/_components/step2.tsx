import { ArrowDown, ChevronLeft, ChevronUp, HandCoins } from "lucide-react";
import { Avatar } from "@jamsr-ui/next";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Input,
  Text,
} from "@jamsr-ui/react";
import { SelectPaymentMethod } from "../../deposit/_components/select-payment-method";

type Props = {
  setStep: (step: number) => void;
};
export const Step2 = ({ setStep }: Props) => {
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
          size="sm"
        />
        <span>Isabella Cruz</span>
      </div>
      <div className="flex flex-col gap-6">
        {/* amount to send */}
        <div className="relative flex flex-col gap-2">
          <Card>
            <CardHeader
              heading="You pay"
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
          <div className="bg-background absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full p-1">
            <IconButton
              label="arrowdonw"
              radius="full"
            >
              <ArrowDown />
            </IconButton>
          </div>
          <Card className="bg-content2">
            <CardHeader
              heading="Recipient gets"
              classNames={{
                heading: "text-foreground-secondary text-md !font-light",
              }}
            />
            <CardContent className="pb-6">
              <Input
                defaultValue="90.42"
                classNames={{
                  inputWrapper: "border-none p-0",
                  input: "border-none text-3xl p-0",
                }}
                isNumberInput
              />
            </CardContent>
          </Card>
        </div>
        {/* payment method */}
        <div className="flex flex-col">
          <Text
            variant="paragraph2"
            className="pb-2 pl-3"
          >
            Paying with
          </Text>
          <SelectPaymentMethod />

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
            className="mt-1 justify-start p-3"
            disableAnimation
            disableRipple
          >
            <div className="flex grow items-center justify-between gap-4">
              <span className="text-muted-foreground">Includes fees</span>
              <span className="text-primary flex items-center gap-2">
                52.25 USD <ChevronUp size={16} />
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
                  Conversion Fee
                </Text>
                <Text variant="paragraph">0.47 USD (0.50%)</Text>
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
                  Amount after fee
                </Text>
                <Text variant="paragraph">90.42 USD</Text>
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
                  Exchange rate
                </Text>
                <Text variant="paragraph">1.00 EURO = 1.07589538 USD</Text>
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
                <Text variant="paragraph">3 USD</Text>
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
        {/* buttons */}
        <div className="w-full space-y-2">
          <Button
            fullWidth
            size="lg"
            color="primary"
            radius="xl"
            onClick={() => setStep(3)}
          >
            Continue
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
