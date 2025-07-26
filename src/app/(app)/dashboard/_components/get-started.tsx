import {
  Avatar,
  Card,
  CardContent,
  CardFooter,
  Link,
  Text,
} from "@jamsr-ui/react";

const usersAvatar = ["/user1.png", "/user2.png", "/user3.png", " "];

export const GetStarted = () => {
  return (
    <Card className="h-full">
      <CardContent className="grow bg-[url('/bg-2-dark.png')] bg-[length:80%] [background-position:175%_25%] bg-no-repeat p-10">
        <div className="flex flex-col justify-center gap-4">
          <div className="flex -space-x-2">
            {usersAvatar.map((src, ind) => {
              return (
                <Avatar
                  className="border-divider border"
                  key={ind}
                  alt={"a"}
                  src={src}
                />
              );
            })}
          </div>
          <Text
            as="h2"
            className="text-mono text-xl font-semibold"
          >
            Connect Today & Join <br /> the{" "}
            <Link
              href="/"
              underline="never"
            >
              KeenThemes Network
            </Link>
          </Text>
          <Text
            as="p"
            className="text-secondary-foreground text-sm leading-5.5 font-normal"
          >
            Enhance your projects with premium themes and <br /> templates. Join
            the KeenThemes community today <br /> for top-quality designs and
            resources.
          </Text>
        </div>
      </CardContent>
      <CardFooter className="border-divider flex min-h-14 items-center justify-center border-t py-0">
        <Link href="/">Get Started</Link>
      </CardFooter>
    </Card>
  );
};
