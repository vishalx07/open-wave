import { PageHeader } from "./_components/page-header";
import { StatusGrid } from "./_components/status-grid";
import { Table } from "./_components/table";

type Props = {
  searchParams: Promise<{ [key in "tab"]: string | undefined }>;
};

export default async function page({ searchParams }: Props) {
  const { tab } = await searchParams;

  return (
    <>
      <PageHeader />
      <StatusGrid />
      <Table tab={tab} />
    </>
  );
}
