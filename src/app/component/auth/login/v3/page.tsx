import { type Metadata } from "next";
import { LockIcon, MailIcon, UserIcon } from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  Divider,
  Input,
  Link,
  Text,
} from "@jamsr-ui/react";
import { Icons } from "@/components/icons";
import { COMPONENT_ROUTES } from "@/configs/routes/component";
import { TopHeading } from "../v1/_components/top-heading";

export const metadata: Metadata = {
  title: "Login v3",
};

const page = () => {
  return (
    <div className="relative flex h-svh items-center justify-center border-none p-8">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

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
            icon={<UserIcon />}
            heading={"Welcome Back"}
            subHeading={"Enter your details to login your account."}
          />

          <Input
            label="Email Address"
            placeholder="Enter your email"
            classNames={{
              label: "text-foreground",
            }}
            isFilled
            startContent={<MailIcon size={16} />}
            size="lg"
            radius="xl"
            isRequired
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            isSecuredText
            classNames={{
              label: "text-foreground",
              endContent: "pr-2",
            }}
            isFilled
            startContent={<LockIcon size={16} />}
            size="lg"
            radius="xl"
            isRequired
          />

          <Link
            href={COMPONENT_ROUTES.auth.forgotPassword.v1}
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
          <Divider className="text-foreground-secondary text-sm">OR</Divider>
          <Button
            variant="flat"
            radius="xl"
            startContent={<Icons.GoogleIcon />}
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
};

export default page;
