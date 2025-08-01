import {
  CheckCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  WifiIcon,
} from "lucide-react";
import {
  Avatar,
  Card,
  CardContent,
  Chip,
  IconButton,
  Text,
} from "@jamsr-ui/react";
import { Dashboard2Icons } from "../icons";
import { CardStatus, type Card as CardType } from "../types";

type Props = {
  isIcon?: boolean;
  data: CardType;
};

const getColorByStatus = (status: CardStatus) => {
  switch (status) {
    case CardStatus.ACTIVE:
      return "text-success";
    case CardStatus.INACTIVE:
      return "text-foreground-secondary";
  }
};

export const MasterCard = ({ isIcon, data }: Props) => {
  const { name, balance, status, image } = data;
  return (
    <Card className="relative mx-auto w-full max-w-96">
      <Dashboard2Icons.MasterCardBoxIcon className="absolute top-[-152px] right-[-205px]" />
      <CardContent className="flex min-h-[188px] flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Avatar
                src={image}
                alt={name}
              />
              <WifiIcon className="rotate-90" />
            </div>
            <Chip
              size="sm"
              className="border-divider border"
              startContent={
                <CheckCircleIcon
                  size={16}
                  className={getColorByStatus(status)}
                />
              }
            >
              {status}
            </Chip>
          </div>
          <Dashboard2Icons.MasterCardIcon />
        </div>
        <div className="mt-auto flex flex-col gap-1">
          <Text
            as="p"
            className="text-foreground-secondary"
          >
            {name}
          </Text>
          <Text
            as="h1"
            variant="h1"
            className="font-semibold"
          >
            ${balance}
          </Text>
        </div>
        {isIcon && (
          <div className="absolute right-4 bottom-4 flex -space-x-[1.5px] overflow-hidden">
            <IconButton
              label="left"
              size="xs"
              variant="outlined"
              radius="none"
              className="bg-content2 rounded-tl-md rounded-bl-md"
            >
              <ChevronLeftIcon
                className="text-foreground-secondary"
                size={20}
              />
            </IconButton>
            <IconButton
              label="right"
              size="xs"
              variant="outlined"
              radius="none"
              className="rounded-tr-md rounded-br-md"
            >
              <ChevronRightIcon size={20} />
            </IconButton>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
