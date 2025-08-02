import React from "react";
import { CheckIcon, Copy, ExternalLink, Plus } from "lucide-react";
import { Button, Input, Text } from "@jamsr-ui/react";

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
            Share your link
          </Text>
          <Text
            variant="paragraph"
            className="text-foreground-secondary"
          >
            Your request has been sent to Isabella Cruz. You’ll be notified once
            the payment is made.
          </Text>
        </div>
        <div className="flex w-full flex-col gap-4">
          <Input
            label="Request link"
            size="lg"
            radius="xl"
            value="https://preline.co/pay/r/7mY7kgn0jUeQU80"
            endContent={
              <Button
                size="sm"
                radius="full"
                color="primary"
                variant="flat"
                endContent={<ExternalLink size={14} />}
              >
                open
              </Button>
            }
          />
          <div className="flex items-center justify-between gap-4">
            <Button
              radius="xl"
              size="lg"
              variant="outlined"
              onClick={() => setStep(1)}
              startContent={<Copy size={18} />}
              className="grow"
            >
              Copy link
            </Button>
            <Button
              radius="xl"
              size="lg"
              variant="outlined"
              onClick={() => setStep(1)}
              startContent={<Plus size={18} />}
              className="grow"
            >
              New Request
            </Button>
          </div>
          <Button
            radius="xl"
            color="primary"
            size="lg"
            onClick={() => setStep(1)}
          >
            Done
          </Button>
        </div>
      </div>
    </div>
  );
};
