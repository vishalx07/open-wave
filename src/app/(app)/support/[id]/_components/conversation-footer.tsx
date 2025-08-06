import { Send } from "lucide-react";
import { Alert, IconButton, Input } from "@jamsr-ui/react";
import type { HelpCenterTicket } from "../../types";

type Props = {
  ticket: HelpCenterTicket;
};

export const ConversationFooter = ({ ticket }: Props) => {
  const { status, closedAt } = ticket;

  return (
    <div className="bg-content2 flex items-center gap-4 rounded-xl p-4">
      {status === "closed" ? (
        <Alert
          variant="solid"
          status="danger"
          className="w-full"
        >
          This ticket was closed by support at {closedAt}
        </Alert>
      ) : (
        <>
          <Input
            fullWidth
            isFilled
            placeholder="Type your message..."
          />
          <IconButton
            label="Send"
            size="sm"
            radius="full"
            variant="flat"
          >
            <Send size={16} />
          </IconButton>
        </>
      )}
    </div>
  );
};
