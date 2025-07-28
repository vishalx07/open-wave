import { ChevronLeftIcon, KeyRoundIcon, LockIcon } from "lucide-react";
import { Button, Card, CardContent, Input, Link, Text } from "@jamsr-ui/react";
import { APP_ROUTES } from "@/configs/routes";
import { TopHeading } from "../../login/v1/_components/top-heading";

export default function page() {
  return (
    <Card className="flex h-dvh w-full items-center justify-center bg-[url(/images/login-background.jpg)] bg-cover bg-center p-8">
      <Text
        as="h1"
        className="absolute top-10 right-10"
      >
        LOGO
      </Text>
      <Card
        className="flex w-full max-w-md flex-col gap-4 border-none bg-transparent px-8 pt-6 shadow-lg backdrop-blur-lg"
        radius="2xl"
      >
        <CardContent className="flex flex-col gap-4">
          <TopHeading
            icon={<KeyRoundIcon />}
            heading={"Reset Password"}
            subHeading={
              "Your new password must be different from previously used passwords"
            }
            className="mb-4"
          />

          <Input
            label="Password"
            placeholder="Enter you current password"
            classNames={{
              label: "text-foreground",
            }}
            isFilled
            startContent={<LockIcon size={16} />}
            size="lg"
            radius="xl"
            isRequired
          />

          <Input
            label="Confirm Password"
            placeholder="Confirm your password"
            classNames={{
              label: "text-foreground",
            }}
            isFilled
            startContent={<LockIcon size={16} />}
            size="lg"
            radius="xl"
            isRequired
          />

          <Button
            color="primary"
            radius="xl"
            size="lg"
            className="drop-shadow-primary/50 mt-4 drop-shadow-lg"
          >
            Set New Password
          </Button>

          <Link
            className="flex items-center justify-center gap-1.5 text-center"
            href={APP_ROUTES.auth.login.v1}
          >
            <ChevronLeftIcon size={18} /> Back to login
          </Link>
        </CardContent>
      </Card>
    </Card>
  );
}
