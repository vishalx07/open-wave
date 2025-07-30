import { MailIcon } from "lucide-react";
import { Link } from "@jamsr-ui/next";
import { Card, CardContent, Text } from "@jamsr-ui/react";
import { DummyLogo } from "@/components/dummy-logo";
import { Form } from "./_components/form";
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
            subHeading={
              <>
                A verification code has been sent to your email address ending
                with <strong className="text-white/80">****@gmail.com</strong>.
                Please enter the code below to complete verification.{" "}
              </>
            }
          />
          <Form />
          <Text
            variant="body1"
            className="text-muted-foreground text-center"
          >
            Didn&apos;t get the code?
            <Link href="#"> Resend</Link>
          </Text>
        </CardContent>
      </Card>
    </div>
  );
}
