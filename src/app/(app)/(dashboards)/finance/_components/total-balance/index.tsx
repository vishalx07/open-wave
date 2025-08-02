import { Card, CardContent, CardHeader, Chip, Text } from "@jamsr-ui/react";
import { Dashboard2Icons } from "../../icons";
import { SelectCountry } from "../select-country";

export const TotalBalance = () => {
  return (
    <Card className="h-[184px]">
      <CardHeader
        startContent={
          <div className="mt-auto">
            <Text
              as="p"
              variant="body1"
              className="text-foreground-secondary"
            >
              Total Balance
            </Text>
            <div className="flex items-center gap-2">
              <Text
                as="h1"
                variant="h2"
                className="font-semibold"
              >
                $14,480.24
              </Text>
              <Chip
                color="success"
                variant="flat"
                radius="full"
              >
                +5%
              </Chip>
            </div>
          </div>
        }
        endContent={<SelectCountry />}
      />
      <CardContent>
        <Dashboard2Icons.BalanceGraph />
      </CardContent>
    </Card>
  );
};
