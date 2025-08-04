"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { email, object, string } from "zod";
import { Link } from "@jamsr-ui/next";
import { Button } from "@jamsr-ui/react";
import { RHFInput, RHFProvider } from "@jamsr-ui/rhf";
import { Icons } from "@/configs/icon";
import { COMPONENT_ROUTES } from "@/configs/routes";

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
        placeholder="Enter your email"
        startContent={<Icons.Mail />}
      />
      <RHFInput<FormValues>
        name="password"
        label="Password"
        placeholder="Enter your password"
        isSecuredText
        startContent={<Icons.Password />}
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
        type="submit"
      >
        Log In
      </Button>
    </RHFProvider>
  );
};
