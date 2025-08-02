import { LaptopMinimal } from "lucide-react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Text,
} from "@jamsr-ui/react";
import { Icons } from "@/configs/icon";
import { STATUS_TRACKER_DATA } from "./data";

const ABSENT_STATUS = STATUS_TRACKER_DATA.filter(
  (item) => item.status === "Absent",
);

const AWAY_STATUS = STATUS_TRACKER_DATA.filter(
  (item) => item.status === "Away",
);

export const StatusTracker = () => {
  return (
    <Card>
      <CardContent>
        <div className="flex h-12 items-center gap-2 pb-4">
          <LaptopMinimal className="text-foreground-secondary size-5" />
          <Text
            as="h3"
            className="flex-1 font-medium"
          >
            Status Tracker
          </Text>
          <Button
            size="sm"
            variant="outlined"
            className="text-foreground-secondary"
          >
            See All
          </Button>
        </div>

        <Divider />

        <div className="space-y-4 pt-4 pb-1">
          <div className="space-y-2.5">
            <Text
              as="p"
              variant="caption"
              className="text-foreground-secondary"
            >
              Absent
            </Text>
            <div className="space-y-4">
              {ABSENT_STATUS.map((item, index) => {
                const { name, avatar, status, replacedBy } = item;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3.5"
                  >
                    <Avatar
                      src={avatar}
                      alt={name}
                      width={100}
                      height={100}
                    />
                    <div className="flex-1 grow space-y-1">
                      <Text
                        as="h3"
                        variant="paragraph2"
                        className="font-medium"
                      >
                        {name}
                      </Text>
                      <Text
                        as="p"
                        variant="caption"
                        className="text-foreground-secondary"
                      >
                        {replacedBy}
                      </Text>
                    </div>
                    <Chip
                      size="sm"
                      variant="flat"
                      startContent={<Icons.Minus className="size-4" />}
                      className="text-foreground-tertiary"
                    >
                      {status}
                    </Chip>
                  </div>
                );
              })}
            </div>
          </div>

          <Divider />

          <div className="space-y-2.5">
            <Text
              as="p"
              variant="caption"
              className="text-foreground-secondary"
            >
              Away
            </Text>
            <div className="space-y-4">
              {AWAY_STATUS.map((item) => {
                const { name, avatar, role, time } = item;
                return (
                  <div
                    key={name}
                    className="flex items-center gap-3.5"
                  >
                    <Avatar
                      src={avatar}
                      alt={name}
                      width={100}
                      height={100}
                    />
                    <div className="flex-1 grow space-y-1">
                      <Text
                        as="h3"
                        variant="paragraph"
                        className="font-medium"
                      >
                        {name}
                      </Text>
                      <Text
                        as="p"
                        variant="caption"
                        className="text-foreground-secondary"
                      >
                        {role}
                      </Text>
                    </div>
                    <Chip
                      size="xs"
                      variant="flat"
                      color="warning"
                      startContent={<Icons.Minus className="size-4" />}
                    >
                      {time}
                    </Chip>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
