"use client";

import { useEffect, useRef, useState } from "react";
import { OrgChart } from "d3-org-chart";
import { renderToString } from "react-dom/server";
import {
  CardContent,
  CircularProgress,
  Drawer,
  DrawerBody,
  DrawerHeader,
} from "@jamsr-ui/react";
import { GenealogyNode } from "./genealogy-node";
import { GenealogyNodeButton } from "./genealogy-node-button";
import { GenealogyProfile } from "./genealogy-profile";
import { GenealogyToolbar } from "./genealogy-toolbar";
import { type GenealogyUser } from "./types";

type Props<T extends GenealogyUser> = {
  nodes: T[];
};

export const GenealogyTree = <T extends GenealogyUser>({ nodes }: Props<T>) => {
  const chartRef = useRef(null);
  const [chart, setChart] = useState<OrgChart<T> | null>(null);
  const [activeUser, setActiveUser] = useState<T | null>(null);

  useEffect(() => {
    if (!!nodes.length && chartRef.current) {
      if (!chart) {
        setChart(new OrgChart());
      } else {
        chart
          .container(chartRef.current)
          .data(nodes)
          .nodeId((data) => {
            const d = data as GenealogyUser;
            return d.userId;
          })
          .nodeWidth(() => 240)
          .nodeHeight(() => 120)
          .nodeContent(({ data }) =>
            renderToString(<GenealogyNode data={data} />),
          )
          .buttonContent(({ node }) =>
            renderToString(
              <GenealogyNodeButton isExtended={!!node.children} />,
            ),
          )
          .onNodeClick(({ data }) => {
            setActiveUser(data);
          })
          .compact(false)
          .render();
      }
    }
  }, [nodes, chart]);

  return (
    <div className="min-h-full">
      {(!chart || !chartRef.current) && (
        <CircularProgress className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      )}
      <CardContent>
        {chart && <GenealogyToolbar chart={chart} />}
        <div
          className="size-full grow"
          ref={chartRef}
        />
        <Drawer
          isOpen={!!activeUser}
          onOpenChange={() => setActiveUser(null)}
          size="xs"
        >
          <DrawerHeader>Profile</DrawerHeader>
          {activeUser && (
            <DrawerBody>
              <GenealogyProfile data={activeUser} />
            </DrawerBody>
          )}
        </Drawer>
      </CardContent>
    </div>
  );
};
