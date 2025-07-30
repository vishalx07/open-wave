"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { object, string } from "zod";
import { Button } from "@jamsr-ui/react";
import { RHFOtpInput, RHFProvider } from "@jamsr-ui/rhf";
import { cn } from "@/lib/tw-merge";

type FormValues = {
  otp: string;
};

const schema = object({
  otp: string().min(1, "OTP is required").min(6, "OTP must be 6 digits"),
});

export const Form = () => {
  const defaultValues: FormValues = {
    otp: "",
  };
  const methods = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(schema),
  });
  const { handleSubmit, reset } = methods;

  const onSubmit = handleSubmit((values) => {
    alert(`OTP: ${values.otp}`);
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
      <RHFOtpInput<FormValues>
        name="otp"
        label="Enter your 6-digit verification code"
        classNames={{
          input: cn("grow-1 h-14 font-semibold text-lg"),
          label: "text-foreground",
        }}
        radius="xl"
        numberOfDigits={6}
      />
      <Button
        color="primary"
        radius="xl"
        size="lg"
        type="submit"
      >
        Verify My Account
      </Button>
    </RHFProvider>
  );
};
