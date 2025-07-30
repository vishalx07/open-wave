import { type ComponentProps } from "react";
import { Link } from "@jamsr-ui/next";
import { cn } from "@jamsr-ui/utils";

type Props = {
  isFullLogo?: boolean;
  disableLink?: boolean;
  href?: string;
  className?: string;
} & ComponentProps<"img">;

export const Logo = ({ isFullLogo, disableLink, href, ...props }: Props) => {
  const logo = (
    <img
      src="/brand/logo.png"
      alt="logo"
      className={cn("h-8 max-h-8", props.className)}
      {...props}
    />
  );

  const fullLogo = (
    <img
      src="/brand/full-logo.png"
      alt="logo"
      className={cn("h-8 max-h-8 w-[185.08px] min-w-max", props.className)}
      {...props}
    />
  );

  const logoToRender = isFullLogo ? fullLogo : logo;

  if (disableLink) return logoToRender;

  return <Link href={href ?? "/"}>{logoToRender}</Link>;
};
