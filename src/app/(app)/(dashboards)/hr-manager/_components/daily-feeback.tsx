"use client";

import { MessageSquareText } from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  Divider,
  Text,
  Textarea,
} from "@jamsr-ui/react";
import { cn } from "@/lib/tw-merge";

export const DailyFeedback = () => {
  return (
    <Card>
      <CardContent>
        <div className="flex h-12 items-center gap-2 pb-4">
          <MessageSquareText className="text-foreground-secondary size-5" />
          <Text
            as="h3"
            className="flex-1 font-medium"
          >
            Daily Feedback
          </Text>
          <Text
            as="p"
            variant="paragraph"
            className="text-foreground-secondary"
          >
            Question 1/4
          </Text>
        </div>

        <Divider />

        <div className="space-y-4 pt-4">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="bg-primary/16 text-md text-primary flex size-10 items-center justify-center rounded-full">
              01
            </div>
            <div className="space-y-1">
              <Text
                as="p"
                variant="body1"
                className="font-medium"
              >
                How would you rate your mood today?
              </Text>
              <Text
                as="p"
                variant="caption"
                className="text-foreground-secondary"
              >
                Share your mood to help us understand.
              </Text>
            </div>
          </div>

          <div className="flex h-[120px] flex-col -space-y-px">
            <div
              className="flex rounded-md"
              role="group"
            >
              {["😔", "😕", "😐", "🙂", "😄"].map((tab, index) => (
                <button
                  key={tab}
                  type="button"
                  className="text-foreground-secondary border-divider focus:text-foreground hover:bg-content2 focus:bg-content2 flex h-6 w-full cursor-pointer items-center justify-center border border-b-0 bg-transparent px-4 py-2 text-sm font-medium transition first:rounded-tl-lg last:rounded-tr-lg"
                >
                  {tab}
                </button>
              ))}
            </div>
            <Textarea
              placeholder="Tell Us Why"
              classNames={{
                inputWrapper: "rounded-tl-none rounded-tr-none border-divider",
              }}
            />
          </div>

          <Button
            fullWidth
            variant="outlined"
          >
            Next Question
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
