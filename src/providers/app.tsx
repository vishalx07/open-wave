"use client";

import { NuqsAdapter } from "nuqs/adapters/next";
import { ToastProvider } from "@jamsr-ui/react";
import { ThemeProvider } from "@/theme";

type Props = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <NuqsAdapter>{children}</NuqsAdapter>
      <ToastProvider />
    </ThemeProvider>
  );
};
