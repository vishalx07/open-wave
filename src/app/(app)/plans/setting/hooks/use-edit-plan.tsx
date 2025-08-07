import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { input, object, string } from "zod";
import { toast } from "@jamsr-ui/react";
import { create } from "./use-create-form";

export const update = create.and(
  object({
    id: string().min(1, "ID is required"),
  }),
);
export type FormValues = input<typeof update>;

type Props = {
  onSuccess?: () => void;
  defaultValues: FormValues;
};

export const useEditPlan = ({ onSuccess, defaultValues }: Props) => {
  const methods = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(update),
  });
  const { handleSubmit } = methods;

  const onSubmt = handleSubmit((data) => {
    onSuccess?.();
    console.log(data);
    toast.success(`Your plan (${data.name}) has been updated!`, {
      position: "bottom-right",
    });
  });

  return { methods, onSubmt, isPending: false };
};
