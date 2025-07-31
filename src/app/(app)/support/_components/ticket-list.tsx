"use client";

import { useTicketSelect } from "@/stores/use-ticket-select";
import { TICKET_LIST } from "../data";
import { NewTicket } from "./new-ticket";
import { Ticket } from "./ticket";

export const TicketList = () => {
  const { ticketId } = useTicketSelect();

  return (
    <div className="flex size-full shrink-0 flex-col md:max-w-[350px]">
      <div className="relative flex size-full flex-col gap-2 overflow-y-auto">
        {TICKET_LIST.map((ticket) => (
          <Ticket
            key={ticket.id}
            data={ticket}
            isSelected={ticket.id === ticketId}
          />
        ))}

        <NewTicket />
      </div>
    </div>
  );
};
