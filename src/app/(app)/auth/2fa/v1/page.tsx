import { KeyRoundIcon } from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  Link,
  OtpInput,
  Text,
} from "@jamsr-ui/react";
import { TopHeading } from "../../login/v1/_components/top-heading";

export default function page() {
  return (
    <Card className="flex h-dvh w-full items-center justify-center bg-[url(/images/login-background.jpg)] bg-cover bg-center p-8">
      <Text
        as="h1"
        className="absolute top-10 right-10"
      >
        LOGO
      </Text>
      <Card
        className="flex w-full max-w-md flex-col gap-4 border-none bg-transparent px-8 pt-6 shadow-lg backdrop-blur-lg"
        radius="2xl"
      >
        <CardContent className="flex flex-col gap-4">
          <TopHeading
            icon={<KeyRoundIcon />}
            heading={"Two Step Verification"}
            subHeading="We sent a verification code to your mobile. Enter the code from the
            mobile in the field below. ******1234"
          />

          <OtpInput
            label="Type your 6 digit security code"
            classNames={{
              label: "text-foreground",
              input: "grow-1 h-16",
            }}
            radius="xl"
            numberOfDigits={6}
          />

          <Button
            color="primary"
            radius="xl"
            size="lg"
            className="drop-shadow-primary/50 mt-4 drop-shadow-lg"
          >
            Verify My Account
          </Button>

          <Text
            variant="body1"
            className="text-foreground-secondary text-center"
          >
            Didn&apos;t get the code?
            <Link href="#"> Resend</Link>
          </Text>
        </CardContent>
      </Card>
    </Card>
  );
}
