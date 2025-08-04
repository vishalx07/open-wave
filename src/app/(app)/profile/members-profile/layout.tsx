import { Navigations } from "./_components/navigations";
import { Profile } from "./_components/profile";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <>
      <Profile />
      <Navigations />
      {children}
    </>
  );
}
