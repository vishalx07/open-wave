import { FilterMenu } from "@/components/filter-menu";
import { Icons } from "@/configs/icon";
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
  {
    label: "Plan Purchase",
    value: TransactionCategory.PLAN_PURCHASE,
  },
  {
    label: "Referral Income",
    value: TransactionCategory.REFERRAL_INCOME,
  },
  {
    label: "ROI Income",
    value: TransactionCategory.ROI_INCOME,
  },
];

type Props = {
  selectedValues: TransactionCategory[] | undefined;
  onChange: (selectedValues: TransactionCategory[] | undefined) => void;
};

export const CategoryFilter = ({ selectedValues, onChange }: Props) => {
  return (
    <FilterMenu
      label="Category"
      items={ITEMS}
      selectedValues={selectedValues}
      onChange={onChange}
      triggerProps={{
        startContent: <Icons.PreferenceHorizontal className="size-4" />,
      }}
    />
  );
};
