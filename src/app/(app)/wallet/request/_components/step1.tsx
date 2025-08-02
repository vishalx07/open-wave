import Link from "next/link";
import { ChevronLeft, ChevronRight, Search, UsersIcon } from "lucide-react";
import { Button, Input, Text } from "@jamsr-ui/react";
import { APP_ROUTES } from "@/configs/routes";
import { UserItem } from "../../_components/user-item";
import { usersData } from "../../_mock/users";

type Props = {
  setStep: (step: number) => void;
};

export const Step1 = ({ setStep }: Props) => {
  return (
    <div className="w-full max-w-lg">
      <Text
        as="h1"
        variant="h3"
        className="mb-6 text-center"
      >
        Request
      </Text>
      <div className="flex flex-col gap-6">
        {/* search recipient */}
        <Input
          placeholder="Name, @username, email, or phone "
          fullWidth
          size="lg"
          radius="2xl"
          startContent={<Search size={20} />}
        />
        {/* add recipient */}
        <Button
          startContent={
            <span className="bg-content2 rounded-full p-3">
              <UsersIcon />
            </span>
          }
          radius="xl"
          size="lg"
          variant="light"
          className="justify-start p-3"
          onClick={() => setStep(2)}
        >
          <div className="flex grow items-center justify-between">
            <span className="flex flex-col text-start">
              <span>Anyone</span>
              <span className="text-muted-foreground">
                Share a link to get paid back
              </span>
            </span>
            <ChevronRight />
          </div>
        </Button>

        {/* saved recipients */}

        <div className="flex flex-col gap-1">
          <Text
            variant="paragraph2"
            className="text-muted-foreground"
          >
            Saved Recipients
          </Text>
          <div className="flex flex-col gap-2">
            {usersData.map((user) => {
              return (
                <UserItem
                  key={user.userId}
                  user={user}
                />
              );
            })}
          </div>
        </div>

        {/* buttons */}
        <div className="w-full space-y-2">
          <Button
            fullWidth
            size="lg"
            color="primary"
            radius="xl"
            onClick={() => setStep(2)}
          >
            Continue
          </Button>
          <Button
            fullWidth
            size="lg"
            color="default"
            radius="xl"
            variant="light"
            startContent={<ChevronLeft size={16} />}
            as={Link}
            href={APP_ROUTES.wallet.root}
          >
            Go back
          </Button>
        </div>
      </div>
    </div>
  );
};
