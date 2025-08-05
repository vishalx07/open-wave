import { FilterMenu } from "@/components/filter-menu";
import { WithdrawStatus } from "../../../types";

const ITEMS: {
  label: string;
  value: WithdrawStatus;
}[] = [
  {
    label: "Debit",
    value: WithdrawStatus.DEBIT,
  },
  {
    label: "Pending",
    value: WithdrawStatus.PENDING,
  },
  {
    label: "Failed",
    value: WithdrawStatus.FAILED,
  },
];

type Props = {
  selectedValues: WithdrawStatus[] | undefined;
  onChange: (selectedValues: WithdrawStatus[] | undefined) => void;
};

export const StatusFilter = ({ selectedValues, onChange }: Props) => {
  return (
    <FilterMenu
      label="Status"
      items={ITEMS}
      selectedValues={selectedValues}
      onChange={onChange}
    />
  );
};
