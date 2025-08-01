import { type Metadata } from "next";
import { UserPlusIcon } from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  Divider,
  Link,
  Text,
} from "@jamsr-ui/react";
import { DummyLogo } from "@/components/dummy-logo";
import { Logos } from "@/configs/icon";
import { COMPONENT_ROUTES } from "@/configs/routes/component";
import { Form } from "./_components/form";
import { TopHeading } from "./_components/top-heading";

export const metadata: Metadata = {
  title: "Register v1",
};

const page = () => {
  return (
    <div className="flex h-svh w-full items-center justify-start bg-[url(/images/login-background.jpg)] bg-cover bg-center p-4 sm:p-8">
      <DummyLogo className="absolute top-10 right-10" />
      <Card>
        <CardContent className="flex flex-col gap-4">
          <TopHeading
            icon={<UserPlusIcon />}
            heading={"Create a new account"}
            subHeading={"Enter your details below to get started."}
          />
          <Form />
          <Divider className="text-foreground-secondary text-sm">OR</Divider>
          <Button
            variant="flat"
            radius="xl"
            startContent={<Logos.Google className="size-5" />}
          >
            Continue with Google
          </Button>
          <Text
            variant="paragraph2"
            className="text-foreground-secondary text-center"
          >
            Already have an account?{" "}
            <Link href={COMPONENT_ROUTES.auth.login.v1}>Login</Link>
          </Text>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
