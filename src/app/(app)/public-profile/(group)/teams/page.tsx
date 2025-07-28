import { PageHeader } from "./_components/page-header";
import { StatusGrid } from "./_components/status-grid";
import { Table } from "./_components/table";

export default function page() {
  return (
    <>
      <PageHeader />
      <StatusGrid />
      <Table />
    </>
  );
}
