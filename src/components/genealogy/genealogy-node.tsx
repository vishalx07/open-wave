import { Avatar } from "@jamsr-ui/next";
import { Card, CardContent, Text } from "@jamsr-ui/react";
import { type GenealogyUser } from "./types";

type Props = {
  data: GenealogyUser;
};

export const GenealogyNode = ({ data }: Props) => {
  const { avatar, fullName, userName, userId } = data;
  return (
    <div
      data-slot="node"
      className="relative inline-flex size-full flex-col items-center"
    >
      <div className="absolute top-0 left-1/2 z-1 -translate-x-1/2">
        <Avatar
          size="lg"
          src={avatar ?? ""}
          alt={userName}
          width={100}
          height={100}
        />
      </div>
      <Card className="border-divider mt-7 size-full border bg-[url('/images/bg-3-dark.png')] bg-cover bg-center bg-no-repeat">
        <CardContent className="grid size-full place-content-center gap-1 p-4">
          <Text
            as="p"
            className="text-center font-semibold"
          >
            {fullName}
          </Text>
          <Text
            as="p"
            className="text-foreground-secondary text-center"
          >
            {userId}
          </Text>
        </CardContent>
      </Card>
    </div>
  );
};
