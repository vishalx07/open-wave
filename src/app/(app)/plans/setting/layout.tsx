"use client";

import { UIConfigProvider, useUIConfig } from "@jamsr-ui/react";

type Props = {
  children: React.ReactNode;
};

export default function SettingLayout({ children }: Props) {
  const config = useUIConfig();
  return (
    <UIConfigProvider
      {...config}
      dataTable={{
        allowHover: true,
        variant: "bordered",
        classNames: {
          base: "gap-4 px-0 py-4",
          td: "border-dashed first:pl-4",
          th: "[&_span]:!text-xs [&_span]:!font-semibold bg-content2 has-[svg]:text-foreground text-foreground-secondary",
        },
        paginationProps: {
          className:
            "px-4 text-foreground-secondary [&_label]:!text-foreground-secondary",
        },
      }}
      input={{
        radius: "lg",
        size: "lg",
        isFilled: true,
        classNames: {
          label: "text-foreground-secondary",
        },
      }}
      button={{
        radius: "lg",
        color: "primary",
      }}
    >
      {children}
    </UIConfigProvider>
  );
}
