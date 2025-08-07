"use client";

import { EditIcon } from "lucide-react";
import { useDisclosure } from "@jamsr-ui/hooks";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  IconButton,
} from "@jamsr-ui/react";
import { RHFProvider } from "@jamsr-ui/rhf";
import { Plan } from "../../types";
import { useEditPlan, type FormValues } from "../hooks/use-edit-plan";
import { PlanForm } from "./plan-form";

type Props = {
  data: Plan;
};

export const EditPlan = ({ data }: Props) => {
  const defaultValues: FormValues = {
    id: data.id,
    name: data.name,
    maxInvestment: data.maxInvestment,
    minInvestment: data.minInvestment,
    maxReturn: data.maxReturn,
    tradableAmount: data.tradableAmount,
    roi: data.roi,
    validity: data.validity,
    isActive: data.isActive,
  };

  const { isOpen, onClose, setIsOpen, onOpen } = useDisclosure();
  const { methods, onSubmt, isPending } = useEditPlan({
    onSuccess: onClose,
    defaultValues,
  });
  return (
    <div>
      <IconButton
        label="update plan"
        onClick={onOpen}
        variant="flat"
      >
        <EditIcon size={16} />
      </IconButton>
      <Drawer
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        scrollBehavior="outside"
        size="md"
      >
        <DrawerHeader>Update Plan</DrawerHeader>
        <RHFProvider
          methods={methods}
          onSubmit={onSubmt}
          isPending={isPending}
        >
          <DrawerBody>
            <PlanForm />
          </DrawerBody>
          <DrawerFooter>
            <Button
              type="submit"
              isLoading={isPending}
              fullWidth
            >
              Update
            </Button>
          </DrawerFooter>
        </RHFProvider>
      </Drawer>
    </div>
  );
};
