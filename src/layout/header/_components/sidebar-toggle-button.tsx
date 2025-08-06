"use client";

import { Menu } from "lucide-react";
import { IconButton } from "@jamsr-ui/react";
import { useSidebarMobile } from "@/stores/use-sidebar-mobile";

export const SidebarToggleButton = () => {
  const { onOpen } = useSidebarMobile();

  return (
    <IconButton
      label="Sidebar Toggle Button"
      size="sm"
      variant="light"
      onClick={onOpen}
    >
      <Menu size={20} />
    </IconButton>
  );
};
