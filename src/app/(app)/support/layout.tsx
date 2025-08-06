import { Suspense } from "react";
import { Card, CardContent, Divider } from "@jamsr-ui/react";
import { TicketList } from "./_components/ticket-list";

type Props = {
  children: React.ReactNode;
};

export default async function layout({ children }: Props) {
  return (
    <Card className="h-full">
      <CardContent className="absolute inset-0 flex size-full gap-4">
        <Suspense>
          <TicketList />
        </Suspense>

        <Divider
          orientation="vertical"
          className="-my-4 max-md:hidden"
        />

        <div className="size-full max-md:hidden">{children}</div>
      </CardContent>
    </Card>
  );
}
