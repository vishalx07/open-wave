import { useState } from "react";
import { ChevronRight } from "lucide-react";
import {
  Avatar,
  Button,
  Dialog,
  DialogBody,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  Divider,
} from "@jamsr-ui/react";
import { mockPaymentMethods as paymentMethods } from "../_mock/payment-methods";
import { PaymentMethod } from "../types";

export const SelectPaymentMethod = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    PaymentMethod | undefined
  >(paymentMethods[0] ?? undefined);

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
            <Avatar
              src={selectedPaymentMethod?.logo ?? ""}
              alt={selectedPaymentMethod?.name ?? ""}
            />
          }
          radius="xl"
          size="lg"
          className="justify-start p-3"
          disableAnimation
          disableRipple
        >
          <div className="flex grow items-center justify-between gap-4">
            <span className="flex flex-col text-start">
              <span>{selectedPaymentMethod?.name}</span>
              <span className="text-muted-foreground">
                {selectedPaymentMethod?.description}
              </span>
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
            <div className="flex w-full grow flex-col">
              {paymentMethods.map((method) => {
                return (
                  <DialogTrigger
                    action="close"
                    key={method.id}
                  >
                    <PaymentMethodItem
                      method={method}
                      onClick={() => {
                        setSelectedPaymentMethod(method);
                      }}
                    />
                  </DialogTrigger>
                );
              })}
            </div>
          </div>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

const PaymentMethodItem = ({
  method,
  onClick,
}: {
  method: PaymentMethod;
  onClick: () => void;
}) => {
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
        onClick={onClick}
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
                <span className="text-muted-foreground">Charge </span>
                <span className="text-white/80">{method.charge} %</span>
              </span>
              <span>
                <span className="text-muted-foreground">Arrives </span>
                <span className="text-white/80">{method.arrives}</span>
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
