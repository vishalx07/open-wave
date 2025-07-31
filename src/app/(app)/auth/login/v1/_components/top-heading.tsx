import { Text } from "@jamsr-ui/react";
import { cn } from "@/lib/tw-merge";
import { IconWrapper } from "./icon-wrapper";

type Props = {
  icon: React.ReactNode;
  heading: string;
  subHeading?: string;
  className?: string;
};

export const TopHeading = ({ icon, heading, subHeading, className }: Props) => {
  return (
    <div className={cn("flex w-full flex-col items-center gap-2", className)}>
      <div className="relative flex size-24 items-center justify-center rounded-full backdrop-blur-xl before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-neutral-500 before:to-transparent before:opacity-10">
        <IconWrapper
          icon={icon}
          className="z-10 size-16"
        />
      </div>
      <Text
        as="h1"
        variant="h3"
        className="font-semibold"
      >
        {heading}
      </Text>
      <Text
        as="p"
        className="text-foreground-secondary"
      >
        {subHeading}
      </Text>
    </div>
  );
};
