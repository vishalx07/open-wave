import { Button, Card, CardContent, CardHeader } from "@jamsr-ui/react";
import { CreditCardIcon, PlusIcon } from "lucide-react";
import { NavigationTab } from "./navigation-tab";

export const MyCards = () => {
  return (
    <Card className="w-full">
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
      <CardContent>
        <NavigationTab />
      </CardContent>
    </Card>
  );
};
