import React from "react";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { Button, Text } from "@jamsr-ui/react";

type Props = {
  setStep: (step: number) => void;
};

export const Success = ({ setStep }: Props) => {
  return (
    <div className="w-full max-w-lg">
      <div className="mt-16 flex flex-col items-center justify-center gap-6">
        <span className="border-success text-success rounded-full border-2 p-4">
          <CheckIcon size={30} />
        </span>
        <div className="text-center">
          <Text
            as="h1"
            variant="h3"
            className="mb-2"
          >
            Your transfer is on the way
          </Text>
          <Text
            variant="paragraph"
            className="text-foreground-secondary"
          >
            We've scheduled a transfer of 52.25 USD to your Preline balance.
            This transfer will be sent from your USD Debit Card.
          </Text>
        </div>
        <div className="flex gap-4">
          <Button
            radius="xl"
            color="primary"
            size="lg"
          >
            Manage your transfers
          </Button>
          <Button
            radius="xl"
            size="lg"
            variant="outlined"
            onClick={() => setStep(1)}
            endContent={<ChevronRightIcon size={18} />}
          >
            Add another money
          </Button>
        </div>
      </div>
    </div>
  );
};
