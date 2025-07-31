import { DashboardLayout } from "@/layout";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
