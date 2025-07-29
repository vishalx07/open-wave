import Image from "next/image";
import { Link } from "@jamsr-ui/next";
import { Button, Divider, Input, Text } from "@jamsr-ui/react";
import { COMPONENT_ROUTES } from "@/configs/routes";

export default function page() {
  return (
    <div className="relative flex min-h-dvh w-full items-center justify-center overflow-auto px-4">
      <div className="pointer-events-none fixed inset-0 z-0 h-dvh w-dvw opacity-20 select-none sm:opacity-100">
        <Image
          src="/images/login-v4-background.webp"
          decoding="async"
          alt="Background image"
          fill
          quality={100}
        />
      </div>
      <main className="relative z-10 w-full max-w-lg pt-8">
        <div className="mb-6 text-center">
          {/* logo */}
          <Text
            as="h1"
            variant="h3"
          >
            LOGO
          </Text>
          <Text
            as="h1"
            variant="h2"
            className="mt-6 text-3xl leading-10 font-[400]"
          >
            Log in to OpenWave
          </Text>
          <span className="text-foreground-secondary text-md font-normal">
            Don&apos;t have an account?{" "}
            <Link href={COMPONENT_ROUTES.auth.register.v4}>Sign up</Link>.
          </span>
        </div>
        <div className="mb-4 flex w-full flex-col items-center gap-4 sm:flex-row">
          <Button className="grow max-sm:w-full">Login with Google</Button>
          <Button className="grow max-sm:w-full">Login with GitHub</Button>
        </div>
        <Divider className="my-8">or</Divider>
        <form className="flex flex-col gap-5">
          <Input
            label="Email"
            placeholder="abcd@gmail.com"
          />
          <Input
            label="Password"
            placeholder="********"
            className="relative"
          >
            <Link
              href={COMPONENT_ROUTES.auth.forgotPassword.v4}
              className="absolute -top-8 right-0 ml-auto"
            >
              Forgot your password?
            </Link>
          </Input>

          <Button>Log In</Button>
        </form>

        <Text
          variant="paragraph2"
          className="!text-foreground-secondary mt-8 text-center"
        >
          By signing in, you agree to our{" "}
          <Link
            href="#"
            className="text-sm text-inherit"
            underline="always"
          >
            Terms{" "}
          </Link>
          and
          <Link
            href="#"
            className="text-sm text-inherit"
            underline="always"
          >
            {" "}
            Privacy Policy
          </Link>
        </Text>
      </main>
    </div>
  );
}
