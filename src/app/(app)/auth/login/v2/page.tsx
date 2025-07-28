import { Button, Card, Divider, Input, Link, Text } from "@jamsr-ui/react";
import { Icons } from "@/components/icons";
import { APP_ROUTES } from "@/configs/routes";

const page = () => {
  return (
    <Card className="relative flex h-full w-full justify-center overflow-auto">
      <div className="relative flex min-h-[48rem] w-full">
        <Text
          as="h1"
          className="absolute top-5 left-2 lg:left-5"
        >
          LOGO
        </Text>
        <div className="flex w-full items-center justify-center bg-black lg:w-1/2">
          <div className="flex w-full max-w-sm grow flex-col items-center gap-4 p-4">
            <div className="w-full text-left">
              <Text className="pb-2 text-2xl">Welcome Back</Text>
              <Text className="text-muted-foreground text-md">
                Log in to your account to continue
              </Text>
            </div>
            <div className="flex w-full flex-col gap-2">
              <Button
                variant="outlined"
                radius="xl"
                fullWidth
                startContent={<Icons.GoogleIcon />}
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
            <div className="flex w-full flex-col gap-4">
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
              <Input
                label="Password"
                variant="underlined"
                placeholder="Enter your password"
                isSecuredText
                classNames={{
                  label: "text-foreground",
                  endContent: "pr-2",
                }}
                fullWidth
                size="lg"
                isRequired
              />

              <Link
                href="/reset-password"
                className="ml-auto text-sm"
              >
                Forgot Password?
              </Link>

              <Button
                color="primary"
                radius="xl"
                size="lg"
                className="drop-shadow-primary/50 drop-shadow-lg"
              >
                Log In
              </Button>
            </div>

            <Text
              variant="paragraph2"
              className="text-center"
            >
              Don't have an account?{" "}
              <Link href={APP_ROUTES.auth.register.v2}>Sign Up</Link>
            </Text>
          </div>
        </div>

        <div className="relative hidden w-1/2 rounded-xl bg-[url('/images/white-building.jpg')] bg-cover bg-center p-10 shadow-sm lg:flex"></div>
      </div>
    </Card>
  );
};

export default page;
