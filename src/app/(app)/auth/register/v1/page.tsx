import { TerminalCodeBlock } from "@/components/terminal-code-blocks";
import { COMPONENT_ROUTES } from "@/configs/routes/component";

const page = () => {
  return (
    <TerminalCodeBlock
      iframeUrl={COMPONENT_ROUTES.auth.register.v1}
      className="h-auto min-h-screen"
    />
  );
};

export default page;
