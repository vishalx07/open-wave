import { ContactList } from "../contact-list";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Text,
} from "@jamsr-ui/react";
import {
  ArrowRightLeftIcon,
  ChevronLeftCircleIcon,
  ChevronRightCircleIcon,
  PlusIcon,
  SettingsIcon,
} from "lucide-react";
import { EnterAmount } from "./enter-amount";

export const QuickTransfer = () => {
  return (
    <Card>
      <CardHeader
        heading="Quick Transfer"
        startContent={
          <ArrowRightLeftIcon className="text-foreground-secondary" />
        }
        endContent={
          <Button
            variant="outlined"
            color="default"
            startContent={<SettingsIcon size={16} />}
          >
            Advanced
          </Button>
        }
      />

      <CardContent className="flex flex-col gap-4">
        <Divider />
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <Text
              as="p"
              variant="paragraph2"
              className="text-foreground-secondary uppercase"
            >
              My Contacts (12)
            </Text>
            <div className="flex gap-2 text-foreground-secondary">
              <ChevronLeftCircleIcon size={16} className="cursor-pointer" />
              <ChevronRightCircleIcon size={16} className="cursor-pointer" />
            </div>
          </div>
          <ContactList />
        </div>
        <EnterAmount />
        <Button isDisabled variant="flat" startContent={<PlusIcon size={16} />}>
          Save a New Action
        </Button>
      </CardContent>
    </Card>
  );
};
