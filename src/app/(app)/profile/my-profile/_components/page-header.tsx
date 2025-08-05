import { Button, Text } from "@jamsr-ui/react";

export const PageHeader = () => {
  return (
    <div className="mb-7.5 flex flex-wrap items-center justify-between gap-5">
      <div className="space-y-0.5">
        <Text
          variant="body3"
          className="font-medium"
        >
          My Profile
        </Text>
        <Text
          variant="paragraph"
          className="text-foreground-secondary"
        >
          Central Hub for Personal Customization
        </Text>
      </div>
      <div className="flex items-center gap-4">
        {/* <Button variant="outlined">Public Profile</Button>
        <Button color="primary">Profile Settings</Button> */}
      </div>
    </div>
  );
};
