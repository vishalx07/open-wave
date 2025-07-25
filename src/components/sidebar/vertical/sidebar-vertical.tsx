import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
} from "@jamsr-ui/react";
import { cn } from "@jamsr-ui/utils";
import { useSidebar } from "@/stores/use-sidebar";
import { NAV_ITEMS } from "../nav-items";
import { SidebarHeader } from "./sidebar-header";
import { SidebarMenuItem } from "./sidebar-menu-item";

export const SidebarVertical = () => {
  const { isMini, isHovered } = useSidebar();

  return (
    <Sidebar className={"bg-background sticky top-0 w-full p-0"}>
      <SidebarHeader />

      {/* scrollbar-hide class from global.css */}
      <SidebarContent className="scrollbar-hide gap-5 overflow-hidden overflow-y-auto px-5 pt-2">
        {NAV_ITEMS.map((item) => {
          const { title, items = [] } = item;
          return (
            <SidebarGroup
              key={title}
              className="gap-1"
            >
              <SidebarGroupLabel
                className={cn(
                  "p-1 font-semibold uppercase",
                  isMini && !isHovered && "text-center",
                )}
              >
                {isMini && !isHovered ? "..." : title}
              </SidebarGroupLabel>
              <SidebarMenu className="flex flex-col gap-1">
                {items.map((item) => {
                  return (
                    <SidebarMenuItem
                      key={item.title}
                      {...item}
                    />
                  );
                })}
              </SidebarMenu>
            </SidebarGroup>
          );
        })}
      </SidebarContent>
    </Sidebar>
  );
};
