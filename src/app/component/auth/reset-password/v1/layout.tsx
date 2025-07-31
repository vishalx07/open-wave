import { UIConfigProvider } from "@jamsr-ui/react";
import { cn } from "@/lib/tw-merge";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <UIConfigProvider
      card={{
        radius: "2xl",
        className:
          "w-full max-w-md border-none bg-transparent px-4 py-6 shadow-lg backdrop-blur-lg sm:px-8",
      }}
      input={{
        size: "lg",
        isFilled: true,
        isRequired: true,
        radius: "xl",
        classNames: {
          endContent: "pr-2",
          startContent: "[&>svg]:w-5 [&>svg]:text-foreground-secondary",
          inputWrapper: cn(
            "transition-all duration-200 ease-in-out",
            "border-1 border-solid border-white/5",
            "uig-hover:border-white/10",
            "uig-focus:ring-1 uig-focus:ring-white/20 uig-focus:outline-hidden uig-focus:border-white/5",
          ),
        },
      }}
    >
      {children}
    </UIConfigProvider>
  );
}
