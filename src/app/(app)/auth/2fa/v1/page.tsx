import { type Metadata } from "next";
import { TerminalCodeBlock } from "@/components/terminal-code-blocks";
import { COMPONENT_ROUTES } from "@/configs/routes";

export const metadata: Metadata = {
  title: "2FA v1",
};

export default function page() {
  return (
    <TerminalCodeBlock
      iframeUrl={COMPONENT_ROUTES.auth.twoFA.v1}
      className="h-dvh"
    />
  );
}
