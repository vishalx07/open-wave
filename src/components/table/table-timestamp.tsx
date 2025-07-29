import { Text } from "@jamsr-ui/react";
import { fDate, fTime } from "@/utils/time";

type Props = {
  time: Date | undefined;
};

export const TableTimestamp = ({ time }: Props) => {
  if (!time) return "_";
  return (
    <div className="space-y-0.5">
      <p>{fDate(time)}</p>
      <Text
        as="p"
        variant="lead"
        className="text-foreground-secondary"
      >
        {fTime(time)}
      </Text>
    </div>
  );
};
