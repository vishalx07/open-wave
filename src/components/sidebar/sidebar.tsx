"use client";

import { cn } from "@jamsr-ui/utils";
import { useSidebar } from "@/stores/use-sidebar";
import { SidebarToggleButton } from "./sidebar-toggle-button";
import { SidebarVertical } from "./vertical";

export const Sidebar = () => {
  const { isMini, isHovered, onHovered, onCloseHovered } = useSidebar();

  return (
    <div
      onMouseEnter={onHovered}
      onMouseLeave={onCloseHovered}
      className={cn(
        "border-divider relative shrink-0 border-r transition-[width] duration-300 max-lg:hidden",
        isMini
          ? isHovered
            ? "w-(--dashboard-w)"
            : "w-(--dashboard-mini-w)"
          : "w-(--dashboard-w)",
      )}
    >
      <SidebarToggleButton />

      <SidebarVertical />
    </div>
  );
};
