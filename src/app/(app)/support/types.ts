export type TicketStatus = "new" | "active" | "closed";

export interface HelpCenterTicket {
  id: string;
  subject: string;
  description: string;
  status: TicketStatus;
  lastMessage: string;
  lastRepliedAt: string;
  closedAt?: string;
}

export interface HelpCenterMessage {
  ticketId: string;
  sender: "user" | "support";
  message: string;
  timestamp: string;
}
