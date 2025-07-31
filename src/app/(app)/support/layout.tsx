import { Card, CardContent, Divider } from "@jamsr-ui/react";
import { TicketList } from "./_components/ticket-list";

type Props = {
  children: React.ReactNode;
};

export default async function layout({ children }: Props) {
  return (
    <Card className="h-full">
      <CardContent className="flex h-full w-full gap-4">
        <TicketList />

        <Divider
          orientation="vertical"
          variant="gradient"
        />

        {children}
      </CardContent>
    </Card>
  );
}
