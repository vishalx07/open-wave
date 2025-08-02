import { ChevronRight } from "lucide-react";
import { Avatar, Button, Text } from "@jamsr-ui/react";
import { cn } from "@/lib/tw-merge";
import { type User } from "../types";

export const UserItem = ({
  user,
  className,
}: {
  user: User;
  withAction?: boolean;
  className?: string;
}) => {
  const { avatar, email, name } = user;
  return (
    <Button
      radius="2xl"
      variant="outlined"
      className={cn("justify-start border-none", className)}
      startContent={
        <Avatar
          src={avatar}
          alt="apex"
        />
      }
    >
      <div className="flex grow items-center justify-between text-start">
        <div>
          <Text
            as="p"
            variant="paragraph2"
            className="font-semibold"
          >
            {name}
          </Text>
          <Text
            as="p"
            variant="paragraph2"
            className="text-foreground-secondary"
          >
            {email}
          </Text>
        </div>
        <ChevronRight />
      </div>
    </Button>
  );
};
