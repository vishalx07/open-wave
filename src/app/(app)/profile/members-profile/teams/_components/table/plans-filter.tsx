import { useState } from "react";
import { CircleCheck, CirclePlus } from "lucide-react";
import { Button, Chip, Menu, MenuItem } from "@jamsr-ui/react";
import type { Plans } from "../../type";

const ITEMS: {
  label: string;
  value: Plans;
}[] = [
  {
    label: "Free",
    value: "free",
  },
  {
    label: "Pro",
    value: "pro",
  },
  {
    label: "Starter",
    value: "starter",
  },
  {
    label: "Premium",
    value: "premium",
  },
  {
    label: "Business",
    value: "business",
  },
  {
    label: "Enterprise",
    value: "enterprise",
  },
];

export const PlansFilter = () => {
  const [selectedStatus, setSelectedStatus] = useState<Plans[]>();

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
              {selectedStatus?.length ? selectedStatus.length : 0}
            </Chip>
          }
          className="border-dashed"
        >
          Plans
        </Button>
      }
    >
      {ITEMS.map((item) => {
        const { label, value } = item;
        return (
          <MenuItem
            key={value}
            preventCloseOnClick
            onClick={() => {
              setSelectedStatus((prev) => {
                if (prev?.includes(value)) {
                  return prev.filter((item) => item !== value);
                } else {
                  return [...(prev ?? []), value];
                }
              });
            }}
            endContent={
              selectedStatus?.includes(value) ? (
                <CircleCheck className="size-4" />
              ) : null
            }
          >
            {label}
          </MenuItem>
        );
      })}
    </Menu>
  );
};
