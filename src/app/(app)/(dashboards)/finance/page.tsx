import { MyCards } from "./_components/cards/my-cards";
import { Exchange } from "./_components/exchange";
import { MyCards2 } from "./_components/my-cards-2";
import { MySubscriptions } from "./_components/my-subscriptions";
import { BudgetOverview } from "./_components/overview/budget-overview";
import { QuickTransfer } from "./_components/quick-transfer";
import { RecentTransactions } from "./_components/recent-transactions";
import { SpendingSummary } from "./_components/spending-summary";
import { TotalBalance } from "./_components/total-balance";
import { TotalExpenses } from "./_components/total-expenses";
import { TransactionSection } from "./_components/transactions-section";
 

export default function Page() {
  return (
    <div className="grid grid-cols-3 gap-6 items-start justify-start">
      {/* My Cards */}
      <div className="col-span-1 row-span-2">
        <MyCards />
      </div>

      {/* Budget Overview */}
      <div className="col-span-2">
        <BudgetOverview />
      </div>

      {/* Spending Summary */}

      <SpendingSummary />

      {/* Exchange Summary */}

      <Exchange />

      {/* My Cards 2 */}

      <MyCards2 />

      {/* Total Expenses */}
      <div className="grid gap-6">
        <TotalExpenses />
        <TotalBalance />
      </div>
      <QuickTransfer />
      <RecentTransactions />
      <MySubscriptions />
      <div className="col-span-3">
        <TransactionSection />
      </div>
    </div>
  );
}
