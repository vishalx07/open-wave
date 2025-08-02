import {
  AlarmClock,
  ChevronDown,
  EllipsisVertical,
  History,
} from "lucide-react";
import { Button, Card, CardContent, IconButton, Text } from "@jamsr-ui/react";
import { Icons, Logos } from "@/configs/icon";
import { TIME_TRACKER_PREV_TASKS } from "./data";

export const TimeTracker = () => {
  return (
    <Card>
      <CardContent>
        <div className="flex h-12 items-center gap-2 pb-4">
          <AlarmClock className="text-foreground-secondary size-5" />
          <Text
            as="h3"
            className="flex-1 font-medium"
          >
            Time Tracker
          </Text>
          <Button
            size="sm"
            variant="outlined"
            startContent={<History className="size-5" />}
            className="text-foreground-secondary"
          >
            History
          </Button>
        </div>

        <div className="space-y-4 pb-0.5">
          <div className="border-divider flex max-h-[158.8px] flex-col overflow-hidden rounded-lg border-1">
            <div className="bg-content2/50 border-divider flex h-8 items-center gap-2 border-b pr-2.5 pl-3">
              <Logos.Monday className="size-4" />
              <p className="text-foreground-secondary flex-1 text-xs">
                Monday.com Redesign
              </p>
              <ChevronDown className="text-foreground-secondary size-5" />
            </div>
            <div className="flex flex-col p-4">
              <p className="text-foreground-secondary mb-1 text-center text-xs uppercase">
                Awating
              </p>
              <div className="flex flex-col items-center">
                <Text
                  as="p"
                  variant="body7"
                  className="font-medium"
                >
                  00:00:<span className="text-foreground-secondary">00</span>
                </Text>
                <div className="text-primary group mt-2.5 flex cursor-pointer items-center justify-center gap-1">
                  <Icons.Play className="size-5" />
                  <Text
                    as="p"
                    variant="paragraph2"
                    className="font-medium underline-offset-3 group-hover:underline"
                  >
                    Start Time Tracker
                  </Text>
                </div>
              </div>
            </div>
          </div>

          <Text
            as="p"
            variant="caption"
            className="text-foreground-secondary max-h-3 uppercase"
          >
            Previous Tasks
          </Text>

          {TIME_TRACKER_PREV_TASKS.map((task, index) => {
            const { title, time, icon } = task;
            return (
              <div
                key={index}
                className="flex w-full items-center gap-2.5"
              >
                <span className="ring-divider flex size-10 items-center justify-center rounded-full ring-1 ring-inset [&>svg]:size-6">
                  {icon}
                </span>
                <div className="flex-1 space-y-1">
                  <Text
                    as="p"
                    variant="paragraph2"
                  >
                    {title}
                  </Text>
                  <Text
                    as="p"
                    variant="caption"
                    className="text-foreground-secondary"
                  >
                    {time}
                  </Text>
                </div>
                <IconButton
                  label="More Options"
                  size="sm"
                  variant="light"
                >
                  <EllipsisVertical className="size-5" />
                </IconButton>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
