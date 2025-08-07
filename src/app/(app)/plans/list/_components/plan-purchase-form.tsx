"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { DollarSignIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { coerce, object } from "zod";
import { Button, toast } from "@jamsr-ui/react";
import { RHFInput, RHFProvider } from "@jamsr-ui/rhf";
import { type Plan } from "../../types";

type FormValues = {
  investment: number;
};

type Props = { plan: Plan; onClose: () => void };

export const PlanPurchaseForm = (props: Props) => {
  const { plan, onClose } = props;

  const schema = object({
    investment: coerce
      .number({ message: "Invalid number" })
      .min(1, "Investment is required")
      .min(plan.minInvestment, `Minimum investment is ${plan.minInvestment}`)
      .max(plan.maxInvestment, `Maximum investment is ${plan.maxInvestment}`),
  });

  const defaultValues: FormValues = {
    investment: plan.minInvestment,
  };

  const methods = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });
  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(() => {
    onClose();
    toast.success("Plan purchased successfully!", { position: "bottom-right" });
  });

  return (
    <RHFProvider
      methods={methods}
      onSubmit={onSubmit}
      isPending={false}
    >
      <RHFInput<FormValues>
        label="Investment"
        name="investment"
        isRequired
        radius="lg"
        size="lg"
        isFilled
        isNumberInput
        startContent={<DollarSignIcon size={16} />}
      />
      <div className="flex items-center justify-end gap-2">
        <Button
          radius="lg"
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          color="primary"
          radius="lg"
        >
          Submit
        </Button>
      </div>
    </RHFProvider>
  );
};
