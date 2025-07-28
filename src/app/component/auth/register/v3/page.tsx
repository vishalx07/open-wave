import { TerminalCodeBlock } from "@/components/terminal-code-blocks";
import { COMPONENT_ROUTES } from "@/configs/routes/component";

export default function page() {
  return (
    <>
      <TerminalCodeBlock
        iframeUrl={COMPONENT_ROUTES.auth.login.v3}
        className="h-dvh"
      >
        test
      </TerminalCodeBlock>
    </>
  );
}
