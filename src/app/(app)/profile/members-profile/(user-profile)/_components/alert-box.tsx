import { OctagonAlert } from "lucide-react";
import RoundedHexagon from "~/svg/rounded-hexagon.svg";
import { Button, Chip, Text } from "@jamsr-ui/react";

export const AlertBox = () => {
  return (
    <div className="border-divider black/5 mb-5 flex flex-col items-stretch rounded-xl border lg:mb-7.5">
      <div
        style={{ backgroundImage: "url(/images/bg-5-dark.png)" }}
        className="flex grow flex-wrap items-center justify-between gap-2 bg-[length:660px_310px] [background-position:121%_41%] bg-no-repeat p-5 sm:flex-wrap rtl:[background-position:-30%_41%]"
      >
        <div className="flex items-center gap-4">
          <div className="relative size-[50px] shrink-0">
            <RoundedHexagon className="h-full w-full fill-orange-50 stroke-orange-200 dark:fill-orange-950/30 dark:stroke-orange-950" />
            <OctagonAlert
              size={20}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-orange-400"
            />
          </div>
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2.5">
              <Text variant="body1">Upgrade your business info</Text>
              <Chip
                size="sm"
                radius="md"
                variant="flat"
                className="text-foreground-secondary"
              >
                16 days left
              </Chip>
            </div>
            <Text variant="paragraph2">
              Elevate business information for a standout profile. Utilize
              premium features, ensuring success with enhanced details.
              <br />
              Upgrade now for heightened visibility and broader impact.
            </Text>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <Button color="primary">Start</Button>
          <Button variant="light">Skip</Button>
        </div>
      </div>
    </div>
  );
};
