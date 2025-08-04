import { ChevronDownIcon } from "lucide-react";
import { Card, CardContent, Text } from "@jamsr-ui/react";
import { Dashboard2Icons } from "../../icons";

export const EnterAmount = () => {
  return (
    <Card>
      <div className="border-divider bg-content2 flex h-8 items-center justify-between border-b pr-2.5 pl-3">
        <div className="flex items-center gap-2">
          <Dashboard2Icons.MasterCardIcon />
          <Text
            as="p"
            variant="body1"
            className="text-foreground-secondary"
          >
            My Physical Card
          </Text>
        </div>
        <ChevronDownIcon
          size={16}
          className="text-foreground-secondary"
        />
      </div>
      <CardContent className="flex flex-col items-center gap-3.5 p-2">
        <div>
          <Text
            as="p"
            variant="paragraph2"
            className="text-foreground-secondary pt-1.5 text-center"
          >
            ENTER AMOUNT
          </Text>
          <div className="flex justify-center">
            <Text
              as="h1"
              variant="h1"
              className="font-semibold"
            >
              $0.00
            </Text>
          </div>
        </div>
        <div className="bg-content2 flex h-7 w-full items-center justify-center rounded-md">
          <Text
            as="p"
            variant="paragraph2"
            className="text-foreground-secondary"
          >
            Available: <span className="text-foreground">$16,058.94</span>
          </Text>
        </div>
      </CardContent>
    </Card>
  );
};
