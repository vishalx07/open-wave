import { SidebarHeader as UiSidebarHeader } from "@jamsr-ui/react";
import { cn } from "@jamsr-ui/utils";
import { Logo } from "@/components/logo";
import { useSidebar } from "@/stores/use-sidebar";

export const SidebarHeader = () => {
  const { isMini, isHovered } = useSidebar();

  return (
    <UiSidebarHeader
      className={cn(
        "p-5",
        isMini && !isHovered && "flex items-center justify-center",
      )}
    >
      <Logo isFullLogo={!isMini || isHovered} />
    </UiSidebarHeader>
  );
};
