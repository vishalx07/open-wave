import { type Metadata } from "next";
import { TerminalCodeBlock } from "@/components/terminal-code-blocks";
import { COMPONENT_ROUTES } from "@/configs/routes/component";

export const metadata: Metadata = {
  title: "Login v2",
};

export default function page() {
  return (
    <TerminalCodeBlock
      iframeUrl={COMPONENT_ROUTES.auth.login.v2}
      className="h-dvh"
    />
  );
}
