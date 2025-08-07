import { DollarSignIcon } from "lucide-react";
import { RHFInput, RHFSwitch } from "@jamsr-ui/rhf";
import { type FormValues } from "../hooks/use-create-form";

export const PlanForm = () => {
  return (
    <div className="flex flex-col gap-4">
      <RHFInput<FormValues>
        name="name"
        label="Plan Name"
      />
      <RHFInput<FormValues>
        name="minInvestment"
        startContent={<DollarSignIcon size={16} />}
        label="Min Investment"
        isNumberInput
      />
      <RHFInput<FormValues>
        name="maxInvestment"
        label="Max Investment"
        startContent={<DollarSignIcon size={16} />}
        isNumberInput
      />
      <RHFInput<FormValues>
        name="roi"
        label="ROI"
        isNumberInput
        endContent="%"
      />
      <RHFInput<FormValues>
        name="tradableAmount"
        label="Tradable Amount"
        isNumberInput
        endContent="%"
      />
      <RHFInput<FormValues>
        name="maxReturn"
        label="Max Return"
        isNumberInput
        endContent="%"
      />
      <RHFInput<FormValues>
        name="validity"
        label="Validity"
        isNumberInput
        endContent="Days"
      />
      <RHFSwitch<FormValues>
        name="isActive"
        label="Active"
      />
    </div>
  );
};
