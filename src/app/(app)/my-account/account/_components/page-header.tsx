import { Button, Text } from "@jamsr-ui/react";

export const PageHeader = () => {
  return (
    <div className="flex items-center justify-between gap-5 pb-7.5">
      <div className="space-y-1">
        <Text variant="body2">User Profile</Text>
        <Text
          variant="paragraph"
          className="text-foreground-secondary"
        >
          Central Hub for Personal Customization
        </Text>
      </div>

      <div className="space-x-2">
        <Button variant="outlined">Public Profile</Button>
        <Button color="primary">Account Settings</Button>
      </div>
    </div>
  );
};
