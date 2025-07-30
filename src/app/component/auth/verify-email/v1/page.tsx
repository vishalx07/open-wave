import { MailIcon } from "lucide-react";
import { Link } from "@jamsr-ui/next";
import { Button, Card, CardContent, Text } from "@jamsr-ui/react";
import { DummyLogo } from "@/components/dummy-logo";
import { TopHeading } from "./_components/top-heading";

export default function page() {
  return (
    <div className="flex h-svh w-full flex-col items-center justify-center bg-[url(/images/login-background.jpg)] bg-cover bg-center p-4 sm:p-8">
      <DummyLogo className="absolute top-10 right-10" />
      <Card
        className="w-full max-w-md border-none bg-transparent shadow-lg backdrop-blur-lg"
        radius="2xl"
      >
        <CardContent className="flex flex-col gap-5 p-6 sm:p-12">
          <TopHeading
            icon={<MailIcon />}
            heading="Verify your email"
          />
          <Text className="text-foreground-secondary">
            Account activation link sent to your email address:
            <Link href={"#"}> john.doe@email.com </Link>
            Please follow the link inside to continue.
          </Text>
          <Button color="primary">Verify Email</Button>
          <Text
            variant="body1"
            className="text-foreground-secondary text-center"
          >
            Didn&apos;t get the mail?
            <Link href="#"> Resend</Link>
          </Text>
        </CardContent>
      </Card>
    </div>
  );
}
