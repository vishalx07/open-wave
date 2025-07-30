import { type Metadata } from "next";
import { ChevronLeftIcon } from "lucide-react";
import { Link } from "@jamsr-ui/next";
import { Card, CardContent, Text } from "@jamsr-ui/react";
import { DummyLogo } from "@/components/dummy-logo";
import { COMPONENT_ROUTES } from "@/configs/routes/component";
import { Form } from "./form";

export const metadata: Metadata = {
  title: "Forgot Password v2",
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
              Forgot Password 🔒
            </Text>
            <Text className="text-foreground-secondary text-sm">
              Enter your email below to reset your password.
            </Text>
          </div>

          <Form />

          <Link
            className="text-muted-foreground flex items-center justify-center text-center text-sm"
            href={COMPONENT_ROUTES.auth.login.v1}
          >
            <ChevronLeftIcon size={16} /> Back to login
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
