import { ChevronRightIcon } from "lucide-react";
import { Button } from "@jamsr-ui/react";
import { type RecentTransaction } from "../types";
import { IconWrapper } from "./icon-wrapper";

type Props = {
  data: RecentTransaction;
};

export const RecentTransactionItem = ({ data }: Props) => {
  const { icon, message, category, amount, date } = data;

  return (
    <Button
      variant="light"
      disableRipple
      className="hover:!bg-content2 flex w-full cursor-pointer items-center gap-3 rounded-xl p-0 py-2 text-left transition-all duration-200 ease-out hover:px-3"
    >
      <IconWrapper icon={icon} />
      <div className="min-w-0 flex-1 space-y-1">
        <div className="text-md text-text-strong-950 truncate">{category}</div>
        <div className="text-foreground-secondary truncate text-sm">
          {message}
        </div>
      </div>
      <div className="space-y-1 text-right">
        <div className="text-md font-semibold">{amount}</div>
        <div className="text-foreground-secondary text-sm">{date}</div>
      </div>
      <div className="text-foreground-secondary hover:text-foreground">
        <ChevronRightIcon size={16} />
      </div>
    </Button>
  );
};
