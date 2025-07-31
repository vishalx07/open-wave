import { Avatar, Text } from "@jamsr-ui/react";

type Props = {
  avatarUrl: string;
  name: string;
  description: string;
};

export const TableUser = (props: Props) => {
  const { avatarUrl, name, description } = props;

  return (
    <div className="flex items-center gap-3">
      <Avatar
        width={50}
        height={50}
        size="md"
        src={avatarUrl}
        alt={name}
      />
      <div className="space-y-0.5">
        <p>{name}</p>
        <Text
          variant="paragraph2"
          className="text-foreground-secondary"
        >
          {description}
        </Text>
      </div>
    </div>
  );
};
