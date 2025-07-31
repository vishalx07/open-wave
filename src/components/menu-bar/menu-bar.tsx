import NextLink from "next/link";
import { ChevronDown } from "lucide-react";
import type { MenuBarItem } from "./types";

type Props = {
  menuBarItems: MenuBarItem[];
};

export const MenuBar = ({ menuBarItems }: Props) => {
  return (
    <div
      role="menubar"
      data-slot="menubar"
      className="flex h-auto items-stretch gap-3 space-x-1 overflow-x-auto rounded-md border border-none bg-transparent p-0"
    >
      {menuBarItems.map((menuBarItem) => {
        const { title, url = "#", items = [] } = menuBarItem;
        const hasChild = items.length > 0;

        const mentItemButton = (
          <button
            key={title}
            type="button"
            role="menuitem"
            className="data-[state=open]:bg-accent data-[state=open]:text-accent-foreground data-[here=true]:bg-accent text-foreground-secondary hover:text-primary focus:text-primary data-[active=true]:text-primary data-[active=true]:border-primary flex cursor-pointer items-center gap-2 rounded-none border-b-2 border-transparent bg-transparent! px-3 py-3.5 text-sm outline-hidden select-none hover:bg-transparent focus:bg-transparent [&_svg:not([class*=size-])]:size-4 [&_svg:not([role=img]):not([class*=text-])]:opacity-60 [&>svg]:pointer-events-none [&>svg]:shrink-0"
          >
            {title}
            {hasChild && <ChevronDown className="size-3.5" />}
          </button>
        );

        return hasChild ? (
          mentItemButton
        ) : (
          <NextLink
            key={title}
            href={url}
          >
            {mentItemButton}
          </NextLink>
        );
      })}
    </div>
  );
};
