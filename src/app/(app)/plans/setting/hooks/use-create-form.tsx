import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { boolean, coerce, input, object, string } from "zod";
import { toast } from "@jamsr-ui/react";

export const coercePrice = (message?: string) =>
  coerce.number({ message: "Invalid number" }).min(1, message);

export const create = object({
  name: string().min(1, "Name is required"),
  minInvestment: coercePrice("Min Investment is required"),
  maxInvestment: coercePrice("Max Investment is required"),
  maxReturn: coercePrice("Max Return is required"),
  roi: coerce.number(),
  tradableAmount: coercePrice("Tradable Amount is required"),
  validity: coercePrice("Validity is required"),
  isActive: boolean(),
});

export type FormValues = input<typeof create>;

const defaultValues: FormValues = {
  name: "",
  maxInvestment: "" as unknown as number,
  minInvestment: "" as unknown as number,
  maxReturn: "" as unknown as number,
  tradableAmount: "" as unknown as number,
  roi: "" as unknown as number,
  validity: "" as unknown as number,
  isActive: false,
};

type Props = {
  onSuccess?: () => void;
};

export const usePlanCreateForm = ({ onSuccess }: Props) => {
  const methods = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(create),
  });
  const { handleSubmit } = methods;

  const onSubmt = handleSubmit((data) => {
    onSuccess?.();
    console.log(data);
    toast.success("Plan created successfully!", {
      position: "bottom-right",
    });
  });

  return { methods, onSubmt, isPending: false };
};
