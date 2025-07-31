"use client";

import { useEffect } from "react";
import { useTicketSelect } from "@/stores/use-ticket-select";

type Props = {
  id: string;
};

export const Conversation = ({ id }: Props) => {
  const { setTicketId } = useTicketSelect();

  useEffect(() => {
    setTicketId(id);
  }, [id]);

  return null;
};
