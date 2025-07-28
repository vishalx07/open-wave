import { LockIcon, MailIcon, UserIcon, UserPlusIcon } from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  Checkbox,
  Divider,
  Input,
  Link,
  Text,
} from "@jamsr-ui/react";
import { Icons } from "@/components/icons";
import { COMPONENT_ROUTES } from "@/configs/routes/component";
import { TopHeading } from "../../login/v1/_components/top-heading";

const page = () => {
  return (
    <div className="flex h-svh w-full items-center justify-start bg-[url(/images/login-background.jpg)] bg-cover bg-center p-8">
      <Text
        as="h1"
        className="absolute top-10 right-10"
      >
        LOGO
      </Text>
      <Card
        className="flex w-full max-w-md flex-col gap-4 border-none bg-transparent px-8 pt-6 pb-10 shadow-lg backdrop-blur-lg"
        radius="2xl"
      >
        <CardContent className="flex flex-col gap-4">
          <TopHeading
            icon={<UserPlusIcon />}
            heading={"Create a new account"}
            subHeading={"Enter your details to register."}
          />
          <Input
            label="Full Name"
            placeholder="Enter you email"
            classNames={{
              label: "text-foreground",
            }}
            isRequired
            isFilled
            startContent={<UserIcon size={16} />}
            size="lg"
            radius="xl"
          />
          <Input
            label="Email Address"
            placeholder="Enter you email"
            classNames={{
              label: "text-foreground",
            }}
            isRequired
            isFilled
            startContent={<MailIcon size={16} />}
            size="lg"
            radius="xl"
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            isSecuredText
            classNames={{
              label: "text-foreground",
              endContent: "pr-2",
            }}
            isRequired
            isFilled
            startContent={<LockIcon size={16} />}
            size="lg"
            radius="xl"
          />

          <Checkbox
            label={
              <Text variant="paragraph2">
                I agree with the <Link href="#">Tearms</Link> and{" "}
                <Link href="#">Privacy Policy</Link>
              </Text>
            }
          />

          <Button
            color="primary"
            radius="xl"
            size="lg"
            className="drop-shadow-primary/50 mt-4 drop-shadow-lg"
          >
            Register
          </Button>
          <Divider className="text-foreground-secondary text-sm">OR</Divider>
          <Button
            variant="flat"
            radius="xl"
            startContent={<Icons.GoogleIcon />}
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
