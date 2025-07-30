import NextLink from "next/link";
import { Moon } from "lucide-react";
import { Link } from "@jamsr-ui/next";
import {
  Avatar,
  Button,
  Chip,
  Divider,
  Menu,
  MenuItem,
  Switch,
} from "@jamsr-ui/react";
import { DATA } from "./data";

export const Account = () => {
  const { user, items } = DATA;
  return (
    <Menu
      triggerOn="hover"
      trigger={
        <Avatar
          alt={user.name}
          src={user.avatar}
          isBordered
          size="sm"
          color="success"
          width={100}
          height={100}
        />
      }
      classNames={{
        popover: "min-w-[256px]",
        content: "p-2",
      }}
    >
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-2">
          <Avatar
            alt={user.name}
            src={user.avatar}
            size="sm"
            width={100}
            height={100}
          />
          <div className="flex flex-col">
            <Link
              variant="paragraph"
              href={"#"}
              underline="never"
              className="text-foreground"
            >
              {user.name}
            </Link>
            <Link
              variant="caption"
              href={"#"}
              underline="never"
              className="text-muted-foreground"
            >
              {user.email}
            </Link>
          </div>
        </div>

        <Chip
          radius="md"
          color="primary"
          variant="flat"
          size="sm"
        >
          Pro
        </Chip>
      </div>

      <Divider className="my-1.5" />

      {items.map((item) => {
        const { label, url, icon: Icon } = item;
        return (
          <MenuItem
            key={label}
            as={NextLink}
            href={url}
            startContent={<Icon className="text-foreground-secondary size-4" />}
          >
            {label}
          </MenuItem>
        );
      })}

      <Divider className="my-1.5" />

      <MenuItem
        preventCloseOnClick
        startContent={<Moon className="text-foreground-secondary size-4" />}
        endContent={
          <Switch
            size="sm"
            classNames={{
              switch: "h-5 w-8",
            }}
          />
        }
      >
        Dark Mode
      </MenuItem>

      <div className="mt-1 p-2">
        <Button
          fullWidth
          size="sm"
          variant="outlined"
        >
          Logout
        </Button>
      </div>
    </Menu>
  );
};
