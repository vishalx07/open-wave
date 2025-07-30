import { UserIcon } from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  Divider,
  Link,
  Text,
} from "@jamsr-ui/react";
import { DummyLogo } from "@/components/dummy-logo";
import { Icons } from "@/components/icons";
import { COMPONENT_ROUTES } from "@/configs/routes/component";
import { Form } from "./_components/form";
import { TopHeading } from "./_components/top-heading";

export default function page() {
  return (
    <div className="flex h-svh items-center justify-start border-none bg-[url(/images/login-background.jpg)] bg-cover bg-center p-4 sm:p-8">
      <DummyLogo className="absolute top-10 right-10" />
      <Card>
        <CardContent className="flex flex-col gap-4">
          <TopHeading
            icon={<UserIcon />}
            heading={"Welcome Back"}
            subHeading={"Enter your details to login your account."}
          />

          <Form />
          <Divider className="text-foreground-secondary text-sm">OR</Divider>

          <Button
            variant="flat"
            radius="xl"
            startContent={<Icons.GoogleIcon className="size-5" />}
          >
            Continue with Google
          </Button>
          <Button
            variant="flat"
            radius="xl"
            startContent={<Icons.GithubIcon />}
          >
            Continue with Github
          </Button>

          <Text
            variant="paragraph2"
            className="text-foreground-secondary text-center"
          >
            Don&apos;t have an account?{" "}
            <Link href={COMPONENT_ROUTES.auth.register.v1}>Sign Up</Link>
          </Text>
        </CardContent>
      </Card>
    </div>
  );
}
