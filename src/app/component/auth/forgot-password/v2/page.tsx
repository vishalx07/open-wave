import { ChevronLeftIcon } from "lucide-react";
import { Link } from "@jamsr-ui/next";
import { Card, CardContent, Text } from "@jamsr-ui/react";
import { DummyLogo } from "@/components/dummy-logo";
import { COMPONENT_ROUTES } from "@/configs/routes/component";
import { Form } from "./form";

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
            className="flex items-center justify-center gap-1.5 text-center"
            href={COMPONENT_ROUTES.auth.login.v2}
          >
            <ChevronLeftIcon size={18} /> Back to login
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
