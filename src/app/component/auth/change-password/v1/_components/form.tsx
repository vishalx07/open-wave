"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { object, string } from "zod";
import { Button } from "@jamsr-ui/react";
import { RHFInput, RHFProvider } from "@jamsr-ui/rhf";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/tw-merge";

type FormValues = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const schema = object({
  currentPassword: string().min(1, "Current Password is required"),
  newPassword: string().min(1, "New Password is required"),
  confirmPassword: string().min(1, "Confirm Password is required"),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export const Form = () => {
  const defaultValues: FormValues = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };
  const methods = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(schema),
    mode: "all",
  });
  const { handleSubmit, reset } = methods;

  const onSubmit = handleSubmit((values) => {
    alert(
      `Current Password: ${values.currentPassword}, New Password: ${values.newPassword}, Confirm Password: ${values.confirmPassword}`,
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
        name="currentPassword"
        label="Current Password"
        placeholder="Enter your current password"
        isSecuredText
        startContent={<Icons.PasswordIcon />}
      />
      <RHFInput<FormValues>
        name="newPassword"
        label="New Password"
        placeholder="Enter your new password"
        isSecuredText
        startContent={<Icons.PasswordIcon />}
      />
      <RHFInput<FormValues>
        name="confirmPassword"
        label="Confirm Password"
        placeholder="Confirm your password"
        isSecuredText
        startContent={<Icons.PasswordIcon />}
      />

      <Button
        color="primary"
        radius="xl"
        size="lg"
        className="drop-shadow-primary/50 mt-4 drop-shadow-lg"
        type="submit"
      >
        Submit
      </Button>
    </RHFProvider>
  );
};
