import { Chip, Text } from "@jamsr-ui/react";
import { HOLIDAYS_DATA } from "./data";

export const Holiday = () => {
  return (
    <div className="space-y-2 pt-4">
      {HOLIDAYS_DATA.map((holiday, index) => {
        const { title, date, icon, message, type, breakDuration } = holiday;
        return (
          <div
            key={index}
            className="bg-content2/50 space-y-3 rounded-xl p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <Text
                  as="h3"
                  variant="paragraph"
                  className="font-medium"
                >
                  {title}
                </Text>
                <Text
                  as="p"
                  variant="caption"
                  className="text-foreground-secondary font-medium"
                >
                  {date}
                </Text>
              </div>

              <Chip
                size="xs"
                color={
                  index === 0
                    ? "secondary"
                    : index === 1
                      ? "success"
                      : "warning"
                }
                variant="flat"
              >
                {breakDuration}
              </Chip>
            </div>

            <div className="flex items-center gap-2">
              <span className="bg-background flex size-7 items-center justify-center rounded-full">
                {icon}
              </span>
              <Text
                as="p"
                variant="paragraph"
                className="font-medium"
              >
                {message}
              </Text>
            </div>

            <span className="text-foreground-secondary text-xs">{type}</span>
          </div>
        );
      })}
    </div>
  );
};
