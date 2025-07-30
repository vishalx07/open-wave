import { type Metadata } from "next";
import { Link } from "@jamsr-ui/next";
import { Card, CardContent, Text } from "@jamsr-ui/react";
import { DummyLogo } from "@/components/dummy-logo";
import { Form } from "./form";

export const metadata: Metadata = {
  title: "2FA v2",
};

export default function page() {
  return (
    <div className="flex h-svh w-full flex-col items-center justify-center bg-black p-8">
      <Card className="w-full max-w-md border-none bg-transparent">
        <CardContent className="flex flex-col gap-5 p-4 sm:p-8">
          <DummyLogo className="mx-auto mb-6" />

          <div>
            <Text
              as="h4"
              className="text-2xl"
            >
              Two Step Verification 💬
            </Text>
            <Text className="text-foreground-secondary text-sm">
              A verification code has been sent to your email address ending
              with <strong className="text-white/80">****@gmail.com</strong>.
              Please enter the code below to complete verification.
            </Text>
          </div>

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
