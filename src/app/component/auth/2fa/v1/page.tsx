import { KeyRoundIcon } from "lucide-react";
import { Card, CardContent, Link, Text } from "@jamsr-ui/react";
import { DummyLogo } from "@/components/dummy-logo";
import { Form } from "./_components/form";
import { TopHeading } from "./_components/top-heading";

export default function page() {
  return (
    <div className="flex h-svh w-full items-center justify-center bg-[url(/images/login-background.jpg)] bg-cover bg-center p-8">
      <DummyLogo className="absolute top-10 right-10" />
      <Card>
        <CardContent className="flex flex-col gap-4">
          <TopHeading
            icon={<KeyRoundIcon />}
            heading={"Two Step Verification"}
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
            className="text-foreground-secondary text-center"
          >
            Didn&apos;t get the code?
            <Link href="#"> Resend</Link>
          </Text>
        </CardContent>
      </Card>
    </div>
  );
}
