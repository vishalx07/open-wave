import { ChevronFirst } from "lucide-react";
import { IconButton } from "@jamsr-ui/react";
import { cn } from "@jamsr-ui/utils";
import { useSidebar } from "@/stores/use-sidebar";

export const SidebarToggleButton = () => {
  const { isMini, isHovered, onToggleMini } = useSidebar();

  return (
    <IconButton
      label="Toggle sidebar"
      size="sm"
      radius="full"
      disableRipple
      variant="outlined"
      onClick={onToggleMini}
      className={cn(
        "border-divider bg-background fixed top-6 z-[61] -translate-x-1/2 border transition-[left] duration-300",
        isMini
          ? isHovered
            ? "left-(--dashboard-w)"
            : "left-(--dashboard-mini-w)"
          : "left-(--dashboard-w)",
      )}
    >
      <ChevronFirst
        strokeWidth={2.5}
        className={cn(
          "size-4 transition-transform duration-300",
          isMini && "rotate-180",
        )}
      />
    </IconButton>
  );
};
