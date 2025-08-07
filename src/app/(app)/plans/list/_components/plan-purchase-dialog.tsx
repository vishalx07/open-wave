import { Zap } from "lucide-react";
import { useDisclosure } from "@jamsr-ui/hooks";
import {
  Button,
  Dialog,
  DialogBody,
  DialogContent,
  DialogHeader,
} from "@jamsr-ui/react";
import { type Plan } from "../../types";
import { PlanPurchaseForm } from "./plan-purchase-form";

export const PlanPurchaseDialog = (props: Plan) => {
  const { name } = props;
  const { isOpen, onOpen, onToggle, onClose } = useDisclosure();
  return (
    <div className="w-full">
      <Button
        onClick={onOpen}
        fullWidth
        color="primary"
        startContent={<Zap />}
      >
        Activate
      </Button>
      <Dialog
        isOpen={isOpen}
        onOpenChange={onToggle}
        radius="xl"
      >
        <DialogContent>
          <DialogHeader className="text-lg">{name}</DialogHeader>
          <DialogBody>
            <PlanPurchaseForm
              plan={props}
              onClose={onClose}
            />
          </DialogBody>
        </DialogContent>
      </Dialog>
    </div>
  );
};
