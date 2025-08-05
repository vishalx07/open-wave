import { useMemo } from "react";
import { FilterMenu } from "@/components/filter-menu";
import { TransactionCategory, TransactionStatus } from "../../types";

// Constants
const STATUS_ITEMS: { label: string; value: TransactionStatus }[] = [
  { label: "Credit", value: TransactionStatus.CREDIT },
  { label: "Debit", value: TransactionStatus.DEBIT },
  { label: "Pending", value: TransactionStatus.PENDING },
  { label: "Failed", value: TransactionStatus.FAILED },
];

// Types
type Props = {
  categoryFilter: TransactionCategory[] | undefined;
  selectedValues: TransactionStatus[] | undefined;
  onChange: (selectedValues: TransactionStatus[] | undefined) => void;
};

// Helpers
const filterStatusItems = (
  categoryFilter: TransactionCategory[] | undefined,
) => {
  if (!categoryFilter) return STATUS_ITEMS;

  return STATUS_ITEMS.filter((item) => {
    switch (item.value) {
      case TransactionStatus.CREDIT:
        return (
          categoryFilter.includes(TransactionCategory.DEPOSIT) ||
          categoryFilter.includes(TransactionCategory.PEER_TRANSFER)
        );
      case TransactionStatus.DEBIT:
        return (
          categoryFilter.includes(TransactionCategory.WITHDRAW) ||
          categoryFilter.includes(TransactionCategory.PEER_TRANSFER)
        );
      default:
        return true;
    }
  });
};

const isStatusFilterDisabled = (
  categoryFilter: TransactionCategory[] | undefined,
): boolean => {
  if (!categoryFilter) return false;

  const includesOnlyNonFilterableCategories =
    (categoryFilter.includes(TransactionCategory.PLAN_PURCHASE) ||
      categoryFilter.includes(TransactionCategory.REFERRAL_INCOME) ||
      categoryFilter.includes(TransactionCategory.ROI_INCOME)) &&
    !categoryFilter.includes(TransactionCategory.PEER_TRANSFER) &&
    !categoryFilter.includes(TransactionCategory.DEPOSIT) &&
    !categoryFilter.includes(TransactionCategory.WITHDRAW);

  return includesOnlyNonFilterableCategories;
};

export const StatusFilter = ({
  selectedValues,
  onChange,
  categoryFilter,
}: Props) => {
  const items = useMemo(
    () => filterStatusItems(categoryFilter),
    [categoryFilter],
  );
  const isDisabled = useMemo(
    () => isStatusFilterDisabled(categoryFilter),
    [categoryFilter],
  );

  return (
    <FilterMenu
      label="Status"
      items={items}
      selectedValues={selectedValues}
      onChange={onChange}
      triggerProps={{ disabled: isDisabled }}
    />
  );
};
