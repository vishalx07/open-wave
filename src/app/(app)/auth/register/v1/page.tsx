import { type Metadata } from "next";
import { TerminalCodeBlock } from "@/components/terminal-code-blocks";
import { COMPONENT_ROUTES } from "@/configs/routes/component";

export const metadata: Metadata = {
  title: "Register v1",
};

export default function page() {
  return (
    <TerminalCodeBlock
      iframeUrl={COMPONENT_ROUTES.auth.register.v1}
      className="h-dvh"
    />
  );
}
