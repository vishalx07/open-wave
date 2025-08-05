"use client";

import { ChartNoAxesCombined } from "lucide-react";
import { BarChart, type ChartConfig } from "@jamsr-ui/charts";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Divider,
  Text,
} from "@jamsr-ui/react";

const ATTENDED_USERS = [
  { name: "James Brown", avatarUrl: "/images/avatars/james.png" },
  { name: "Sophia Williams", avatarUrl: "/images/avatars/sophia.png" },
  { name: "Arthur Taylor", avatarUrl: "/images/avatars/arthur.png" },
];

export const TrainingAnalysis = () => {
  return (
    <Card>
      <CardContent>
        <div className="flex h-12 items-center gap-2 pb-4">
          <ChartNoAxesCombined className="text-foreground-secondary size-5" />
          <Text
            as="h3"
            className="flex-1 font-medium"
          >
            Training Analysis
          </Text>
          <Button
            size="sm"
            variant="outlined"
            className="text-foreground-secondary"
          >
            Details
          </Button>
        </div>

        <Divider />

        <div className="flex gap-1 pt-4">
          <div className="flex-1">
            <Text
              as="p"
              variant="body1"
              className="font-medium"
            >
              12 courses
            </Text>
            <Text
              as="p"
              variant="caption"
              className="text-foreground-secondary"
            >
              Completed in this quarter
            </Text>
            <div className="mt-[18px] flex items-center gap-2">
              <div className="*:ring-divider flex -space-x-1 *:ring-2">
                {ATTENDED_USERS.map((user, index) => {
                  const { name, avatarUrl } = user;
                  return (
                    <Avatar
                      key={index}
                      src={avatarUrl}
                      alt={name}
                      width={100}
                      height={100}
                      size="xs"
                    />
                  );
                })}
              </div>
              <span className="text-foreground-secondary text-xs">
                26 Attended
              </span>
            </div>
          </div>

          <div className="w-[132px]">
            <TrainingAnalysisBarChart />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const chartData = [
  { name: "W1", value: 6 },
  { name: "W2", value: 4 },
  { name: "W3", value: 7 },
  { name: "W4", value: 5 },
  { name: "W5", value: 8 },
  { name: "W6", value: 10 },
  { name: "W7", value: 5 },
];

const config: ChartConfig = {
  value: {
    color: "var(--ui-primary)",
    label: "Course Sales",
  },
};

const TrainingAnalysisBarChart = () => {
  return (
    <BarChart
      height={82}
      width="100%"
      chartData={chartData}
      config={config}
      // barChart={{
      //   barCategoryGap: "20%",
      //   barGap: 8,
      // }}
      xAxis={false}
      yAxis={false}
      tooltip={false}
      cartesianGrid={false}
      bar={{
        // width: 12,
        radius: 2,
      }}
    />
  );
};
