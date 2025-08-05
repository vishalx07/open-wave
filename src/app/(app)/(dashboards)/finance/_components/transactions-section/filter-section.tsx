import { IconWrapper } from "../icon-wrapper";
import { SearchInput } from "../search-input";
import { Button, Text } from "@jamsr-ui/react";
import { ClockIcon } from "lucide-react";

export const FilterSection = () => {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
      <div className="flex flex-1 items-center gap-3">
        <IconWrapper icon={<ClockIcon size={18} />} />
        <div>
          <Text className="font-semibold">Recent Transactions</Text>
          <Text variant="paragraph2" className="text-foreground-secondary">
            Display the recent transactions in the table below.
          </Text>
        </div>
      </div>
      <div className="flex gap-3">
        <SearchInput />
        <Button variant="outlined">See All</Button>
      </div>
    </div>
  );
};
