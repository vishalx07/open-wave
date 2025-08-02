import { Input } from "@jamsr-ui/react";
import { SearchIcon } from "lucide-react";

export const SearchInput = () => {
  return (
    <Input
      placeholder="Search..."
      fullWidth
      variant="bordered"
      startContent={<SearchIcon size={16} />}
    />
  );
};
