"use client";

import { Drawer } from "@jamsr-ui/react";
import { cn } from "@jamsr-ui/utils";
import { useSidebar } from "@/stores/use-sidebar";
import { useSidebarMobile } from "@/stores/use-sidebar-mobile";
import { SidebarToggleButton } from "./sidebar-toggle-button";
import { SidebarVertical } from "./vertical";

export const Sidebar = () => {
  const { isMini, isHovered, onHovered, onCloseHovered } = useSidebar();
  const { isOpen, setIsOpen } = useSidebarMobile();

  return (
    <>
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

      <Drawer
        anchor="left"
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        className="max-w-(--dashboard-w)! bg-transparent"
      >
        <SidebarVertical />
      </Drawer>
    </>
  );
};
