import { Conversation } from "./_components/conversation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function page({ params }: Props) {
  const { id } = await params;

  return <Conversation id={id} />;
}
