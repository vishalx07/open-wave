import { type Metadata } from "next";
import { KeyRoundIcon } from "lucide-react";
import { Card, CardContent } from "@jamsr-ui/react";
import { DummyLogo } from "@/components/dummy-logo";
import { Form } from "./_components/form";
import { TopHeading } from "./_components/top-heading";

export const metadata: Metadata = {
  title: "Change Password v1",
};

export default function page() {
  return (
    <div className="flex h-svh w-full items-center justify-center bg-[url(/images/login-background.jpg)] bg-cover bg-center p-8">
      <DummyLogo className="absolute top-10 right-10" />
      <Card>
        <CardContent className="flex flex-col gap-4">
          <TopHeading
            icon={<KeyRoundIcon />}
            heading={"Change Password"}
          />
          <Form />
        </CardContent>
      </Card>
    </div>
  );
}
