"use client";

import React from "react";
import { Plus, StickyNote } from "lucide-react";
import { Button, Card, CardContent, Divider, Text } from "@jamsr-ui/react";
import { NOTES_DATA } from "./data";
import { NoteCheckbox } from "./note-checkbox";

export const Notes = () => {
  return (
    <Card>
      <CardContent>
        <div className="flex h-12 items-center gap-2 pb-4">
          <StickyNote className="text-foreground-secondary size-5" />
          <Text
            as="h3"
            className="flex-1 font-medium"
          >
            Notes
          </Text>
          <Button
            size="sm"
            variant="outlined"
            startContent={<Plus className="size-5" />}
            className="text-foreground-secondary"
          >
            Add Note
          </Button>
        </div>

        <Divider />

        <div className="space-y-3 pt-4">
          {NOTES_DATA.map((note, index) => {
            return (
              <React.Fragment key={index}>
                <NoteCheckbox note={note} />
                {index !== NOTES_DATA.length - 1 && <Divider />}
              </React.Fragment>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
