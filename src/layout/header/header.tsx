"use client";

import {
  Bell,
  LayoutGrid,
  Menu,
  MessageCircleMore,
  Search,
} from "lucide-react";
import { IconButton } from "@jamsr-ui/react";
import { useSidebarMobile } from "@/stores/use-sidebar-mobile";
import { Account } from "./account";
import { Nav } from "./nav";

export const Header = () => {
  const { onOpen } = useSidebarMobile();

  return (
    <header className="border-divider h-(--header-mobile-height) border-b lg:h-(--header-desktop-height)">
      <div className="container flex h-full items-center justify-between">
        <div className="lg:hidden">
          <IconButton
            label="Sidebar Toggle Button"
            size="sm"
            variant="light"
            onClick={onOpen}
          >
            <Menu size={20} />
          </IconButton>
        </div>

        <div className="max-lg:hidden">
          <Nav />
        </div>

        <div className="flex items-center gap-3">
          <IconButton
            label="Search Button"
            radius="full"
            size="sm"
            variant="light"
            className="size-9"
          >
            <Search className="size-4.5" />
          </IconButton>
          <IconButton
            label="Notification Button"
            radius="full"
            size="sm"
            variant="light"
            className="size-9"
          >
            <Bell className="size-4.5" />
          </IconButton>
          <IconButton
            label="Chat Button"
            radius="full"
            size="sm"
            variant="light"
            className="size-9"
          >
            <MessageCircleMore className="size-4.5" />
          </IconButton>
          <IconButton
            label="Chat Button"
            radius="full"
            size="sm"
            variant="light"
            className="size-9"
          >
            <LayoutGrid className="size-4.5" />
          </IconButton>

          <Account />
        </div>
      </div>
    </header>
  );
};
