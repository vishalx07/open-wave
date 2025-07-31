import { MessagesSquare, Users } from "lucide-react";
import { Button, Divider, IconButton } from "@jamsr-ui/react";
import { MenuBar } from "@/components/menu-bar";
import { MENU_BAR_ITEMS } from "./menu-bar-items";
import { MoreActions } from "./more-actions";

export const Navigations = () => {
  return (
    <div className="border-border mb-5 flex flex-wrap items-center justify-between gap-3 border-b md:flex-nowrap lg:mb-10 lg:items-end lg:gap-6">
      {/* Navigations */}
      <div className="grid">
        <MenuBar menuBarItems={MENU_BAR_ITEMS} />
      </div>

      {/* Actions */}
      <div className="mb-1.5 flex grow items-center justify-end gap-2.5 lg:mb-0 lg:grow-0 lg:pb-4">
        <IconButton
          label="Chat Button"
          variant="outlined"
          className="size-8.5 min-w-auto"
        >
          <MessagesSquare className="size-4" />
        </IconButton>

        <MoreActions />
      </div>
    </div>
  );
};
