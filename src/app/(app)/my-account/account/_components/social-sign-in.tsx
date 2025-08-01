import { Trash2 } from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Switch,
  Text,
} from "@jamsr-ui/react";
import { Logos } from "@/configs/icon";
import {
  AVAILABLE_SOCIAL_PROVIDERS,
  CONNECTED_SOCIAL_PROVIDERS,
} from "../data";

export const SocialSignIn = () => {
  return (
    <Card>
      <CardHeader
        heading="Social Sign In"
        className="border-divider border-b p-4"
      />
      <CardContent>
        <div className="mb-7 grid gap-4">
          {CONNECTED_SOCIAL_PROVIDERS.map((item) => {
            const { provider, email, connected } = item;
            return (
              <div
                key={provider}
                className="border-divider flex flex-wrap items-center justify-between gap-2 rounded-xl border px-3.5 py-2.5"
              >
                <div className="flex flex-wrap items-center gap-3.5">
                  {provider === "google" && <Logos.Google className="size-6" />}
                  {provider === "linkedIn" && (
                    <Logos.LinkedIn className="size-6" />
                  )}
                  <div className="space-y-0.5">
                    <Text variant="paragraph">
                      {provider === "google" && "Google"}
                      {provider === "linkedIn" && "Linkedin"}
                    </Text>
                    <Text
                      variant="paragraph2"
                      className="text-foreground-secondary"
                    >
                      {email}
                    </Text>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <Switch
                    defaultChecked={connected}
                    size="sm"
                  />
                  <IconButton
                    label="Delete Provider"
                    size="sm"
                    variant="light"
                  >
                    <Trash2 size={16} />
                  </IconButton>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mb-5 space-y-0.5">
          <Text
            variant="body1"
            className="font-medium"
          >
            More Social Sign in options
          </Text>
          <Text
            variant="paragraph2"
            className="text-foreground-secondary"
          >
            Effortless access awaits! Connect seamlessly with your preferred
            social account.
          </Text>
        </div>

        <div className="mb-7.5 flex flex-wrap items-center gap-3">
          {AVAILABLE_SOCIAL_PROVIDERS.map((provider) => (
            <Button
              key={provider}
              variant="outlined"
              startContent={
                provider === "apple" ? (
                  <Logos.Apple className="size-5" />
                ) : provider === "microsoft" ? (
                  <Logos.Microsoft className="size-5" />
                ) : provider === "facebook" ? (
                  <Logos.Facebook className="size-5" />
                ) : null
              }
            >
              {provider === "apple" && "Sign in with Apple"}
              {provider === "microsoft" && "Sign in with Microsoft"}
              {provider === "facebook" && "Sign in with Facebook"}
            </Button>
          ))}
        </div>

        <div className="flex justify-end">
          <Button color="primary">Save Changes</Button>
        </div>
      </CardContent>
    </Card>
  );
};
