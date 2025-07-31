import { ROOT_METADATA } from "@/configs/metadata";

import "@/styles/globals.css";

import { AppProvider } from "@/providers/app";

export const metadata = ROOT_METADATA;

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
