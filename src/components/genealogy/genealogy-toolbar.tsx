import { useState } from "react";
import { type OrgChart } from "d3-org-chart";
import {
  ExpandIcon,
  MinimizeIcon,
  RefreshCwIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "lucide-react";
import { Divider, IconButton, Text, Tooltip } from "@jamsr-ui/react";
import { type GenealogyUser } from "./types";

type Props<T> = {
  chart: OrgChart<T>;
};
export const GenealogyToolbar = <T extends GenealogyUser>({
  chart,
}: Props<T>) => {
  const [zoomed, setZoomed] = useState(
    Math.round(chart.lastTransform().k * 100),
  );

  chart.onZoom(() => setZoomed(Math.round(chart.lastTransform().k * 100)));

  const toolbars = [
    {
      label: "Zoom In",
      icon: ZoomInIcon,
      onClick: () => chart.zoomIn(),
    },
    {
      showValue: true,
      label: zoomed.toString() + "%",
    },
    {
      label: "Zoom Out",
      icon: ZoomOutIcon,
      onClick: () => chart.zoomOut(),
      isDivider: true,
    },
    {
      label: "Reset",
      icon: RefreshCwIcon,
      onClick: () => chart.fit(),
      isDivider: true,
    },
    {
      label: "Collapse All",
      icon: MinimizeIcon,
      onClick: () => chart.collapseAll().fit(),
    },
    {
      label: "Expand All",
      icon: ExpandIcon,
      onClick: () => chart.expandAll().fit(),
    },
  ];

  return (
    <div className="bg-content2 fixed top-1/2 right-6 z-10 flex -translate-y-1/2 flex-col gap-2 rounded-xl p-2 shadow-xl">
      {toolbars.map((toolbar, ind) => {
        if (toolbar.showValue) {
          return (
            <div key={ind}>
              <Text
                variant="paragraph2"
                className="text-foreground-secondary text-center"
              >
                {toolbar.label}
              </Text>
              {toolbar.isDivider && <Divider className="mt-2" />}
            </div>
          );
        } else {
          return (
            <div key={ind}>
              <Tooltip
                title={toolbar.label}
                placement="left"
              >
                <IconButton
                  label={toolbar.label}
                  onClick={toolbar.onClick}
                  variant="light"
                  className="hover:text-primary text-foreground"
                >
                  {toolbar.icon && <toolbar.icon size={20} />}
                </IconButton>
              </Tooltip>

              {toolbar.isDivider && <Divider className="mt-2" />}
            </div>
          );
        }
      })}
    </div>
  );
};
