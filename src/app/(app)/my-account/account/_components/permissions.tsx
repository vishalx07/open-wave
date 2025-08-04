import { Card, CardContent, CardHeader, Switch, Text } from "@jamsr-ui/react";
import { PERMISSIONS } from "../data";

export const Permissions = () => {
  return (
    <Card>
      <CardHeader
        heading="Permissions"
        className="border-divider border-b p-4"
      />
      <CardContent>
        <div className="grid gap-4">
          {PERMISSIONS.map((item, index) => {
            const { label, description, allowed } = item;
            return (
              <div
                key={index}
                className="border-divider flex flex-wrap items-center justify-between gap-2 rounded-xl border px-3.5 py-2.5"
              >
                <div className="space-y-0.5">
                  <Text variant="paragraph">{label}</Text>
                  <Text
                    variant="paragraph2"
                    className="text-foreground-secondary"
                  >
                    {description}
                  </Text>
                </div>

                <Switch
                  defaultChecked={allowed}
                  size="sm"
                />
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
