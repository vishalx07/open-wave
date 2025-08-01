import { transactionsData } from "../../_mock/transactions";
import { TransactionsTable } from "../transactions-table/table";
import { FilterSection } from "./filter-section";

export const TransactionSection = () => {
  return (
    <div className="mb-6 flex flex-col gap-6">
      <FilterSection />
      <TransactionsTable data={transactionsData} />
    </div>
  );
};
