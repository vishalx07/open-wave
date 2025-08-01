import { ArrowDownLeftIcon } from "lucide-react";
import { Card, CardContent, CardHeader, Chip, Text } from "@jamsr-ui/react";
import { Dashboard2Icons } from "../../icons";

export const TotalExpenses = () => {
  return (
    <Card className="h-[184px]">
      <CardHeader
        startContent={
          <div className="text-foreground-secondary border-divider flex size-10 items-center justify-center rounded-full border">
            <ArrowDownLeftIcon />
          </div>
        }
      />

      <div className="absolute top-8 right-6 h-10 w-[120px] text-blue-600">
        <Dashboard2Icons.ExpenseGraph />
      </div>

      <CardContent className="flex flex-col">
        <div className="mt-auto">
          <Text
            as="p"
            variant="body1"
            className="text-foreground-secondary"
          >
            Total Expenses
          </Text>
          <div className="mt-1 flex items-center gap-2">
            <Text
              as="h1"
              variant="h1"
              className="font-semibold"
            >
              $6,240.28
            </Text>
            <Chip
              color="danger"
              variant="flat"
              radius="full"
            >
              -2%
            </Chip>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
