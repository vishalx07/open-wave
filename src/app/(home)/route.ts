import { redirect } from "next/navigation";
import { APP_ROUTES } from "@/configs/routes";

export const GET = () => {
  redirect(APP_ROUTES.dashboard.root);
};
