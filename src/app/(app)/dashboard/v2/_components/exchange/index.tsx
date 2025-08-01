"use client";
import { Button, Card, CardContent, CardHeader } from "@jamsr-ui/react";
import { RefreshCcwIcon } from "lucide-react";
import { ExchangeMoney } from "./exhange-money";
import { ExchangeSummary } from "./exchange-summary";

export const Exchange = () => {
  return (
    <Card>
      <CardHeader
        heading="Exchange"
        startContent={<RefreshCcwIcon className="text-foreground-secondary" />}
        endContent={
          <Button variant="outlined" color="default">
            Currencies
          </Button>
        }
      />
      <CardContent className="flex flex-col gap-3">
        <ExchangeMoney />
        <ExchangeSummary />
        <Button
          variant="outlined"
          color="default"
          startContent={<RefreshCcwIcon size={16} />}
        >
          Exhange
        </Button>
      </CardContent>
    </Card>
  );
};
