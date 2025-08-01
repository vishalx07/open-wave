import { Card, CardContent, Divider, Text } from "@jamsr-ui/react";
import { SelectCountry } from "../select-country";
import { ArrowLeftRightIcon } from "lucide-react";

export const ExchangeMoney = () => {
  return (
    <Card>
      <div className="flex justify-between items-center">
        <SelectCountry />
        <ArrowLeftRightIcon size={16} className="text-foreground-secondary" />
        <SelectCountry defaultValue={["EUR"]} />
      </div>
      <Divider />
      <CardContent>
        <div className="text-center">
          <Text as="h1" variant="h1" className="font-semibold">
            $100.00
          </Text>
          <Text as="p" className="text-foreground-secondary">
            Available :<span>$16,058.94 </span>
          </Text>
        </div>
      </CardContent>
      <Divider />
      <div className="bg-content2">
        <Text
          as="p"
          variant="paragraph2"
          className="text-center text-foreground-secondary"
        >
          USD 1.00 = <span>USD 1.00</span>
        </Text>
      </div>
    </Card>
  );
};
