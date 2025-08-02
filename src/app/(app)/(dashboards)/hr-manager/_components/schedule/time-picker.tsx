import dayjs from "dayjs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IconButton } from "@jamsr-ui/react";
import { cn } from "@/lib/tw-merge";
import { fMonthYear } from "@/utils/time";

const DATES: { day: string; date: number }[] = [
  {
    day: dayjs(new Date()).subtract(3, "day").format("ddd"),
    date: dayjs(new Date()).subtract(3, "day").date(),
  },
  {
    day: dayjs(new Date()).subtract(2, "day").format("ddd"),
    date: dayjs(new Date()).subtract(2, "day").date(),
  },
  {
    day: dayjs(new Date()).subtract(1, "day").format("ddd"),
    date: dayjs(new Date()).subtract(1, "day").date(),
  },
  {
    day: dayjs(new Date()).format("ddd"),
    date: dayjs(new Date()).date(),
  },
  {
    day: dayjs(new Date()).add(1, "day").format("ddd"),
    date: dayjs(new Date()).add(1, "day").date(),
  },
  {
    day: dayjs(new Date()).add(2, "day").format("ddd"),
    date: dayjs(new Date()).add(2, "day").date(),
  },
  {
    day: dayjs(new Date()).add(3, "day").format("ddd"),
    date: dayjs(new Date()).add(3, "day").date(),
  },
];

export const TimePicker = () => {
  const newDate = new Date();
  const currentDate = dayjs(newDate).date();
  return (
    <>
      <div className="bg-content2/50 flex h-9 items-center justify-between gap-1.5 rounded-lg px-1.5">
        <IconButton
          label="Left Button"
          size="xs"
          variant="flat"
        >
          <ChevronLeft className="size-5" />
        </IconButton>

        <span className="text-foreground-secondary text-sm font-medium">
          {fMonthYear(newDate)}
        </span>

        <IconButton
          label="Right Button"
          size="xs"
          variant="flat"
        >
          <ChevronRight className="size-5" />
        </IconButton>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <IconButton
          label="Left Button"
          size="xs"
          variant="outlined"
        >
          <ChevronLeft className="size-5" />
        </IconButton>

        <div className="grid flex-1">
          <div className="grid grid-cols-5 gap-1 [grid-area:1/1]">
            <div className="bg-primary col-start-3 col-end-4 row-start-1 h-14 cursor-pointer rounded-lg"></div>
          </div>
          <div className="relative grid grid-cols-5 gap-1 overflow-hidden [grid-area:1/1]">
            {DATES.map((date) => (
              <button
                key={date.date}
                className={cn(
                  "hover:bg-content2/50 relative z-10 flex h-14 w-full shrink-0 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg select-none first:left-0 first:col-start-1 first:row-start-1 first:-translate-x-full last:right-0 last:col-start-5 last:row-start-1 last:translate-x-full [&:nth-child(2)]:col-start-1 [&:nth-child(2)]:row-start-1 [&:nth-last-child(2)]:col-start-5 [&:nth-last-child(2)]:row-start-1",
                  date.date === currentDate && "hover:bg-transparent",
                )}
              >
                <span
                  className={cn(
                    "text-foreground-secondary text-xs",
                    date.date === currentDate && "text-foreground",
                  )}
                >
                  {date.day}
                </span>
                <span className="text-md font-medium">{date.date}</span>
              </button>
            ))}
          </div>
        </div>

        <IconButton
          label="Right Button"
          size="xs"
          variant="outlined"
        >
          <ChevronRight className="size-5" />
        </IconButton>
      </div>
    </>
  );
};
