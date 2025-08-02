import { Avatar, Card, CardContent, CardFooter, Link } from "@jamsr-ui/react";
import { COMPONENT_ROUTES } from "@/configs/routes/component";

const USERS = [
  "/images/user1.png",
  "/images/user2.png",
  "/images/user3.png",
  "",
];

export const GetStarted = () => {
  return (
    <Card className="h-full">
      <CardContent className="grow bg-[url('/images/bg-2-dark.png')] bg-[length:80%] [background-position:175%_25%] bg-no-repeat p-10">
        <div className="flex flex-col justify-center gap-4">
          <div className="flex -space-x-2">
            {USERS.map((src, index) => {
              return (
                <Avatar
                  className="border-divider border"
                  key={index}
                  alt={"S"}
                  src={src}
                />
              );
            })}
          </div>
          <h2 className="text-mono text-xl font-semibold">
            Connect Today & Join <br /> the{" "}
            <Link
              href={COMPONENT_ROUTES.home}
              underline="never"
            >
              KeenThemes Network
            </Link>
          </h2>
          <p className="text-secondary-foreground text-sm leading-5.5 font-normal">
            Enhance your projects with premium themes and <br /> templates. Join
            the KeenThemes community today <br /> for top-quality designs and
            resources.
          </p>
        </div>
      </CardContent>
      <CardFooter className="border-divider flex min-h-14 items-center justify-center border-t py-0">
        <Link href={COMPONENT_ROUTES.home}>Get Started</Link>
      </CardFooter>
    </Card>
  );
};
