import { Plus } from "lucide-react";
import { Button } from "@jamsr-ui/react";

export const NewTicket = () => {
  return (
    <>
      <div className="bg-background absolute right-0 bottom-0 left-0 pt-4">
        <Button
          fullWidth
          variant="flat"
          startContent={<Plus size={20} />}
        >
          New Ticket
        </Button>
      </div>
    </>
  );
};
