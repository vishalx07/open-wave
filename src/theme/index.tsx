import { UIConfigProvider, UIProvider } from "@jamsr-ui/react";

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  return (
    <UIProvider>
      <UIConfigProvider>{children}</UIConfigProvider>
    </UIProvider>
  );
};
