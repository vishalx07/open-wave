import { create } from "zustand";

type TicketSelectState = {
  ticketId: string | undefined;
  setTicketId: (id: string) => void;
  reset: () => void;
};

export const useTicketSelect = create<TicketSelectState>((set) => ({
  ticketId: undefined,
  setTicketId: (id) => set({ ticketId: id }),
  reset: () => set({ ticketId: undefined }),
}));
