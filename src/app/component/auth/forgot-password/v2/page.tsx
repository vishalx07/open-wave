import { ChevronLeftIcon } from "lucide-react";
import { Link } from "@jamsr-ui/next";
import { Button, Card, CardContent, Input, Text } from "@jamsr-ui/react";
import { COMPONENT_ROUTES } from "@/configs/routes/component";

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
            Forgot Password 🔒
          </Text>
          <div className="flex flex-col gap-5">
            <Text className="text-foreground-secondary text-sm">
              Enter your email to forgot your password.
            </Text>

            <Input
              label="Email Address"
              variant="underlined"
              placeholder="Enter you email"
              classNames={{
                label: "text-foreground",
              }}
              fullWidth
              size="lg"
              isRequired
            />

            <Button
              color="primary"
              radius="xl"
              size="lg"
              className="drop-shadow-primary/50 drop-shadow-lg"
            >
              Send reset link
            </Button>

            <Link
              className="flex items-center justify-center gap-1.5 text-center"
              href={COMPONENT_ROUTES.auth.login.v1}
            >
              <ChevronLeftIcon size={18} /> Back to login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
