import { Avatar } from "@jamsr-ui/next";
import { Card, CardContent } from "@jamsr-ui/react";
import { formatMoney } from "@/utils/format-money";
import { DATA } from "./data";

export const SocialMetrics = () => {
  return (
    <div className="grid h-full grid-cols-2 items-stretch gap-5 lg:gap-7.5">
      {DATA.map((item, index) => {
        const { title, value, icon } = item;
        return (
          <Card
            key={index}
            className="black/5 flex flex-col items-stretch shadow-xs"
          >
            <CardContent className="flex h-full flex-col justify-between gap-6 bg-[url('/images/bg-3-dark.png')] bg-cover bg-[right_top_-1.7rem] bg-no-repeat p-0">
              <Avatar
                alt=""
                src={icon}
                size="sm"
                radius="md"
                width={25}
                height={25}
                className="ms-5 mt-4 bg-transparent"
              />
              <div className="flex flex-col gap-1 px-5 pb-4">
                <p className="text-3xl font-semibold">{formatMoney(value)}</p>
                <p className="text-sm">{title}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
