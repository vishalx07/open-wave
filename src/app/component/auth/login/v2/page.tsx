import { type Metadata } from "next";
import { Button, Divider, Link, Text } from "@jamsr-ui/react";
import { DummyLogo } from "@/components/dummy-logo";
import { Icons } from "@/components/icons";
import { COMPONENT_ROUTES } from "@/configs/routes/component";
import { Form } from "./form";

export const metadata: Metadata = {
  title: "Login v2",
};

export default function page() {
  return (
    <div className="relative flex h-svh">
      <DummyLogo className="absolute top-10 left-10" />
      <div className="flex w-full items-center justify-center bg-black p-4 lg:w-1/2">
        <div className="flex w-full max-w-sm grow flex-col items-center gap-4 p-4">
          {/* heading */}
          <div className="mb-4 w-full text-left">
            <Text className="text-2xl">Welcome Back</Text>
            <Text className="text-muted-foreground text-md">
              Log in to your account to continue
            </Text>
          </div>
          {/* social login */}
          <div className="space-y-2">
            <Button
              variant="outlined"
              radius="xl"
              fullWidth
              startContent={<Icons.GoogleIcon className="size-5" />}
            >
              Continue with Google
            </Button>
            <Button
              variant="outlined"
              radius="xl"
              fullWidth
              startContent={<Icons.GithubIcon />}
            >
              Continue with Github
            </Button>
          </div>
          <Divider className="text-muted-foreground my-2 w-full text-sm">
            OR
          </Divider>
          {/* main form */}
          <Form />

          {/* footer */}
          <Text
            variant="paragraph2"
            className="text-muted-foreground text-center"
          >
            Don&apos;t have an account?{" "}
            <Link href={COMPONENT_ROUTES.auth.register.v2}>Sign Up</Link>
          </Text>
        </div>
      </div>

      <div className="relative hidden w-1/2 rounded-xl bg-[url('/images/white-building.jpg')] bg-cover bg-center p-10 shadow-sm lg:flex"></div>
    </div>
  );
}
