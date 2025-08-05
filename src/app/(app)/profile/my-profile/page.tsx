import { TwoFA } from "./_components/2fa";
import { Account } from "./_components/account";
import { AlertBox } from "./_components/alert-box";
import { PageHeader } from "./_components/page-header";
import { TrustedDevices } from "./_components/trusted-devices";

export default function page() {
  return (
    <>
      <PageHeader />

      <AlertBox />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-7.5">
        <Account />
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <TwoFA />
          <TrustedDevices />
        </div>
      </div>
    </>
  );
}
