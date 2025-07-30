import { ChevronLeftIcon, KeyRoundIcon } from "lucide-react";
import { Card, CardContent, Link } from "@jamsr-ui/react";
import { DummyLogo } from "@/components/dummy-logo";
import { COMPONENT_ROUTES } from "@/configs/routes/component";
import { Form } from "./_components/form";
import { TopHeading } from "./_components/top-heading";

export default function page() {
  return (
    <div className="flex h-svh w-full items-center justify-center bg-[url(/images/login-background.jpg)] bg-cover bg-center p-4 sm:p-8">
      <DummyLogo className="absolute top-10 right-10" />
      <Card>
        <CardContent className="flex flex-col gap-4">
          <TopHeading
            icon={<KeyRoundIcon />}
            heading={"Reset Password"}
            subHeading={
              "Set a new password that's unique and secure. Avoid using old passwords."
            }
            className="mb-4"
          />
          <Form />
          <Link
            className="text-muted-foreground flex items-center justify-center text-center text-sm"
            href={COMPONENT_ROUTES.auth.login.v1}
          >
            <ChevronLeftIcon size={16} /> Back to login
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
