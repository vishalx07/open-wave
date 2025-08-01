import Image from "next/image";
import { ListIcon } from "lucide-react";
import { Avatar, Link } from "@jamsr-ui/next";
import { Button, Card, CardContent, CardHeader, Text } from "@jamsr-ui/react";
import { Dashboard2Icons } from "../../icons";
import { ListItem } from "./list-item";
import { SubscriptionStatus, type Subscription } from "./types";

const subscriptions: Subscription[] = [
  {
    name: "Salary Deposit",
    amount: 7.99,
    status: SubscriptionStatus.PAID,
    icon: <Dashboard2Icons.SpotifyIcon />,
    which: "month",
  },
  {
    name: "Youtube Music",
    amount: 79.99,
    status: SubscriptionStatus.EXPIRED,
    icon: <Dashboard2Icons.YoutubeMusicIcon />,
    which: "year",
  },
  {
    name: "Amazon Prime",
    amount: 79.99,
    status: SubscriptionStatus.PAUSED,
    icon: <Dashboard2Icons.AmazonPrimeIcon />,
    which: "month",
  },
];

export const MySubscriptions = () => {
  return (
    <Card className="h-full">
      <CardHeader
        heading="My Subscriptions"
        startContent={<ListIcon className="text-foreground-secondary" />}
        endContent={<Button variant="outlined">See All</Button>}
      />
      <CardContent className="flex flex-col">
        <div className="bg-content2 relative h-[124px] overflow-hidden rounded-xl p-4">
          <Image
            width={164}
            height={164}
            src={"/icons/dashboard2/apple-music.svg"}
            alt={""}
            className="pointer-events-none absolute top-0 right-0 translate-x-[76px] -translate-y-[70px]"
          />
          <div className="flex flex-col gap-4">
            <Avatar
              width={100}
              height={100}
              src={"/icons/dashboard2/apple-music.svg"}
              alt={""}
            />
            <div>
              <Text
                as="p"
                variant="body1"
                className="font-semibold"
              >
                50% discount on Apple Music{" "}
              </Text>
              <Text
                as="p"
                variant="paragraph2"
                className="text-foreground-secondary"
              >
                For only $4.99 per month! <Link href={"#"}>Learn more</Link>
              </Text>
            </div>
          </div>
        </div>
        <div className="mt-auto flex flex-col gap-2">
          {subscriptions.map((sub, ind) => {
            return (
              <ListItem
                item={sub}
                key={ind}
              />
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
