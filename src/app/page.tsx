import CircleCheck from "~/icons/circle-check.svg";
import { Button } from "@jamsr-ui/react";

export default function page() {
  return (
    <>
      <div>Home Page</div>
      <Button startContent={<CircleCheck className="size-5" />}>
        Click Me
      </Button>
    </>
  );
}
