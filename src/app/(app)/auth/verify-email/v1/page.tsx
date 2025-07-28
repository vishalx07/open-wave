import { MailIcon } from "lucide-react";
import { Link } from "@jamsr-ui/next";
import { Button, Card, CardContent, Text } from "@jamsr-ui/react";
import { TopHeading } from "../../login/v1/_components/top-heading";

export default function page() {
  return (
    <Card className="flex min-h-dvh w-full flex-col items-center justify-center bg-[url(/images/login-background.jpg)] bg-cover bg-center p-8">
      <Text
        as="h1"
        variant="h3"
        className="absolute top-10 right-10 text-center font-semibold"
      >
        LOGO
      </Text>
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
          <Button color="primary">Skip For Now</Button>
          <Text
            variant="body1"
            className="text-foreground-secondary text-center"
          >
            Didn&apos;t get the mail?
            <Link href="#"> Resend</Link>
          </Text>
        </CardContent>
      </Card>
    </Card>
  );
}
