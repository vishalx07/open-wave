import { UINextConfigProvider } from "@jamsr-ui/next";
import { UIConfigProvider } from "@jamsr-ui/react";
import { cn } from "@/lib/tw-merge";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <UINextConfigProvider
      link={{
        className:
          "hover:text-foreground-secondary text-foreground-secondary text-md",
      }}
    >
      <UIConfigProvider
        button={{
          size: "lg",
          variant: "outlined",
          radius: "2xl",
          className: cn(
            // base
            "font-semibold text-white shadow-sm hover:button-shadow",
            // animation
            "transition-all duration-200 ease-in-out",
            // border & background
            "border-white/5 backdrop-blur-[25px] bg-[linear-gradient(104deg,rgba(253,253,253,0.05)_5%,rgba(240,240,228,0.1)_100%)] bg-origin-border",
            // focus
            "focus-visible:bg-white/90 focus-visible:text-black focus-visible:ring-4 focus-visible:ring-white/30 focus-visible:outline-hidden",
            // disabled
            "not-disabled:hover:bg-white/90 not-disabled:hover:text-black disabled:text-white/50 disabled:opacity-30",
            // after
            "after:absolute after:bg-[url('/images/texture-btn.png')] after:pointer-events-none after:top-[-2px] after:left-[-2px] after:h-[calc(100%+4px)] after:w-[calc(100%+4px)] after:rounded-[1rem] after:bg-repeat",
          ),
        }}
        divider={{
          className: "text-foreground-secondary",
        }}
        input={{
          size: "lg",
          radius: "2xl",
          classNames: {
            mainWrapper: "gap-2",
            label: "text-foreground-secondary text-md",

            inputWrapper: cn(
              // animation
              "transition-all duration-200 ease-in-out",
              // border & background
              "border-white/5 before:absolute before:bg-repeat before:top-[-2px] before:left-[-2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:rounded-[1rem] before:bg-[linear-gradient(104deg,rgba(253,253,253,0.05)_5%,rgba(240,240,228,0.1)_100%)] backdrop-blur-[25px]",
              // focus
              "uig-focus:ring-2 uig-focus:ring-white/20  uig-focus:outline-hidden uig-focus:border-white/5 uig-hover:border-white/5",
            ),
          },
        }}
      >
        {children}
      </UIConfigProvider>
    </UINextConfigProvider>
  );
}
