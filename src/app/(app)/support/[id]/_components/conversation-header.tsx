import { CheckCheck, Clock, EllipsisVertical } from "lucide-react";
import { Avatar, IconButton, Menu, MenuItem, Text } from "@jamsr-ui/react";
import { cn } from "@/lib/tw-merge";
import type { HelpCenterTicket, TicketStatus } from "../../types";

type Props = {
  ticket: HelpCenterTicket;
};

export const ConversationHeader = ({ ticket }: Props) => {
  const { subject, status } = ticket;

  return (
    <div className="bg-content2 sticky top-0 flex items-center justify-between gap-2 rounded-xl p-4">
      <div className="flex items-center gap-2">
        <Avatar
          src="/images/user3.png"
          alt="S"
          width={100}
          height={100}
        />
        <div>
          <Text
            variant="body1"
            className="font-medium"
          >
            John Doe
          </Text>
          <div className="flex items-center gap-2">
            <p className="text-foreground-secondary text-xs">{subject}</p>

            <div className="bg-foreground-secondary size-1 rounded-full" />

            <div
              className={cn(
                "flex items-center gap-1 text-xs",
                status === "new"
                  ? "text-warning"
                  : status === "active"
                    ? "text-success"
                    : "text-foreground-secondary",
              )}
            >
              <GetStatusInfo status={status} />
            </div>
          </div>
        </div>
      </div>

      <Menu
        trigger={
          <IconButton
            label="Actions"
            size="sm"
            radius="full"
            variant="light"
          >
            <EllipsisVertical size={16} />
          </IconButton>
        }
      >
        <MenuItem color="danger">Closed Ticket</MenuItem>
      </Menu>
    </div>
  );
};

type GetStatusInfoProps = {
  status: TicketStatus;
};

function GetStatusInfo({ status }: GetStatusInfoProps) {
  switch (status) {
    case "new":
      return (
        <>
          <Clock size={14} />
          Waiting for reply
        </>
      );
    case "active":
      return (
        <>
          <Clock size={14} />
          Replied
        </>
      );
    case "closed":
      return (
        <>
          <CheckCheck size={14} />
          Closed
        </>
      );
  }
}
