import { useState } from "react";
import { CircleCheck, CirclePlus } from "lucide-react";
import {
  Button,
  ButtonProps,
  Chip,
  Menu,
  MenuItem,
  MenuProps,
} from "@jamsr-ui/react";
import { cn } from "@/lib/tw-merge";

type FilterItem<T> = {
  label: string;
  value: T;
};

type FilterMenuProps<T> = {
  label: string;
  items: FilterItem<T>[];
  selectedValues?: T[];
  onChange?: (values: T[] | undefined) => void;
  triggerProps?: Partial<ButtonProps>;
} & Partial<Omit<MenuProps, "onChange">>;

export function FilterMenu<T extends string | number>({
  label,
  items,
  selectedValues,
  onChange,
  triggerProps,
  ...props
}: FilterMenuProps<T>) {
  const [internalSelected, setInternalSelected] = useState<T[]>([]);
  const values = selectedValues ?? internalSelected;

  const toggleValue = (value: T) => {
    const newValues = values.includes(value)
      ? values.filter((v) => v !== value)
      : [...values, value];

    if (onChange) {
      onChange(newValues);
      if (newValues.length === 0) {
        onChange(undefined);
      }
    } else {
      setInternalSelected(newValues);
    }
  };

  return (
    <Menu
      placement="bottom"
      trigger={
        <Button
          variant="outlined"
          startContent={<CirclePlus size={16} />}
          endContent={
            <Chip
              size="xs"
              radius="md"
              variant="flat"
              className="min-w-5 p-0"
              classNames={{
                content: "p-0 w-full h-full items-center justify-center",
              }}
            >
              {values.length}
            </Chip>
          }
          className={cn(
            "text-foreground-secondary border-dashed",
            triggerProps?.className,
          )}
          {...triggerProps}
        >
          {label}
        </Button>
      }
      {...props}
    >
      {items.map(({ label, value }) => (
        <MenuItem
          key={String(value)}
          preventCloseOnClick
          onClick={() => toggleValue(value)}
          endContent={
            values.includes(value) ? <CircleCheck className="size-4" /> : null
          }
          className="text-foreground-secondary"
        >
          {label}
        </MenuItem>
      ))}
    </Menu>
  );
}
