import { create } from "zustand";

type SidebarState = {
  isMini: boolean;
  isHovered: boolean;
  onToggleMini: () => void;
  onHovered: () => void;
  onCloseHovered: () => void;
};

export const useSidebar = create<SidebarState>((set) => ({
  isMini: false,
  isHovered: false,
  onToggleMini: () => set((state) => ({ isMini: !state.isMini })),
  onHovered: () => set({ isHovered: true }),
  onCloseHovered: () => set({ isHovered: false }),
}));
