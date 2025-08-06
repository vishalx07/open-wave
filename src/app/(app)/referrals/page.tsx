import { AllTimeReferrals } from "./_components/all-time-referrals";
import { ReferralDetails } from "./_components/referral-details";
import { Table } from "./_components/table";
import { TopCountries } from "./_components/top-countries";

type Props = {
  searchParams: Promise<{ [key in "tab"]: string | undefined }>;
};

export default async function page({ searchParams }: Props) {
  const { tab } = await searchParams;

  return (
    <div className="flex flex-col gap-6">
      <ReferralDetails />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <AllTimeReferrals />
        <TopCountries />
      </div>
      <Table tab={tab} />
    </div>
  );
}
