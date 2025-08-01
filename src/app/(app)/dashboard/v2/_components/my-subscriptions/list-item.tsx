import { IconWrapper } from "../icon-wrapper";
import { type Subscription, SubscriptionStatus } from "./types";
import { Chip, Divider, IconButton, Text } from "@jamsr-ui/react";
import { MoreVerticalIcon } from "lucide-react";

type Props = {
  item: Subscription;
};

const getColorByStatus = (status: SubscriptionStatus) => {
  switch (status) {
    case SubscriptionStatus.PAID:
      return "success";
    case SubscriptionStatus.EXPIRED:
      return "default";
    case SubscriptionStatus.PAUSED:
      return "warning";
  }
};

export const ListItem = ({ item }: Props) => {
  const { name, amount, status, icon, which } = item;

  return (
    <>
      <div className="flex items-center gap-3 w-full">
        <IconWrapper icon={icon} />
        <div className="flex-1">
          <Text
            as="p"
            variant="paragraph2"
            className="text-foreground-secondary"
          >
            {name}
          </Text>
          <Text as="p" variant="paragraph2" className="font-semibold">
            ${amount}{" "}
            <span className="text-foreground-secondary font-light">
              /{which}
            </span>
          </Text>
        </div>
        <Chip color={getColorByStatus(status)} radius="full" size="sm">
          {status}
        </Chip>
        <IconButton label="more" size="sm" variant="light">
          <MoreVerticalIcon className="text-foreground-secondary" size={16} />
        </IconButton>
      </div>
      <Divider className="last:hidden" />
    </>
  );
};
