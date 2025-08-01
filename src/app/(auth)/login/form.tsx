"use client";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { email, object, string } from "zod";
import { Link } from "@jamsr-ui/next";
import { Button, toast } from "@jamsr-ui/react";
import { RHFInput, RHFProvider } from "@jamsr-ui/rhf";
import { APP_CONFIG } from "@/configs/app";
import { APP_ROUTES, COMPONENT_ROUTES } from "@/configs/routes";

type FormValues = {
  email: string;
  password: string;
};

const schema = object({
  email: email({
    error: (iss) => (!iss.input ? "Email is required" : "Invalid email"),
  }),
  password: string().trim().min(1, "Password is required"),
});

export const Form = () => {
  const router = useRouter();

  const defaultValues: FormValues = {
    email: APP_CONFIG.login.email,
    password: APP_CONFIG.login.password,
  };
  const methods = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(schema),
  });
  const { handleSubmit, reset } = methods;

  const onSubmit = handleSubmit(({ email, password }) => {
    if (
      email === APP_CONFIG.login.email &&
      password === APP_CONFIG.login.password
    ) {
      toast.success("Login successful");
      router.push(APP_ROUTES.dashboard);
    } else {
      toast.error("Invalid email or password");
    }
  });

  return (
    <RHFProvider
      isPending={false}
      methods={methods}
      onSubmit={onSubmit}
      classNames={{
        form: "w-full",
        fieldset: "flex flex-col gap-5",
      }}
    >
      <RHFInput<FormValues>
        name="email"
        label="Email"
        placeholder="abcd@gmail.com"
        isRequired
      />
      <RHFInput<FormValues>
        name="password"
        label="Password"
        placeholder="********"
        className="relative"
        isRequired
      >
        <Link
          href={COMPONENT_ROUTES.auth.forgotPassword.v4}
          className="absolute -top-8 right-0 ml-auto"
        >
          Forgot your password?
        </Link>
      </RHFInput>

      <Button type="submit">Log In</Button>
    </RHFProvider>
  );
};
