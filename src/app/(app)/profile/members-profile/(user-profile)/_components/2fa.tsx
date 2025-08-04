import { ShieldCheck } from "lucide-react";
import RoundedHexagon from "~/svg/rounded-hexagon.svg";
import { Card, CardContent, CardHeader, Switch, Text } from "@jamsr-ui/react";

export const TwoFA = () => {
  return (
    <Card>
      <CardHeader
        heading="Two-Factor authentication(2FA)"
        className="border-divider border-b p-4"
      />
      <CardContent>
        <div className="border-divider flex items-center gap-4 rounded-2xl border p-4">
          <div className="relative size-[50px] shrink-0">
            <RoundedHexagon className="stroke-divider fill-content2/30 h-full w-full" />
            <ShieldCheck
              size={24}
              className="text-foreground-secondary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="grow space-y-1">
            <Text
              variant="paragraph"
              className="text-foreground-secondary"
            >
              Authenticator App (TOTP)
            </Text>
            <Text
              variant="paragraph2"
              className="text-muted-foreground"
            >
              Elevate protection with an authenticator app for two-factor
              authentication.
            </Text>
          </div>
          <Switch
            defaultChecked
            size="sm"
          />
        </div>
      </CardContent>
    </Card>
  );
};
