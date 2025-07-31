import { EmptyTicketContent } from "./_components/empty-ticket-content";

export default async function page() {
  return (
    <div className="flex size-full flex-col items-center justify-center">
      <EmptyTicketContent />
    </div>
  );
}
