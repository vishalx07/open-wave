import { Conversation } from "./_components/conversation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function page({ params }: Props) {
  const { id } = await params;

  return (
    <>
      <div>
        Ticket id <span className="text-primary">#{id}</span>
        <Conversation id={id} />
      </div>
    </>
  );
}
