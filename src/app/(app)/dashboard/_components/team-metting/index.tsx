import {
  Avatar,
  Card,
  CardContent,
  CardFooter,
  Link,
  Text,
} from "@jamsr-ui/react";

const usersAvatar = ["/user1.png", "/user2.png", "/user3.png", " "];

export const TeamMetting = () => {
  return (
    <Card className="h-full">
      <CardContent className="grow p-5 lg:p-7.5 lg:pt-6">
        <div className="mb-7.5 flex flex-wrap items-center justify-between gap-5">
          <div className="flex flex-col gap-1">
            <span className="text-mono text-xl font-semibold">
              Team Meeting
            </span>
            <span className="text-foreground text-sm font-semibold">
              09:00 - 09:30
            </span>
          </div>
          <Avatar
            size="sm"
            src={"/svg/zoom.svg"}
            alt=""
          />
        </div>

        <Text className="mb-8 text-sm leading-5.5 font-normal">
          Team meeting to discuss strategies, outline
          <br />
          project milestones, define key goals, and
          <br />
          establish clear timelines.
        </Text>

        <div className="bg-content2 flex gap-10 rounded-lg p-5">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-1.5 text-sm font-normal">
              Location
            </div>
            <div className="pt-1.5 text-sm font-medium">Amsterdam</div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-1.5 text-sm font-normal">
              Team
            </div>
            <div className="flex -space-x-2">
              {usersAvatar.map((src, ind) => {
                return (
                  <Avatar
                    className="border-divider border"
                    key={ind}
                    alt={"a"}
                    src={src}
                    size="sm"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-divider flex min-h-14 items-center justify-center border-t py-0">
        <Link href="/">Join Metting</Link>
      </CardFooter>
    </Card>
  );
};
