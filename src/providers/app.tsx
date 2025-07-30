"use client";

import { ToastProvider } from "@jamsr-ui/react";
import { ThemeProvider } from "@/theme";

type Props = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  return (
    <ThemeProvider>
      {children}
      <ToastProvider />
    </ThemeProvider>
  );
};
