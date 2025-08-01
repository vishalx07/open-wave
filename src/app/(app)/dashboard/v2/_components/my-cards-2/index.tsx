import { Button, Card, CardContent, CardHeader } from "@jamsr-ui/react";
import { CreditCardIcon, PlusIcon } from "lucide-react";

import { SavingLimitTabs } from "./saving-limit-tabs";
import { cardsData } from "../../_mock/card";
import { MasterCard } from "../master-card";

export const MyCards2 = () => {
  return (
    <Card>
      <CardHeader
        heading="My Cards"
        startContent={<CreditCardIcon className="text-foreground-secondary" />}
        endContent={
          <Button
            startContent={<PlusIcon size={16} />}
            color="default"
            variant="outlined"
            size="sm"
          >
            Add Card
          </Button>
        }
      />
      <CardContent className="flex flex-col gap-4">
        {cardsData[0] && <MasterCard data={cardsData[0]} />}
        <SavingLimitTabs />
      </CardContent>
    </Card>
  );
};
