import { Sidebar } from "@/components/sidebar";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <div className="light:bg-default-100 flex h-full">
      <Sidebar />
      <div className="flex grow flex-col">
        <div className="dashboard-container">{children}</div>
      </div>
    </div>
  );
}
