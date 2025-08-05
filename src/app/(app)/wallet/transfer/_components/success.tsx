import Link from "next/link";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { Button, Text } from "@jamsr-ui/react";
import { APP_ROUTES } from "@/configs/routes";

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
            Your transfer is successfull
          </Text>
          <Text
            variant="paragraph"
            className="text-foreground-secondary"
          >
            Your payment has been successfully transferred to the recipient's
            wallet.
          </Text>
        </div>
        <div className="flex gap-4">
          <Button
            radius="xl"
            color="primary"
            size="lg"
            as={Link}
            href={APP_ROUTES.wallet.root}
          >
            View transaction details
          </Button>
          <Button
            radius="xl"
            size="lg"
            variant="outlined"
            onClick={() => setStep(1)}
            endContent={<ChevronRightIcon size={18} />}
          >
            Make another transfer
          </Button>
        </div>
      </div>
    </div>
  );
};
