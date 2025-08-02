import { ChevronRight } from "lucide-react";
import { Avatar } from "@jamsr-ui/next";
import {
  Button,
  Dialog,
  DialogBody,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  Divider,
  Text,
} from "@jamsr-ui/react";
import { Dashboard2Icons } from "@/app/(app)/dashboard/v2/icons";
import { mockPaymentMethods as paymentMethods } from "../../_mock/payment-methods";
import { PaymentMethod } from "../../types";

export const SelectPaymentMethod = () => {
  return (
    <Dialog
      isBordered
      radius="2xl"
      size="3xl"
    >
      <DialogTrigger>
        <Button
          variant="outlined"
          startContent={
            <div className="border-divider flex size-10 items-center justify-center rounded-full border">
              <Dashboard2Icons.MasterCardIcon className="size-5" />
            </div>
          }
          radius="xl"
          size="lg"
          className="justify-start p-3"
          disableAnimation
          disableRipple
        >
          <div className="flex grow items-center justify-between gap-4">
            <span className="flex flex-col text-start">
              <span> Debit card •••• 8080</span>
              <span className="text-muted-foreground"> Expires 12/24</span>
            </span>
            <span className="text-primary flex items-center gap-2">
              Change <ChevronRight size={16} />
            </span>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="border-divider border-b text-center text-lg font-medium">
          How would you like to pay?
        </DialogHeader>
        <DialogBody className="p-10">
          <div className="mx-auto flex max-w-xl flex-col gap-4">
            <Text className="text-muted-foreground mb-4">
              You are sending 100 EURO to Isabella
            </Text>
            <div className="flex w-full grow flex-col">
              {paymentMethods.map((method) => {
                return (
                  <PaymentMethodItem
                    key={method.id}
                    method={method}
                  />
                );
              })}
            </div>
          </div>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

const PaymentMethodItem = ({ method }: { method: PaymentMethod }) => {
  return (
    <>
      <Button
        variant="light"
        startContent={
          <Avatar
            src={method.logo}
            alt={method.name}
            width={25}
            height={25}
            className="bg-background border-divider border"
          />
        }
        radius="xl"
        size="lg"
        className="justify-start p-3"
        disableAnimation
        disableRipple
      >
        <div className="flex grow items-center justify-between gap-4">
          <span className="flex w-full items-center gap-4">
            <span className="flex w-full grow flex-col text-start">
              <span>{method.name}</span>
              <span className="text-muted-foreground">
                {method.description}
              </span>
            </span>
            <span className="flex w-full grow flex-col text-start">
              <span>
                <span className="text-muted-foreground">Fee </span>
                {method.charge} EURO
              </span>
              <span>
                <span className="text-muted-foreground">Arrives </span>
                {method.arrives}
              </span>
            </span>
          </span>

          <ChevronRight size={16} />
        </div>
      </Button>
      <Divider className="my-1 last:hidden" />
    </>
  );
};
