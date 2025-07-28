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
          },
        }}
        iconButton={{
          disableRipple: true,
          className: "text-foreground-secondary",
          props: ({ variant }) => {
            return variant === "outlined" ? { className: "border " } : {};
          },
        }}
      >
        {children}
      </UIConfigProvider>
    </UIProvider>
  );
};
