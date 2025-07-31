import { Text } from "@jamsr-ui/react";

type Props = {
  title: string;
  subtitle?: string;
  startContent?: React.ReactNode;
};

export const TableCell = (props: Props) => {
  const { title, subtitle, startContent = null } = props;

  return (
    <div className="flex items-center gap-3">
      {startContent}
      <div className="space-y-0.5">
        <p>{title}</p>
        {subtitle && (
          <Text
            as="p"
            variant="paragraph2"
            className="text-foreground-secondary"
          >
            {subtitle}
          </Text>
        )}
      </div>
    </div>
  );
};
