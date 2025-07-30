"use client";

import { Link } from "lucide-react";
import { Button, Text, toast } from "@jamsr-ui/react";

export const PageHeader = () => {
  return (
    <div className="mb-5 flex items-center justify-between gap-5">
      <Text
        as="h3"
        variant="h5"
      >
        Users
      </Text>
      <Button
        color="primary"
        startContent={<Link className="size-4" />}
        onClick={() => {
          toast.success("Referral link copied!", { position: "top-right" });
        }}
      >
        Referral Link
      </Button>
    </div>
  );
};
