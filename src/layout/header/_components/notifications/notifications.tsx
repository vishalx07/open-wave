import { useState } from "react";
import { Bell, X } from "lucide-react";
import { useDisclosure } from "@jamsr-ui/hooks";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  IconButton,
  Tab,
  Tabs,
  Text,
} from "@jamsr-ui/react";
import { cn } from "@/lib/tw-merge";
import { TABS } from "./data";

export const Notifications = () => {
  const { isOpen, onClose, setIsOpen, onOpen } = useDisclosure();
  const [activeTab, setActiveTab] = useState<"all" | "new" | "read">("new");

  return (
    <div>
      <IconButton
        label="Notification Button"
        radius="full"
        size="sm"
        variant="light"
        className="size-9"
        onClick={onOpen}
      >
        <Bell className="size-4.5" />
      </IconButton>

      <Drawer
        isOpen={isOpen}
        size="md"
        scrollBehavior="inside"
        closeButton={null}
        onOpenChange={setIsOpen}
      >
        <DrawerHeader className="flex flex-col gap-2 pb-0">
          <div className="flex items-center justify-between gap-4">
            <Text
              variant="h6"
              className="font-medium"
            >
              Notifications
            </Text>
            <IconButton
              label="Close Button"
              size="sm"
              variant="light"
              radius="full"
              onClick={onClose}
            >
              <X size={16} />
            </IconButton>
          </div>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            variant="underlined"
            classNames={{
              base: "border-b border-divider -mx-4 bg-content2",
              tabList: "p-0 px-6 rounded-none gap-10",
              tabContent: "font-medium",
              cursor: "w-full",
            }}
          >
            {TABS.map((tab) => {
              const { label, value } = tab;
              return (
                <Tab
                  key={value}
                  heading={label}
                  value={value}
                  className={cn("h-10 p-0")}
                />
              );
            })}
          </Tabs>
        </DrawerHeader>

        <DrawerBody>
          
        </DrawerBody>

        <DrawerFooter className="border-divider border-t">
          <div className="grid w-full grid-cols-2 gap-4">
            <Button variant="outlined">Archive all</Button>
            <Button variant="outlined">Mark all as read</Button>
          </div>
        </DrawerFooter>
      </Drawer>
    </div>
  );
};
