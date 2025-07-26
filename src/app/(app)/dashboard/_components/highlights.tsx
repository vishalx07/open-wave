import {
  ArrowDownIcon,
  ArrowUpIcon,
  FacebookIcon,
  InstagramIcon,
  StoreIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, Chip, Divider } from "@jamsr-ui/react";
import { formatMoney } from "@/utils/format-money";

const sellsData = {
  totalSells: 295700,
  sellsGrowth: 2.7,
  platformSells: [
    {
      name: "Online Store",
      icon: StoreIcon,
      sells: 172000,
      growth: 3.9,
    },
    {
      name: "Facebook",
      icon: FacebookIcon,
      sells: 85000,
      growth: 0.7,
    },
    {
      name: "Instagram",
      icon: InstagramIcon,
      sells: 36000,
      growth: 8.2,
    },
  ],
};

export const HighLights = () => {
  return (
    <Card className="h-full">
      <CardHeader
        heading="Highlights"
        className="border-divider border-b py-4"
      />
      <CardContent className="flex grow flex-col gap-4 p-5 lg:p-7.5 lg:pt-4">
        <div className="flex flex-col gap-0.5">
          <span className="text-secondary-foreground text-sm font-semibold">
            All time sales
          </span>
          <div className="flex items-center gap-2.5">
            <span className="text-mono text-3xl font-semibold">
              ${formatMoney(sellsData.totalSells)}
            </span>
            <Chip
              size="sm"
              color="success"
            >
              +{sellsData.sellsGrowth}%
            </Chip>
          </div>
        </div>
        <div className="mb-1.5 flex items-center gap-1">
          <div className="h-2 w-full max-w-[60%] rounded-xs bg-green-500"></div>
          <div className="h-2 w-full max-w-[25%] rounded-xs bg-red-500"></div>
          <div className="h-2 w-full max-w-[15%] rounded-xs bg-violet-500"></div>
        </div>
        <div className="mb-1 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-green-500 opacity-75" />
            <span className="text-sm font-normal">Metronic</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-red-500 opacity-75" />
            <span className="text-sm font-normal">Bundle</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-violet-500 opacity-75" />
            <span className="text-sm font-normal">MetronicNest</span>
          </div>
        </div>

        <Divider />
        <div className="grid gap-3">
          {sellsData.platformSells.map((item, ind) => {
            const Icon = item.icon;
            return (
              <div
                key={ind}
                className="flex flex-wrap items-center justify-between gap-2"
              >
                <div className="flex items-center gap-1.5">
                  <Icon
                    size={16}
                    className="text-foreground-secondary"
                  />
                  <span className="text-mono text-sm font-normal">
                    {item.name}
                  </span>
                </div>
                <div className="flex items-center gap-6 text-sm font-medium">
                  <span className="lg:text-right">
                    ${formatMoney(item.sells)}
                  </span>
                  <span className="flex items-center justify-end gap-1">
                    {item.growth > 1 ? (
                      <ArrowUpIcon
                        size={16}
                        className="text-success"
                      />
                    ) : (
                      <ArrowDownIcon
                        size={16}
                        className="text-danger"
                      />
                    )}{" "}
                    {item.growth}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
