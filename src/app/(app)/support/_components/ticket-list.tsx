"use client";

import { useSearchParams } from "next/navigation";
import { useTicketSelect } from "@/stores/use-ticket-select";
import { TABS, TICKET_LIST } from "../data";
import { NavTabs } from "./nav-tabs";
import { NewTicket } from "./new-ticket";
import { SearchBox } from "./search-box";
import { Ticket } from "./ticket";

export const TicketList = () => {
  const { ticketId } = useTicketSelect();
  const searchParams = useSearchParams();

  const tab = searchParams.get("tab");

  const currentTab = TABS.find(({ value }) => value === tab)?.value ?? "new";

  const FILTERED_TICKET_LIST =
    currentTab === "all"
      ? TICKET_LIST
      : TICKET_LIST.filter((ticket) => {
          return ticket.status === currentTab;
        });

  return (
    <div className="flex size-full flex-col gap-2 md:max-w-[350px]">
      <SearchBox />

      <NavTabs currentTab={currentTab} />

      <div className="scrollbar-thin flex grow flex-col gap-2 overflow-y-auto">
        {FILTERED_TICKET_LIST.map((ticket) => (
          <Ticket
            key={ticket.id}
            data={ticket}
            isSelected={ticket.id === ticketId}
            currentTab={currentTab}
          />
        ))}
      </div>

      <NewTicket />
    </div>
  );
};
