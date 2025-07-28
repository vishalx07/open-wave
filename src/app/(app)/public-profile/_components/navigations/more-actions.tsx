import {
  Award,
  CircleAlert,
  Coffee,
  EllipsisVertical,
  TrendingUp,
  type LucideProps,
} from "lucide-react";
import { IconButton, Menu, MenuItem, Switch } from "@jamsr-ui/react";

const MORE_ACTIONS: {
  label: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  endContent?: React.ReactNode;
}[] = [
  {
    label: "Share Profile",
    icon: Coffee,
  },
  {
    label: "Give Award",
    icon: Award,
  },
  {
    label: "Stay Updated",
    icon: TrendingUp,
    endContent: <Switch size="xs" />,
  },
  {
    label: "Report User",
    icon: CircleAlert,
  },
];

export const MoreActions = () => {
  return (
    <Menu
      trigger={
        <IconButton
          label="More Actions"
          variant="outlined"
          className="size-8.5 min-w-auto"
        >
          <EllipsisVertical className="size-4" />
        </IconButton>
      }
      classNames={{
        popover: "min-w-[210px]",
      }}
    >
      {MORE_ACTIONS.map((action, index) => {
        const { label, icon: Icon, endContent } = action;
        return (
          <MenuItem
            key={index}
            preventCloseOnClick
            startContent={<Icon className="size-4" />}
            endContent={endContent}
          >
            {label}
          </MenuItem>
        );
      })}
    </Menu>
  );
};
