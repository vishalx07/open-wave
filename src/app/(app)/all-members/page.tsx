import { Table } from "./_components/table";

type Props = {
  searchParams: Promise<{ [key in "tab"]: string | undefined }>;
};

export default async function page({ searchParams }: Props) {
  const { tab } = await searchParams;

  return (
    <>
      <Table tab={tab} />
    </>
  );
}
