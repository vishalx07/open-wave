import NextLink from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@jamsr-ui/react";
import type { NavItem } from "./types";

type Props = {
  navItems: NavItem[];
};

export const MegaMenu = ({ navItems = [] }: Props) => {
  return (
    <nav className="flex items-center justify-center">
      <ul className="flex list-none items-center justify-center gap-0">
        {navItems.map((item) => {
          const { title, icon, url = "#", items = [] } = item;
          const hasChild = items.length > 0;
          return (
            <Button
              key={title}
              disableRipple
              as={hasChild ? undefined : NextLink}
              href={url}
              size="sm"
              variant="text"
              startContent={<span className="[&>svg]:size-5">{icon}</span>}
              endContent={
                hasChild && (
                  <ChevronDown className="size-3.5 transition group-hover:rotate-180" />
                )
              }
              className="group text-foreground-secondary hover:text-primary! text-sm font-normal transition"
            >
              {title}
            </Button>
          );
        })}
      </ul>
    </nav>
  );
};
