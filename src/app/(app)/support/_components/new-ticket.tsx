import { Plus } from "lucide-react";
import {
  Button,
  Chip,
  Dialog,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  Select,
  SelectItem,
} from "@jamsr-ui/react";
import { TICKET_CATEGORIES } from "../data";

export const NewTicket = () => {
  return (
    <div className="bg-background pt-2">
      <Dialog radius="2xl">
        <DialogTrigger>
          <Button
            fullWidth
            variant="flat"
            startContent={<Plus size={20} />}
          >
            New Ticket
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>Creata a Ticket</DialogHeader>
          <DialogBody>
            <Select
              isFullWidth
              placeholder="Select Category"
            >
              {TICKET_CATEGORIES.map((category) => (
                <SelectItem
                  key={category}
                  value={category}
                >
                  {category}
                </SelectItem>
              ))}
            </Select>

            {/* <div className="flex gap-3">
              {TICKET_CATEGORIES.map((category) => (
                <DialogTrigger
                  key={category}
                  action="close"
                >
                  <Chip
                    variant="flat"
                    className="cursor-pointer"
                  >
                    {category}
                  </Chip>
                </DialogTrigger>
              ))}
            </div> */}
          </DialogBody>

          <DialogFooter>
            <DialogTrigger action="close">
              <Button
                size="sm"
                variant="outlined"
              >
                Cancel
              </Button>
            </DialogTrigger>
            <DialogTrigger action="close">
              <Button
                size="sm"
                color="primary"
              >
                Submit
              </Button>
            </DialogTrigger>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
