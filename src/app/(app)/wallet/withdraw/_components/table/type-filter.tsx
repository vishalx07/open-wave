import { FilterMenu } from "@/components/filter-menu";
import { WithdrawType } from "../../../types";

const ITEMS: {
  label: string;
  value: WithdrawType;
}[] = [
  {
    label: "Manual",
    value: WithdrawType.MANUAL,
  },
  {
    label: "Admin",
    value: WithdrawType.ADMIN,
  },
  {
    label: "Transferred",
    value: WithdrawType.TRANSFERRED,
  },
];

type Props = {
  selectedValues: WithdrawType[] | undefined;
  onChange: (selectedValues: WithdrawType[] | undefined) => void;
};

export const TypeFilter = ({ selectedValues, onChange }: Props) => {
  return (
    <FilterMenu
      label="Type"
      items={ITEMS}
      selectedValues={selectedValues}
      onChange={onChange}
    />
  );
};
