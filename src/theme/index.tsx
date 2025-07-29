import { UIConfigProvider, UIProvider } from "@jamsr-ui/react";

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  return (
    <UIProvider>
      <UIConfigProvider
        button={{
          props: ({ variant }) => {
            return variant === "outlined" ? { className: "border " } : {};
          },
        }}
        card={{
          radius: "2xl",
          className: "border border-divider",
        }}
        dataTable={{
          allowHover: true,
          radius: "2xl",
          classNames: /** @tw */ {
            th: "bg-content2",
            td: "first:rounded-l-xl last:rounded-r-xl",
          },
        }}
        iconButton={{
          disableRipple: true,
          className: "text-foreground-secondary",
          props: ({ variant }) => {
            return variant === "outlined" ? { className: "border " } : {};
          },
        }}
        menu={{
          classNames: {
            content: "p-2 gap-1",
          },
        }}
        select={{
          classNames: /** @tw */ {
            trigger: "border",
          },
        }}
      >
        {children}
      </UIConfigProvider>
    </UIProvider>
  );
};
