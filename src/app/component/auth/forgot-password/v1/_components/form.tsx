"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { email, object } from "zod";
import { Button } from "@jamsr-ui/react";
import { RHFInput, RHFProvider } from "@jamsr-ui/rhf";
import { Icons } from "@/components/icons";

type FormValues = {
  email: string;
};

const schema = object({
  email: email({
    error: (iss) => (!iss.input ? "Email is required" : "Invalid email"),
  }),
});

export const Form = () => {
  const defaultValues: FormValues = {
    email: "",
  };
  const methods = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(schema),
  });
  const { handleSubmit, reset } = methods;

  const onSubmit = handleSubmit((values) => {
    alert(`Email: ${values.email}`);
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
        startContent={<Icons.MailIcon />}
      />

      <Button
        color="primary"
        radius="xl"
        size="lg"
        className="drop-shadow-primary/50 mt-4 drop-shadow-lg"
        type="submit"
      >
        Send Email
      </Button>
    </RHFProvider>
  );
};
