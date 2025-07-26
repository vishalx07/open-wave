import { Card, CardHeader } from "@jamsr-ui/react";
import { TeamTable } from "./table";

export const Teams = () => {
  return (
    <Card>
      <CardHeader
        heading="Teams"
        className="border-divider border-b py-4"
      />
      <TeamTable />
    </Card>
  );
};
