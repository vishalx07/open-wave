import { Calendar, Pencil, Zap } from "lucide-react";
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
import { CURRENT_PROJECT_DATA } from "./data";

const {
  name,
  icon,
  status,
  projectManager,
  designLead,
  teamAvatars,
  timeline,
  description,
} = CURRENT_PROJECT_DATA;

export const CurrentProject = () => {
  return (
    <Card>
      <CardContent>
        <div className="flex h-12 items-center gap-2 pb-4">
          <Zap className="text-foreground-secondary size-5" />
          <Text
            as="h3"
            className="flex-1 font-medium"
          >
            Current Project
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

        <div className="space-y-3.5 pt-4 pb-1.5">
          <div className="space-y-1.5">
            <Text
              as="p"
              variant="caption"
              className="text-foreground-secondary"
            >
              Project Name
            </Text>
            <div className="flex items-center gap-2">
              <span className="[&>svg]:size-6">{icon}</span>
              <Text
                as="p"
                variant="paragraph2"
                className="flex-1"
              >
                {name}
              </Text>
              <Chip
                size="xs"
                color="warning"
                variant="flat"
                startContent={<Icons.Clock className="size-4" />}
              >
                {status}
              </Chip>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1 space-y-1.5">
              <Text
                as="p"
                variant="caption"
                className="text-foreground-secondary"
              >
                Project Manager
              </Text>
              <div className="flex items-center gap-2">
                <Avatar
                  src={projectManager.avatar}
                  alt={projectManager.name}
                  size="xs"
                  width={100}
                  height={100}
                />
                <Text
                  as="p"
                  variant="paragraph2"
                >
                  {projectManager.name}
                </Text>
              </div>
            </div>

            <div className="flex-1 space-y-1.5">
              <Text
                as="p"
                variant="caption"
                className="text-foreground-secondary"
              >
                Design Lead
              </Text>
              <div className="flex items-center gap-2">
                <Avatar
                  src={designLead.avatar}
                  alt={designLead.name}
                  size="xs"
                  width={100}
                  height={100}
                />
                <Text
                  as="p"
                  variant="paragraph2"
                >
                  {designLead.name}
                </Text>
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <Text
              as="p"
              variant="caption"
              className="text-foreground-secondary"
            >
              Team
            </Text>
            <div className="flex w-max items-center rounded-full p-0.5">
              <div className="*:ring-background flex -space-x-0.5 *:ring-2">
                {teamAvatars.map((avatar, index) => (
                  <Avatar
                    key={index}
                    src={avatar}
                    size="xs"
                    alt="avatar"
                    width={100}
                    height={100}
                  />
                ))}
              </div>
              <span className="text-foreground-secondary px-1.5 text-xs">
                +8 people
              </span>
            </div>
          </div>

          <div className="space-y-1.5">
            <Text
              as="p"
              variant="caption"
              className="text-foreground-secondary"
            >
              Timeline
            </Text>
            <div className="flex items-center gap-2">
              <Calendar className="text-foreground-secondary size-5" />
              <Text
                as="p"
                variant="paragraph2"
              >
                {timeline}
              </Text>
            </div>
          </div>

          <div className="space-y-1.5">
            <Text
              as="p"
              variant="caption"
              className="text-foreground-secondary"
            >
              Description
            </Text>
            <div className="flex items-center gap-2">
              <Pencil className="text-foreground-secondary size-5" />
              <Text
                as="p"
                variant="paragraph2"
                className="line-clamp-1"
              >
                {description}
              </Text>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
