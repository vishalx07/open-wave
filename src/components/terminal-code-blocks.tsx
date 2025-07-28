"use client";

import { ArrowUpRight } from "lucide-react";
import { Link } from "@jamsr-ui/next";
import { Tooltip } from "@jamsr-ui/react";
import { cn } from "@/lib/tw-merge";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./resizable";

interface TerminalCodeBlockProps {
  children?: React.ReactNode;
  newTabLink?: string;
  iframeUrl?: string;
  className?: string;
}

export function TerminalCodeBlock({
  children,
  newTabLink,
  iframeUrl,
  className,
}: TerminalCodeBlockProps) {
  const handleDoubleClick = () => {
    const targetUrl = newTabLink ?? iframeUrl;
    if (targetUrl) {
      window.open(targetUrl, "_blank");
    }
  };
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel
        defaultSize={100}
        minSize={50}
        className={cn("border-divider rounded-2xl border", className)}
      >
        <div
          onDoubleClick={handleDoubleClick}
          className="border-divider sticky top-0 left-0 z-20 flex h-10 w-full items-center justify-between border-b px-4 py-3"
        >
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500 transition-colors hover:bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500 transition-colors hover:bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-500 transition-colors hover:bg-green-400"></div>
          </div>
          <Tooltip title="Open in new tab">
            <Link
              href={newTabLink ?? iframeUrl ?? "#"}
              target="_blank"
            >
              <ArrowUpRight className="text-foreground-secondary size-4" />
            </Link>
          </Tooltip>
        </div>
        <div className="h-full w-full overflow-auto">
          {iframeUrl ? (
            <iframe
              src={iframeUrl}
              allowFullScreen
              className="h-full w-full select-none"
            ></iframe>
          ) : (
            children
          )}
        </div>
      </ResizablePanel>
      <ResizableHandle
        withHandle
        className="max-h-[95%] translate-y-[2%]"
      />
      <ResizablePanel defaultSize={0} />
    </ResizablePanelGroup>
  );
}
