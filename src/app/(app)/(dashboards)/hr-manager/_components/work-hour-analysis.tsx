import { FileChartColumn } from "lucide-react";
import { LineChart, type ChartConfig } from "@jamsr-ui/charts";
import { Button, Card, CardContent, Divider, Text } from "@jamsr-ui/react";
import { Icons } from "@/configs/icon";

export const WorkHourAnalysis = () => {
  return (
    <Card className="col-span-3">
      <CardContent>
        <div className="flex h-12 items-center gap-2 pb-4">
          <FileChartColumn className="text-foreground-secondary size-5" />
          <Text
            as="h3"
            className="flex-1 font-medium"
          >
            Work Hour Analysis
          </Text>
          <Button
            size="sm"
            variant="outlined"
            className="text-foreground-secondary"
          >
            See All
          </Button>
        </div>

        <Divider />

        <div className="space-y-5 pt-5">
          <div className="flex items-center gap-2.5">
            <div className="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-full">
              <Icons.Clock className="size-5" />
            </div>
            <div className="space-y-1">
              <p className="text-foreground-secondary text-xs font-medium uppercase">
                Total Work
              </p>
              <Text
                as="p"
                variant="body1"
                className="font-medium"
              >
                38 hours ∙ 12 mins
              </Text>
            </div>
          </div>

          <div className="space-y-4 pb-0.5">
            <div
              className="flex rounded-md"
              role="group"
            >
              {["5D", "2W", "1M", "6M", "1Y"].map((tab, index) => (
                <button
                  key={tab}
                  type="button"
                  className="text-foreground-secondary border-divider focus:text-foreground hover:bg-content2/50 focus:bg-content2/50 flex h-6 w-full cursor-pointer items-center justify-center border bg-transparent px-4 py-2 text-sm font-medium transition first:rounded-l-lg last:rounded-r-lg"
                >
                  {tab}
                </button>
              ))}
            </div>

            <WorkHourAnalysisLineChart />
          </div>

          <div className="text-foreground-secondary flex items-center gap-0.5">
            <Icons.Info className="size-3" />
            <p className="text-foreground-secondary text-xs">
              Total work hours include extra hours.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const chartData = [
  { name: "Monday", rating: 1 },
  { name: "Tuesday", rating: 3.3 },
  { name: "Wednesday", rating: 6 },
  { name: "Thursday", rating: 3.2 },
  { name: "Friday", rating: 7 },
  { name: "Saturday", rating: 2.45 },
  { name: "Sunday", rating: 5 },
];

const config: ChartConfig = {
  rating: {
    label: "Rating",
    color: "var(--ui-success)",
  },
};

const WorkHourAnalysisLineChart = () => {
  return (
    <LineChart
      width="100%"
      height={142}
      chartData={chartData}
      config={config}
      xAxis={false}
      yAxis={false}
      tooltip={false}
      lineChart={{}}
      line={{
        dot: false,
        radius: 2,
      }}
    />
  );
};
