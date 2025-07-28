import { ChevronLeftIcon } from "lucide-react";
import { Link } from "@jamsr-ui/next";
import { Button, Card, CardContent, Input, Text } from "@jamsr-ui/react";
import { APP_ROUTES } from "@/configs/routes";

export default function page() {
  return (
    <Card className="flex min-h-dvh w-full flex-col items-center justify-center bg-black p-8">
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
            Reset Password 🔒
          </Text>
          <div className="flex flex-col gap-5">
            <Text className="text-foreground-secondary text-sm">
              Your new password must be different from previously used passwords
            </Text>
            <Input
              label="Password"
              variant="underlined"
              placeholder="Enter you current password"
              classNames={{
                label: "text-foreground",
              }}
              fullWidth
              size="lg"
              isRequired
            />
            <Input
              label="Confirm Password"
              variant="underlined"
              placeholder="Confirm your password"
              classNames={{
                label: "text-foreground",
              }}
              fullWidth
              size="lg"
              isRequired
            />
            <Button color="primary">Set New Password</Button>
            <Link
              className="flex items-center justify-center gap-1.5 text-center"
              href={APP_ROUTES.auth.login.v1}
            >
              <ChevronLeftIcon size={18} /> Back to login
            </Link>
          </div>
        </CardContent>
      </Card>
    </Card>
  );
}
