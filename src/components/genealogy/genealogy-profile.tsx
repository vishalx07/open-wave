import { Avatar } from "@jamsr-ui/next";
import { Chip, Text } from "@jamsr-ui/react";
import { fDateTime } from "@/utils/time";
import { UserStatus, type GenealogyUser } from "./types";

type Props = {
  data: GenealogyUser;
};
export const GenealogyProfile = ({ data }: Props) => {
  const {
    avatar,
    userId,
    userName,
    fullName,
    email,
    referralId,
    createdAt,
    status,
  } = data;

  const getColorByStatus = (status: UserStatus) => {
    switch (status) {
      case UserStatus.ACTIVE:
        return "success";
      case UserStatus.BLOCKED:
        return "danger";
    }
  };

  const details = [
    {
      label: "Full Name",
      value: fullName,
    },
    {
      label: "User ID",
      value: userId,
    },
    {
      label: "User Name",
      value: userName,
    },
    {
      label: "Email",
      value: email,
    },
    {
      label: "Referral Id",
      value: referralId ?? "-",
    },
    {
      label: "Member Since",
      value: fDateTime(createdAt),
    },
    {
      label: "Status",
      value: (
        <Chip
          size="sm"
          variant="solid"
          color={getColorByStatus(status)}
        >
          {UserStatus[status]}
        </Chip>
      ),
    },
  ];
  return (
    <div className="flex flex-col">
      <Avatar
        alt={fullName}
        src={avatar ?? ""}
        width={200}
        height={200}
        size="xl"
        className="mx-auto size-20 md:size-24"
      />
      <div className="mt-10 space-y-4">
        {details.map((detail, ind) => (
          <div
            className="flex flex-col"
            key={ind}
          >
            <Text
              as="p"
              className="text-foreground-secondary text-md"
            >
              {detail.label}
            </Text>
            <span>{detail.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
