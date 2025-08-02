import { useState } from "react";
import { CircleCheck, CirclePlus } from "lucide-react";
import { Button, Chip, Menu, MenuItem } from "@jamsr-ui/react";
import { TransactionCategory } from "../../types";

const ITEMS: {
  label: string;
  value: TransactionCategory;
}[] = [
  {
    label: "Deposit",
    value: TransactionCategory.DEPOSIT,
  },
  {
    label: "Withdraw",
    value: TransactionCategory.WITHDRAW,
  },
  {
    label: "Peer Transfer",
    value: TransactionCategory.PEER_TRANSFER,
  },
];

export const CategoryFilter = () => {
  const [selectedStatus, setSelectedStatus] = useState<TransactionCategory[]>();

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
          Category
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
