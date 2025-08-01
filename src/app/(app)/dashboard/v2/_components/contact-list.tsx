import React from "react";
import { Avatar } from "@jamsr-ui/next";
import { Button } from "@jamsr-ui/react";

const contacts = [
  {
    name: "Natalia",
    avatar: "/images/dashboard2/natalia.png",
  },
  {
    name: "James",
    avatar: "/images/dashboard2/james.png",
  },
  {
    name: "Laura",
    avatar: "/images/dashboard2/laura.png",
  },
  {
    name: "Wei",
    avatar: "/images/dashboard2/wei.png",
  },
  {
    name: "Arthur",
    avatar: "/images/dashboard2/arthur.png",
  },
];

export const ContactList = () => {
  return (
    <div className="scrollbar-hidden flex max-w-full gap-2 overflow-x-auto">
      {contacts.map((contact, key) => {
        const { name, avatar } = contact;
        return (
          <Button
            size="sm"
            variant="outlined"
            color="default"
            radius="full"
            className="border-divider border-1 p-1 pr-2"
            key={key}
            startContent={
              <Avatar
                src={avatar}
                alt={name}
                width={25}
                height={25}
                size="xs"
              />
            }
          >
            {name}
          </Button>
        );
      })}
    </div>
  );
};
