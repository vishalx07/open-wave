"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { email, object } from "zod";
import { Button } from "@jamsr-ui/react";
import { RHFInput, RHFProvider } from "@jamsr-ui/rhf";

type FormValues = {
  email: string;
};

const schema = object({
  email: email("Invalid email"),
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
        fieldset: "flex flex-col gap-5",
      }}
    >
      <RHFInput<FormValues>
        name="email"
        label="Email"
        placeholder="abcd@gmail.com"
        isRequired
      />

      <Button type="submit">Send Email</Button>
    </RHFProvider>
  );
};
