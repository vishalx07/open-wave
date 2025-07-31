import { type Metadata } from "next";
import { TerminalCodeBlock } from "@/components/terminal-code-blocks";
import { COMPONENT_ROUTES } from "@/configs/routes";

export const metadata: Metadata = {
  title: "Register v4",
};

export default function page() {
  return (
    <TerminalCodeBlock
      iframeUrl={COMPONENT_ROUTES.auth.register.v4}
      className="h-dvh"
    />
  );
}
