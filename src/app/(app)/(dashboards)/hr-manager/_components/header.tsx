import { BellDot, CalendarCheck, Plus, Search } from "lucide-react";
import { Avatar, Button, IconButton } from "@jamsr-ui/react";

const user = {
  name: "Sophia Williams",
  email: "sophia@alignui.com",
  avatar: "/avatar.png",
};

export const Header = () => {
  return (
    <header className="flex h-[88px] flex-col gap-4 px-4 py-5 md:flex-row md:items-center md:justify-between md:gap-3 lg:px-8">
      <div className="flex flex-1 items-center gap-4 lg:gap-3.5">
        <Avatar
          src={user.avatar}
          alt={user.name}
          size="lg"
          width={100}
          height={100}
        />
        <div className="space-y-0.5">
          <p className="text-lg font-medium">{user.name}</p>
          <p className="text-foreground-secondary text-sm">
            Welcome back to Synergy 👋🏻
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <IconButton
          size="sm"
          label="Search"
          variant="light"
        >
          <Search className="size-5" />
        </IconButton>
        <IconButton
          size="sm"
          label="Notification"
          variant="light"
        >
          <BellDot className="size-5" />
        </IconButton>
        <Button
          variant="outlined"
          startContent={<CalendarCheck className="size-5" />}
          className="text-foreground-secondary"
        >
          Schedule
        </Button>
        <Button
          color="primary"
          startContent={<Plus className="size-5" />}
        >
          Create Request
        </Button>
      </div>
    </header>
  );
};
