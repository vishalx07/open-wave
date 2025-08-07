import { Trash2Icon } from "lucide-react";
import { IconButton, toast } from "@jamsr-ui/react";

export const DeletePlan = () => {
  const onSubmt = () => {
    toast.success("Plan deleted successfully!", { position: "bottom-right" });
  };

  return (
    <IconButton
      label="Delete Plan"
      color="danger"
      variant="flat"
      onClick={onSubmt}
    >
      <Trash2Icon />
    </IconButton>
  );
};
