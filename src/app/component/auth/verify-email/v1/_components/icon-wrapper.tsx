import { cn } from "@/lib/tw-merge";

type Props = {
  icon: React.ReactNode;
  className?: string;
};

export const IconWrapper = ({ icon, className }: Props) => {
  return (
    <div
      className={cn(
        "text-foreground-secondary flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-950 p-2 ring-1 ring-neutral-700 ring-inset",
        className,
      )}
    >
      {icon}
    </div>
  );
};
