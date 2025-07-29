import Image from "next/image";
import { Button, Input, Text } from "@jamsr-ui/react";

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
            Reset Password
          </Text>
          <span className="text-foreground-secondary text-md font-[300]">
            Include the email address associated with your account and we'll
            send you an email with instructions to reset your password.
          </span>
        </div>

        <form className="flex flex-col gap-5">
          <Input
            label="Email"
            placeholder="abcd@gmail.com"
          />

          <Button>Send Reset Intructions</Button>
        </form>
      </main>
    </div>
  );
}
