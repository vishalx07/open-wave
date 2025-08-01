import { cn } from "@/lib/tw-merge";

type Props = {
  icon: React.ReactNode;
  className?: string;
};

export const IconWrapper = ({ icon, className }: Props) => {
  return (
    <div
      className={cn(
        "flex size-10 p-2 shrink-0 items-center bg-neutral-950 justify-center rounded-full text-foreground-secondary ring-1 ring-inset ring-neutral-700",
        className
      )}
    >
      {icon}
    </div>
  );
};
