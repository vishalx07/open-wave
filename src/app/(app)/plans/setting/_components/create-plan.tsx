"use client";

import { PlusIcon } from "lucide-react";
import { useDisclosure } from "@jamsr-ui/hooks";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
} from "@jamsr-ui/react";
import { RHFProvider } from "@jamsr-ui/rhf";
import { usePlanCreateForm } from "../hooks/use-create-form";
import { PlanForm } from "./plan-form";

export const CreatePlan = () => {
  const { isOpen, onClose, setIsOpen, onOpen } = useDisclosure();
  const { methods, onSubmt, isPending } = usePlanCreateForm({
    onSuccess: onClose,
  });
  return (
    <div>
      <Button
        onClick={onOpen}
        startContent={<PlusIcon size={16} />}
      >
        Create Plan
      </Button>
      <Drawer
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        scrollBehavior="outside"
        size="md"
      >
        <DrawerHeader>Create New Plan</DrawerHeader>
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
              Create Plan
            </Button>
          </DrawerFooter>
        </RHFProvider>
      </Drawer>
    </div>
  );
};
