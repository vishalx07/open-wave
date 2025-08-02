import AvatarWrapper from "~/svg/avatar-wrapper.svg";
import { Button, Card, CardContent, Divider, Text } from "@jamsr-ui/react";
import { Icons } from "@/configs/icon";

export const EmployeeSpotlight = () => {
  return (
    <Card>
      <CardContent>
        <div className="flex h-12 items-center gap-2 pb-4">
          <Icons.Star className="text-foreground-secondary size-5" />
          <Text
            as="h3"
            className="flex-1 font-medium"
          >
            Daily Work Hours
          </Text>
          <Button
            size="sm"
            variant="outlined"
            startContent={<Icons.ShareOutlined className="size-5" />}
            className="text-foreground-secondary"
          >
            Share
          </Button>
        </div>

        <Divider />

        <div className="space-y-4 pt-4">
          <div className="space-y-1 text-center">
            <Text
              as="p"
              variant="body1"
              className="font-medium"
            >
              Matthew Johnson
            </Text>
            <span className="text-foreground-secondary text-xs">
              Software Engineer
            </span>
          </div>

          <div className="relative mx-auto h-[185px] w-full max-w-80">
            <AvatarWrapper className="absolute top-0 left-0 size-full" />
            <div className="absolute top-1/2 left-1/2 size-[72px] -translate-x-1/2 -translate-y-1/2">
              <img
                src={"/images/avatars/arthur.png"}
                className="size-full rounded-full object-cover"
              />
            </div>
          </div>

          <p className="text-foreground-secondary text-center text-xs">
            Top-performing employee of January!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
