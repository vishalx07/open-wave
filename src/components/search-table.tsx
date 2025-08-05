"use client";

import { SearchIcon } from "lucide-react";
import { useQueryState } from "nuqs";
import { Input, type InputProps } from "@jamsr-ui/react";
import { cn } from "@/lib/tw-merge";
import { debounce } from "@/utils/debounce";

export const SearchTable = (props?: Partial<InputProps>) => {
  const [query, setQuery] = useQueryState("q");

  // debounce input change
  const handleChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      void setQuery(null);
    } else {
      void setQuery(e.target.value);
    }
  }, 500);

  return (
    <Input
      placeholder="Search..."
      isFilled
      startContent={<SearchIcon size={20} />}
      className={cn("min-w-[300px]", props?.className)}
      defaultValue={query ?? ""}
      onChange={handleChange}
      isClearable
      onClearInput={() => {
        void setQuery(null);
      }}
      {...props}
    />
  );
};
