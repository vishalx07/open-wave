import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { IconButton } from "@jamsr-ui/react";

type Props = {
  isExtended: boolean;
};

export const GenealogyNodeButton = ({ isExtended }: Props) => {
  return (
    <IconButton
      label="extend"
      disableAnimation
      disableRipple
      variant="flat"
      className="border-divider bg-background border"
    >
      {isExtended ? <MinusCircleIcon /> : <PlusCircleIcon />}
    </IconButton>
  );
};
