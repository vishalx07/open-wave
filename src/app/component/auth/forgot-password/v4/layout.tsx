import { UINextConfigProvider } from "@jamsr-ui/next";
import { UIConfigProvider } from "@jamsr-ui/react";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <UINextConfigProvider
      link={{
        className: "hover:text-foreground-secondary text-foreground text-md",
      }}
    >
      <UIConfigProvider
        button={{
          size: "lg",
          variant: "outlined",
          radius: "2xl",
          className:
            "hover:button-shadow transition-all duration-200 ease-in-out border-white/5  backdrop-blur-[25px] bg-[linear-gradient(104deg,rgba(253,253,253,0.05)_5%,rgba(240,240,228,0.1)_100%)] bg-origin-border font-semibold text-white shadow-sm   after:pointer-events-none after:absolute after:top-[-2px] after:left-[-2px] after:h-[calc(100%+4px)] after:w-[calc(100%+4px)] after:rounded-[1rem] after:bg-[url('/images/texture-btn.png')] after:bg-repeat not-disabled:hover:bg-white/90 not-disabled:hover:text-black focus-visible:bg-white/90 focus-visible:text-black focus-visible:ring-4 focus-visible:ring-white/30 focus-visible:outline-hidden disabled:text-white/50 disabled:opacity-30",
        }}
        divider={{
          className: "text-foreground-secondary",
        }}
        input={{
          size: "lg",
          radius: "2xl",
          classNames: {
            mainWrapper: "gap-2 ",
            label: "text-foreground-secondary text-md",
            inputWrapper:
              "backdrop-blur-[25px] bg-[linear-gradient(104deg,rgba(253,253,253,0.05)_5%,rgba(240,240,228,0.1)_100%)] border-white/5 transition-all duration-200 ease-in-out  uig-focus:ring-1 uig-focus:ring-white/20  uig-focus:outline-hidden uig-focus:border-white/5 uig-hover:border-white/5",
          },
        }}
      >
        {children}
      </UIConfigProvider>
    </UINextConfigProvider>
  );
}
