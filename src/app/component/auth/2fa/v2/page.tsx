import { Link } from "@jamsr-ui/next";
import { Button, Card, CardContent, OtpInput, Text } from "@jamsr-ui/react";

export default function page() {
  return (
    <div className="flex h-svh w-full flex-col items-center justify-center bg-black p-8">
      <Card
        className="bg-background w-full max-w-md border-none shadow-lg backdrop-blur-lg"
        radius="2xl"
      >
        <CardContent className="p-6 sm:p-12">
          <Text
            as="h1"
            variant="h3"
            className="mb-6 text-center font-semibold"
          >
            LOGO
          </Text>
          <Text
            as="h4"
            className="text-2xl"
          >
            Two Step Verification 💬
          </Text>
          <div className="flex flex-col gap-5">
            <Text className="text-foreground-secondary text-sm">
              We sent a verification code to your mobile. Enter the code from
              the mobile in the field below.
              <strong>******1234</strong>
            </Text>

            <OtpInput
              label="Type your 6 digit security code"
              classNames={{
                input: "grow-1 h-14 font-semibold text-lg",
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
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
