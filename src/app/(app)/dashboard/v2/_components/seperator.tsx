export const Seperator = ({ label }: { label?: string }) => {
  return (
    <div className="text-foreground-secondary bg-content2 px-5 py-1.5 uppercase text-sm">
      {label}
    </div>
  );
};
