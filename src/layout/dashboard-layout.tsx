import { Sidebar } from "@/components/sidebar";
import { Header } from "./header";

type Props = {
  children: React.ReactNode;
};

export const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="light:bg-default-100 flex min-h-dvh">
      <Sidebar />
      <div className="flex min-h-dvh grow flex-col">
        <Header />
        <div className="dashboard-container">{children}</div>
      </div>
    </div>
  );
};
