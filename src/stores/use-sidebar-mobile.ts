import { create } from "zustand";

type SidebarState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  setIsOpen: (value: boolean) => void;
};

export const useSidebarMobile = create<SidebarState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  setIsOpen: (value) => set({ isOpen: value }),
}));
