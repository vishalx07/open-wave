import { ChevronUp } from "lucide-react";
import { useDisclosure } from "@jamsr-ui/hooks";
import {
  Avatar,
  Chip,
  Collapsible,
  CollapsibleContent,
  IconButton,
  Text,
} from "@jamsr-ui/react";
import { cn } from "@/lib/tw-merge";
import { MEETINGS_DATA, Meeting } from "./data";

export const Meetings = () => {
  return (
    <div className="space-y-2 pt-4">
      {MEETINGS_DATA.map((meeting, index) => {
        return (
          <CollapsibleCard
            key={index}
            meeting={meeting}
          />
        );
      })}
    </div>
  );
};

const CollapsibleCard = ({ meeting }: { meeting: Meeting }) => {
  const { isOpen, setIsOpen, onToggle } = useDisclosure(true);
  const { title, time, attendees, platform, department } = meeting;

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
          <div className="space-y-3.5 pt-3.5">
            <div className="bg-background flex w-max items-center rounded-full p-0.5">
              <div className="*:ring-background flex -space-x-0.5 *:ring-2">
                {attendees.map((attendee, index) => {
                  const { name, avatarUrl } = attendee;
                  return (
                    <Avatar
                      key={index}
                      size="xs"
                      alt={name}
                      src={avatarUrl}
                      width={100}
                      height={100}
                    />
                  );
                })}
              </div>
              <span className="text-foreground-secondary px-1.5 text-xs">
                +2
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-foreground-secondary text-xs">
                {platform}
              </span>
              <Chip
                size="xs"
                variant="flat"
                color={
                  department === "Marketing"
                    ? "warning"
                    : department === "Product Manager"
                      ? "success"
                      : "secondary"
                }
              >
                {department}
              </Chip>
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};
