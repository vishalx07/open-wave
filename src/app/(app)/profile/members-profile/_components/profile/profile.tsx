import { Avatar } from "@jamsr-ui/react";
import { Icons } from "@/configs/icon";
import { PROFILE } from "./data";

export const Profile = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/images/bg-1-dark.png)",
      }}
    >
      <div className="flex flex-col items-center gap-2 py-4 lg:gap-3.5 lg:pt-5 lg:pb-10">
        <Avatar
          isBordered
          src={PROFILE.avatarUrl}
          alt={PROFILE.name}
          color="success"
          size="xl"
          width={100}
          height={100}
          className="size-[100px] ring-3"
        />

        <div className="flex items-center gap-1.5">
          <h3 className="text-mono text-lg leading-5 font-semibold">
            {PROFILE.name}
          </h3>
          <Icons.Verified className="text-primary" />
        </div>

        <div className="flex flex-wrap justify-center gap-1 lg:gap-4.5">
          {PROFILE.details.map((item) => {
            const { name, value, icon: Icon } = item;
            return (
              <div
                key={name}
                className="text-foreground-secondary flex items-center gap-1.25 text-sm"
              >
                <Icon className="size-4" />
                <span>{value}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
