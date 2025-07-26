import { Avatar } from "@jamsr-ui/next";
import { Card, CardContent, Text } from "@jamsr-ui/react";
import { formatMoney } from "@/utils/format-money";

type SocialData = {
  title: string;
  value: number;
  icon: string;
};

const data: SocialData[] = [
  {
    title: "Amazing mates",
    value: 9300,
    icon: "/svg/linkedin.svg",
  },
  {
    title: "Lessons Views",
    value: 24000,
    icon: "/svg/youtube.svg",
  },
  {
    title: "New subscribers",
    value: 608,
    icon: "/svg/instagram.svg",
  },
  {
    title: "Stream audience",
    value: 2500,
    icon: "/svg/tiktok.svg",
  },
];

export const SocialMetrics = () => {
  return (
    <div className="grid h-full grid-cols-2 items-stretch gap-5 lg:gap-7.5">
      {data.map((item, ind) => {
        const { title, value, icon } = item;
        return (
          <Card
            key={ind}
            className="black/5 flex flex-col items-stretch shadow-xs"
          >
            <CardContent className="flex h-full flex-col justify-between gap-6 bg-[url('/bg-3-dark.png')] bg-cover bg-[right_top_-1.7rem] bg-no-repeat p-0">
              <Avatar
                alt=""
                size="sm"
                src={icon}
                width={25}
                height={25}
                radius="md"
                className="ms-5 mt-4 bg-transparent"
              />
              <div className="flex flex-col gap-1 px-5 pb-4">
                <Text className="text-3xl font-semibold">
                  {formatMoney(value)}
                </Text>
                <Text className="text-sm font-normal">{title}</Text>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
