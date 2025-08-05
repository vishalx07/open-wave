"use client";

import { Suspense } from "react";
import { UIConfigProvider, useUIConfig } from "@jamsr-ui/react";

type Props = {
  children: React.ReactNode;
};

export default function WalletLayout({ children }: Props) {
  const config = useUIConfig();

  return (
    <Suspense>
      <UIConfigProvider
        {...config}
        dataTable={{
          className: "gap-4 px-0",
          classNames: {
            th: "!rounded-none [&_span]:!text-xs [&_span]:!font-semibold bg-content2 text-foreground-secondary has-[svg]:text-foreground",
          },
          paginationProps: {
            className:
              "text-foreground-secondary [&_label]:!text-foreground-secondary px-4 pt-4 border-t border-divider",
          },
        }}
      >
        {children}
      </UIConfigProvider>
    </Suspense>
  );
}
