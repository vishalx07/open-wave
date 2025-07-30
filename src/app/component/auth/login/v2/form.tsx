"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { email, object, string } from "zod";
import { Link } from "@jamsr-ui/next";
import { Button } from "@jamsr-ui/react";
import { RHFInput, RHFProvider } from "@jamsr-ui/rhf";
import { COMPONENT_ROUTES } from "@/configs/routes";

type FormValues = {
  email: string;
  password: string;
};

const schema = object({
  email: email("Invalid email"),
  password: string().trim().min(1, "Password is required"),
});

export const Form = () => {
  const defaultValues: FormValues = {
    email: "",
    password: "",
  };
  const methods = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(schema),
  });
  const { handleSubmit, reset } = methods;

  const onSubmit = handleSubmit((values) => {
    alert(`Email: ${values.email}, Password: ${values.password}`);
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
        name="email"
        label="Email"
        variant="underlined"
        placeholder="Enter you email"
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
        Log In
      </Button>
    </RHFProvider>
  );
};
