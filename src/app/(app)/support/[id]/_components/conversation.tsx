"use client";

import { useEffect } from "react";
import { useTicketSelect } from "@/stores/use-ticket-select";
import { TICKET_LIST } from "../../data";
import { ConversationContent } from "./conversation-content";
import { ConversationFooter } from "./conversation-footer";
import { ConversationHeader } from "./conversation-header";

type Props = {
  id: string;
};

export const Conversation = ({ id }: Props) => {
  const { setTicketId } = useTicketSelect();

  useEffect(() => {
    setTicketId(id);
  }, [id]);

  const ticket = TICKET_LIST.find((ticket) => ticket.id === id);

  if (!ticket) {
    return null;
  }

  return (
    <div className="flex size-full flex-col">
      <ConversationHeader ticket={ticket} />
      <ConversationContent ticket={ticket} />
      <ConversationFooter ticket={ticket} />
    </div>
  );
};
