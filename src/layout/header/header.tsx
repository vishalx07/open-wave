"use client";

import { LayoutGrid, MessageCircleMore, Search } from "lucide-react";
import { IconButton } from "@jamsr-ui/react";
import { Nav } from "./_components/nav";
import { Notifications } from "./_components/notifications";
import { SidebarToggleButton } from "./_components/sidebar-toggle-button";
import { Account } from "./account";

export const Header = () => {
  return (
    <header className="border-divider z-header bg-background sticky top-0 h-(--header-mobile-height) border-b lg:h-(--header-desktop-height)">
      <div className="container flex h-full items-center justify-between">
        <div className="lg:hidden">
          <SidebarToggleButton />
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

          <Notifications />

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
