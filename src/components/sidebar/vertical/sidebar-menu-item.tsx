import React from "react";
import NextLink from "next/link";
import { ChevronRight } from "lucide-react";
import { useDisclosure } from "@jamsr-ui/hooks";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  SidebarMenuItem as JamsrUiSidebarMenuItem,
  SidebarMenu,
  SidebarMenuItemButton,
} from "@jamsr-ui/react";
import { cn } from "@jamsr-ui/utils";
import { useActiveLink } from "@/hooks/use-active-link";
import { useSidebar } from "@/stores/use-sidebar";
import type { NavItem } from "../types";

type Props = NavItem & { isNested?: boolean };

export const SidebarMenuItem = React.memo((props: Props) => {
  const { isMini, isHovered } = useSidebar();

  const { icon, title, url = "#", items = [], isNested } = props;
  const hasChild = items.length > 0;
  const { active } = useActiveLink({ path: url });
  const { isOpen, setIsOpen, onClose } = useDisclosure(active);

  React.useEffect(() => {
    if (!active) onClose();
  }, [active]);

  return (
    <Collapsible
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      isDisabled={!hasChild}
    >
      <JamsrUiSidebarMenuItem className="relative">
        <CollapsibleTrigger as={"div"}>
          <SidebarMenuItemButton
            as={hasChild ? undefined : NextLink}
            href={url}
            // dashboard-bullet class from global.css
            className={cn(
              "text-foreground-secondary relative h-(--dashboard-item-h) gap-2 rounded-lg pl-3 text-left",
              isNested && "dashboard-bullet h-(--dashboard-sub-item-h)",
              active &&
                "bg-primary/10 text-primary data-[hovered=true]:bg-primary/20!",
              isNested &&
                active &&
                "text-foreground-primary bg-content2/50 data-[hovered=true]:bg-content2!",
            )}
          >
            {icon && (
              <span className="[&>svg]:size-(--dashboard-item-icon)">
                {icon}
              </span>
            )}
            <span
              className={cn(
                "min-w-max flex-1 font-medium",
                active && "font-semibold",
                isMini && !isHovered && "hidden",
              )}
            >
              {title}
            </span>
            {hasChild && (
              <ChevronRight
                className={cn(
                  "size-4 transition-transform duration-300",
                  isOpen && "rotate-90",
                  isMini && !isHovered && "hidden",
                )}
              />
            )}
          </SidebarMenuItemButton>
        </CollapsibleTrigger>
        {hasChild && (
          <CollapsibleContent>
            <div className={cn("pl-3", isMini && !isHovered && "hidden")}>
              {/* dashboard-bullet-join class from global.css */}
              <SidebarMenu className="dashboard-bullet-join relative flex flex-col gap-1 pl-3 [&>li:first-child]:mt-1">
                {items.map((item, index) => (
                  <SidebarMenuItem
                    key={index}
                    isNested
                    {...item}
                  />
                ))}
              </SidebarMenu>
            </div>
          </CollapsibleContent>
        )}
      </JamsrUiSidebarMenuItem>
    </Collapsible>
  );
});
