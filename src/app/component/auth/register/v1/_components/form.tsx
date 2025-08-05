"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { email, object, string } from "zod";
import { Link } from "@jamsr-ui/next";
import { Button, Text } from "@jamsr-ui/react";
import { RHFInput, RHFProvider } from "@jamsr-ui/rhf";
import { Icons } from "@/configs/icon";

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
        placeholder="Enter your full name"
        startContent={<Icons.User />}
      />
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
        startContent={<Icons.Lock />}
      />

      <div className="w-full grow">
        <Text
          variant="paragraph2"
          className="text-muted-foreground mt-2"
        >
          I agree with the <Link href="#">Terms</Link> and{" "}
          <Link href="#">Privacy Policy</Link>
        </Text>

        <Button
          color="primary"
          radius="xl"
          size="lg"
          fullWidth
          className="drop-shadow-primary/50 mt-2 drop-shadow-lg"
          type="submit"
        >
          Register
        </Button>
      </div>
    </RHFProvider>
  );
};
