import { Plus } from "lucide-react";
import { Button, Text } from "@jamsr-ui/react";

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
        startContent={<Plus className="size-4" />}
      >
        Add User
      </Button>
    </div>
  );
};
