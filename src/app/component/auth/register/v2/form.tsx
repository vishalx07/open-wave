"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { email, object, string } from "zod";
import { Link } from "@jamsr-ui/next";
import { Button } from "@jamsr-ui/react";
import { RHFInput, RHFProvider } from "@jamsr-ui/rhf";
import { COMPONENT_ROUTES } from "@/configs/routes";

type FormValues = {
  fullName: string;
  email: string;
  password: string;
};

const schema = object({
  fullName: string().min(1, "Full name is required"),
  email: email({
    error: (iss) => (!iss.input ? "Email is required" : "Invalid email"),
  }),
  password: string().trim().min(1, "Password is required"),
});

export const Form = () => {
  const defaultValues: FormValues = {
    fullName: "",
    email: "",
    password: "",
  };
  const methods = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(schema),
  });
  const { handleSubmit, reset } = methods;

  const onSubmit = handleSubmit((values) => {
    alert(
      `Full Name: ${values.fullName}, Email: ${values.email}, Password: ${values.password}`,
    );
    reset();
  });

  return (
    <RHFProvider
      isPending={false}
      methods={methods}
      onSubmit={onSubmit}
      classNames={{
        form: "w-full",
        fieldset: "flex flex-col gap-4",
      }}
    >
      <RHFInput<FormValues>
        name="fullName"
        label="Full Name"
        variant="underlined"
        placeholder="Enter your full name"
        fullWidth
        size="lg"
        isRequired
        classNames={{
          label: "text-foreground",
        }}
      />
      <RHFInput<FormValues>
        name="email"
        label="Email"
        variant="underlined"
        placeholder="Enter your email"
        fullWidth
        size="lg"
        isRequired
        classNames={{
          label: "text-foreground",
        }}
      />
      <RHFInput<FormValues>
        name="password"
        label="Password"
        variant="underlined"
        placeholder="Enter your password"
        fullWidth
        size="lg"
        isRequired
        isSecuredText
        classNames={{
          label: "text-foreground",
          endContent: "pr-2",
        }}
      />

      <Link
        href={COMPONENT_ROUTES.auth.forgotPassword.v2}
        className="ml-auto text-sm"
      >
        Forgot Password?
      </Link>

      <Button
        color="primary"
        radius="xl"
        size="lg"
        type="submit"
      >
        Sign Up
      </Button>
    </RHFProvider>
  );
};
