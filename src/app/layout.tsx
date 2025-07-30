import type { Metadata } from "next";

import "@/styles/globals.css";

import { AppProvider } from "@/providers/app";

export const metadata: Metadata = {
  title: { default: "OpenWave", template: "%s | OpenWave" },
  description: "open wave template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
    >
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
