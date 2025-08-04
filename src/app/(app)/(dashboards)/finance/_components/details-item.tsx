import { Divider, Text } from "@jamsr-ui/react";
import { cn } from "@/lib/tw-merge";
import { IconWrapper } from "./icon-wrapper";

type Props = {
  icon: React.ReactNode;
  label: string;
  value: string;
  action?: React.ReactNode;
  showDivider?: boolean;
  className?: string;
};

export const DetailsItem = ({
  icon,
  label,
  value,
  action,
  showDivider,
  className,
}: Props) => {
  return (
    <>
      <div className={cn("flex items-center gap-3 p-4", className)}>
        <IconWrapper icon={icon} />
        <div className="flex-1">
          <Text as="p" variant="paragraph2" className="font-semibold">
            {label}
          </Text>
          <Text
            as="p"
            variant="paragraph2"
            className="text-foreground-secondary"
          >
            {value}
          </Text>
        </div>
        {action}
      </div>
      {showDivider && <Divider className="last:hidden" />}
    </>
  );
};
