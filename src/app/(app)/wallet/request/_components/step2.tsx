import { ChevronLeft } from "lucide-react";
import { Avatar } from "@jamsr-ui/next";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Input,
  Text,
  Textarea,
} from "@jamsr-ui/react";

type Props = {
  setStep: (step: number) => void;
};
export const Step2 = ({ setStep }: Props) => {
  return (
    <div className="w-full max-w-lg">
      <div className="mb-6 text-center">
        <Text
          as="h1"
          variant="h3"
          className="mb-2 text-center"
        >
          Payment request
        </Text>
        <Text className="text-muted-foreground text-center">
          We'll send this to Isabella Cruz to process your payment.
        </Text>
      </div>

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
              heading="Amount"
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
        </div>
        {/* Add note*/}
        <Textarea
          label="Note"
          placeholder="Add a few notes to help you later"
          radius="2xl"
          rows={7}
        />

        {/* buttons */}
        <div className="w-full space-y-2">
          <Button
            fullWidth
            size="lg"
            color="primary"
            radius="xl"
            onClick={() => setStep(3)}
          >
            Send Request
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
