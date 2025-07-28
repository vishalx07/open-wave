import { EllipsisVertical, EyeOff, Share2 } from "lucide-react";
import {
  Avatar,
  Card,
  CardContent,
  IconButton,
  Menu,
  MenuItem,
  Text,
} from "@jamsr-ui/react";
import { STATUS_DATA } from "./data";

export const StatusGrid = () => {
  return (
    <div className="mb-5 grid grid-cols-2 gap-5 lg:grid-cols-4">
      {STATUS_DATA.map((item) => {
        const { title, value, icon, users } = item;
        return (
          <Card key={title}>
            <CardContent>
              <div className="mb-3 flex items-start justify-between gap-3">
                <div className="bg-content2 inline-flex size-10 items-center justify-center rounded-lg">
                  {icon}
                </div>
                <Menu
                  trigger={
                    <IconButton
                      size="sm"
                      variant="light"
                      label="More Actions"
                    >
                      <EllipsisVertical className="size-4" />
                    </IconButton>
                  }
                >
                  <MenuItem startContent={<Share2 className="size-4" />}>
                    Share status
                  </MenuItem>
                  <MenuItem startContent={<EyeOff className="size-4" />}>
                    Hide status
                  </MenuItem>
                </Menu>
              </div>

              <Text variant="body1">{title}</Text>

              <div className="flex items-center justify-between gap-3">
                <Text variant="h4">{value}</Text>
                <div className="*:ring-background flex -space-x-0.5 *:ring-2">
                  {users.map((user) => {
                    const { name, avatarUrl } = user;
                    return (
                      <Avatar
                        key={name}
                        alt={name}
                        src={avatarUrl}
                        size="xs"
                        width={100}
                        height={100}
                      />
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
