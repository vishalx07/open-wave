import { Card, Text } from "@jamsr-ui/react";
import { cn } from "@/lib/tw-merge";
import { mockSummaryStats } from "../_mock/summary-stats";

export const SummaryStats = () => {
  return (
    <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {mockSummaryStats.map((stat, ind) => {
        return (
          <Card
            className="p-6"
            key={ind}
          >
            <div className="flex items-center justify-between">
              <div>
                <Text
                  variant="paragraph"
                  className="text-muted-foreground"
                >
                  {stat.label}
                </Text>
                <Text className="text-2xl font-bold">${stat.value}</Text>
              </div>
              <div className="bg-content2 rounded-full p-3">
                {<stat.icon className={cn("size-6", stat.color.text)} />}
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
