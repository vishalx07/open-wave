import { Metadata } from "next";
import Link from "next/link";
import { ArrowDownLeftIcon, ArrowUpRightIcon, PlusIcon } from "lucide-react";
import { Button, Card, Text } from "@jamsr-ui/react";
import { APP_ROUTES } from "@/configs/routes";
import { NavigationTabs } from "./_components/navigation-tabs";
import { SummaryStats } from "./_components/summary-stats";

export const metadata: Metadata = {
  title: "Wallet",
};

export default function page() {
  return (
    <div className="my-8">
      <div className="mb-8 flex items-center gap-4 max-sm:flex-col sm:justify-between">
        <div>
          <Text
            as="h1"
            variant="h2"
          >
            45,128 USD
          </Text>
          <Text
            className="text-foreground-secondary"
            variant="paragraph"
          >
            Total balance
          </Text>
        </div>
        <div className="flex items-center gap-2">
          <Button
            color="primary"
            startContent={<ArrowUpRightIcon size={16} />}
            as={Link}
            href={APP_ROUTES.wallet.transfer}
          >
            Transfer
          </Button>
          <Button
            variant="outlined"
            startContent={<PlusIcon size={16} />}
            as={Link}
            href={APP_ROUTES.wallet.deposit}
          >
            Add Money
          </Button>
          <Button
            variant="outlined"
            startContent={<ArrowDownLeftIcon size={16} />}
            as={Link}
            href={APP_ROUTES.wallet.withdraw}
          >
            withdraw
          </Button>
        </div>
      </div>
      {/* Stats Cards */}
      <SummaryStats />
      {/* table */}
      <Card className="bg-content2 px-0">
        <NavigationTabs />
      </Card>
    </div>
  );
}
