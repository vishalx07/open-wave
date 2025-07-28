import { redirect } from "next/navigation";
import { COMPONENT_ROUTES } from "@/configs/routes/component";

export const GET = () => {
  redirect(COMPONENT_ROUTES.dashboard);
};
