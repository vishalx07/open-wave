import { Search } from "lucide-react";
import { Input } from "@jamsr-ui/react";

export const SearchBox = () => {
  return (
    <Input
      fullWidth
      isFilled
      radius="full"
      placeholder="Search..."
      endContent={
        <Search
          size={20}
          className="cursor-pointer"
        />
      }
      classNames={{
        innerWrapper: "uig-has-end-content:pr-3",
        input: "pl-4",
      }}
    />
  );
};
