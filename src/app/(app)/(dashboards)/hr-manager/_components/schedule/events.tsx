import { ChevronUp } from "lucide-react";
import { useDisclosure } from "@jamsr-ui/hooks";
import {
  Collapsible,
  CollapsibleContent,
  IconButton,
  Text,
} from "@jamsr-ui/react";
import { Icons } from "@/configs/icon";
import { cn } from "@/lib/tw-merge";
import { EVENTS_DATA, type Event } from "./data";

export const Events = () => {
  return (
    <div className="space-y-2 pt-4">
      {EVENTS_DATA.map((event, index) => {
        return (
          <CollapsibleCard
            key={index}
            event={event}
          />
        );
      })}
    </div>
  );
};

const CollapsibleCard = ({ event }: { event: Event }) => {
  const { isOpen, setIsOpen, onToggle } = useDisclosure(true);
  const { title, time, location, locationColor, organizer, attendeesCount } =
    event;

  return (
    <Collapsible
      isOpen={isOpen}
      onOpenChange={setIsOpen}
    >
      <div className="bg-content2/50 rounded-xl p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <Text
              as="h3"
              variant="paragraph"
              className="font-medium"
            >
              {title}
            </Text>
            <Text
              as="p"
              variant="caption"
              className="text-foreground-secondary font-medium"
            >
              {time}
            </Text>
          </div>

          <IconButton
            disableRipple
            label="Collapse Button"
            size="xs"
            radius="full"
            onClick={onToggle}
            className="text-foreground-secondary"
          >
            <ChevronUp
              className={cn("size-5 transition", !isOpen && "rotate-180")}
            />
          </IconButton>
        </div>

        <CollapsibleContent>
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-2">
              <span className="bg-background flex size-7 items-center justify-center rounded-full">
                <Icons.Location className={cn("size-5", locationColor)} />
              </span>
              <Text
                as="p"
                variant="paragraph"
                className="font-medium"
              >
                {location}
              </Text>
            </div>

            <div className="flex items-center justify-between gap-2">
              <span className="text-foreground-secondary text-xs">
                {organizer}
              </span>
              <div className="text-foreground-secondary flex items-center gap-1 text-xs">
                <Icons.User className="size-4" />
                {attendeesCount}
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};
