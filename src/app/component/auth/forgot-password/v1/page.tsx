import { ChevronLeftIcon, KeyRoundIcon, MailIcon } from "lucide-react";
import { Button, Card, CardContent, Input, Link, Text } from "@jamsr-ui/react";
import { COMPONENT_ROUTES } from "@/configs/routes/component";
import { TopHeading } from "../../login/v1/_components/top-heading";

export default function page() {
  return (
    <div className="flex h-svh w-full items-center justify-center bg-[url(/images/login-background.jpg)] bg-cover bg-center p-8">
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
            heading={"Forgot Password"}
            subHeading={"Enter your email to forgot your password."}
            className="mb-4"
          />

          <Input
            label="Email Address"
            placeholder="Enter you email"
            classNames={{
              label: "text-foreground",
            }}
            isFilled
            startContent={<MailIcon size={16} />}
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
            Send reset link
          </Button>

          <Link
            className="flex items-center justify-center gap-1.5 text-center"
            href={COMPONENT_ROUTES.auth.login.v1}
          >
            <ChevronLeftIcon size={18} /> Back to login
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
