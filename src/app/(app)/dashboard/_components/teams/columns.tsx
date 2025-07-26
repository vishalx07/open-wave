import { StarIcon } from "lucide-react";
import { Avatar, ColumnDef } from "@jamsr-ui/react";
import { cn } from "@jamsr-ui/utils";
import { type TeamType } from "./data";

export const columns: ColumnDef<TeamType>[] = [
  {
    header: "Team",
    accessorKey: "name",
    cell: ({ row: { original } }) => (
      <div className="flex flex-col gap-2">
        <span className="hover:text-primary text-sm leading-none font-medium">
          {original.name}
        </span>
        <span className="text-secondary-foreground text-sm leading-3 font-normal">
          {original.role}
        </span>
      </div>
    ),
    size: 250,
  },
  {
    header: "Rating",
    accessorKey: "rating",
    cell: ({
      row: {
        original: { rating },
      },
    }) => {
      return (
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, ind) => {
            return (
              <StarIcon
                key={ind}
                size={16}
                className={cn(
                  "text-muted-foreground",
                  ind + 1 <= Math.floor(rating) &&
                    "fill-current text-yellow-400",
                )}
              />
            );
          })}
        </div>
      );
    },
  },
  {
    header: "Last Modified",
    accessorKey: "lastModified",
  },
  {
    header: "Members",
    accessorKey: "members",
    cell: ({ row: { original } }) => (
      <div className="flex -space-x-2">
        {original.members.map((member, ind) => {
          return (
            <Avatar
              className="border-divider border"
              key={ind}
              alt={member.name}
              src={member.avatar}
              size="sm"
            />
          );
        })}
      </div>
    ),
  },
];
