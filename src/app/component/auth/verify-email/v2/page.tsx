import { Link } from "@jamsr-ui/next";
import { Button, Card, CardContent, Text } from "@jamsr-ui/react";

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
            Verify your email ✉️
          </Text>
          <div className="flex flex-col gap-5">
            <Text className="text-foreground-secondary">
              Account activation link sent to your email address:
              <Link href={"#"}> john.doe@email.com </Link>
              Please follow the link inside to continue.
            </Text>
            <Button color="primary">Skip For Now</Button>
            <Text
              variant="body1"
              className="text-foreground-secondary text-center"
            >
              Didn&apos;t get the mail?
              <Link href="#"> Resend</Link>
            </Text>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
