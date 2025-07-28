import { TerminalCodeBlock } from "@/components/terminal-code-blocks";
import { COMPONENT_ROUTES } from "@/configs/routes/component";

const page = () => {
  return (
    <TerminalCodeBlock
      iframeUrl={COMPONENT_ROUTES.auth.login.v2}
      className="h-dvh"
    />
  );
};

export default page;
