import { UIConfigProvider, UIProvider } from "@jamsr-ui/react";

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  return (
    <UIProvider>
      <UIConfigProvider
        card={{
          radius: "2xl",
          className: "border border-divider",
        }}
        dataTable={{
          allowHover: true,
          radius: "2xl",
          classNames: /** @tw */ {
            thead: "bg-content2 ",
          },
        }}
      >
        {children}
      </UIConfigProvider>
    </UIProvider>
  );
};
