"use client";

import { useEffect } from "react";
import Image from "next/image";
import HelpCenter from "~/images/help-center.webp";
import { Text } from "@jamsr-ui/react";
import { useTicketSelect } from "@/stores/use-ticket-select";

export const EmptyTicketContent = () => {
  const { reset } = useTicketSelect();

  useEffect(() => {
    reset();
  }, []);

  return (
    <div className="space-y-2">
      <Image
        src={HelpCenter}
        alt="Help Center"
        className="mx-auto w-full max-w-[200px]"
      />
      <div className="space-y-1">
        <Text
          variant="h3"
          className="text-center"
        >
          Welcome to help center
        </Text>
        <p className="text-foreground-secondary text-center">
          If you've any issue then feel free to create a ticket.
        </p>
      </div>
    </div>
  );
};
