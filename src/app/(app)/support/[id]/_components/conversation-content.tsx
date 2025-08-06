import { TICKET_CONVERSATIONS } from "../../data";
import type { HelpCenterTicket } from "../../types";
import { Message } from "./message";

type Props = {
  ticket: HelpCenterTicket;
};

export const ConversationContent = ({ ticket }: Props) => {
  const ticketConversations = TICKET_CONVERSATIONS.filter((conversation) => {
    return conversation.ticketId === ticket.id;
  });

  return (
    <div className="scrollbar-thin flex grow flex-col gap-4 overflow-y-auto px-4 py-6">
      {ticketConversations.map((conversation, index) => {
        return (
          <Message
            key={index}
            conversation={conversation}
          />
        );
      })}
    </div>
  );
};
