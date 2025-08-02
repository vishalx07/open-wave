import { useState } from "react";
import { Calendar } from "lucide-react";
import { Checkbox, Chip, Text } from "@jamsr-ui/react";
import { cn } from "@/lib/tw-merge";
import { type Note } from "./data";

type Props = {
  note: Note;
};

export const NoteCheckbox = ({ note }: Props) => {
  const [completed, setCompleted] = useState(false);

  const { title, description, date, todos } = note;

  return (
    <div
      className="flex cursor-pointer items-start gap-2.5 text-left select-none"
      onClick={() => setCompleted(!completed)}
    >
      <Checkbox
        radius="full"
        isChecked={completed}
        onCheckedChange={setCompleted}
      />
      <div className="flex-1 space-y-3">
        <div className="space-y-1">
          <Text
            as="p"
            variant="paragraph"
            className={cn(
              "font-medium",
              completed && "text-foreground-tertiary",
            )}
          >
            {title}
          </Text>
          <Text
            as="p"
            variant="paragraph2"
            className={cn(
              "text-foreground-secondary line-clamp-1",
              completed && "text-foreground-tertiary",
            )}
          >
            {description}
          </Text>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {todos.map((todo, index) => (
              <Chip
                key={index}
                size="xs"
                variant={"flat"}
                color={completed ? "default" : todo.color}
                className="text-foreground-tertiary"
              >
                {todo.todo}
              </Chip>
            ))}
          </div>
          <div
            className={cn(
              "text-foreground-secondary flex items-center gap-1",
              completed && "text-foreground-tertiary",
            )}
          >
            <Calendar className="size-4" />
            <Text
              as="span"
              variant="caption"
            >
              {date}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
