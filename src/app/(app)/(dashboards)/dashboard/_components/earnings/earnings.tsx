import { Card, CardContent, CardHeader } from "@jamsr-ui/react";
import { EarningsChart } from "./chart";

export const Earnings = () => {
  return (
    <Card className="h-full">
      <CardHeader heading="Earnings" className="py-4 border-b border-divider" />
      <CardContent className="p-5 flex flex-col items-stretch grow px-3 py-1">
        <div className="mt-4">
          <EarningsChart />
        </div>
      </CardContent>
    </Card>
  );
};
