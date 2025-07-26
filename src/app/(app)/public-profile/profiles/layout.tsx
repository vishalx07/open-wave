type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <>
      <div>layout</div>
      {children}
    </>
  );
}
