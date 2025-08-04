import { Earnings } from "./_components/earnings";
import { GetStarted } from "./_components/get-started";
import { HighLights } from "./_components/highlights";
import { SocialMetrics } from "./_components/social-metrics";
import { TeamMeeting } from "./_components/team-meeting";
import { Teams } from "./_components/teams";

export default function Home() {
  return (
    <div className="my-8 grid gap-5 lg:gap-7.5">
      <div className="items-strech grid gap-y-5 lg:grid-cols-3 lg:gap-7.5">
        <div className="lg:col-span-1">
          <SocialMetrics />
        </div>
        <div className="lg:col-span-2">
          <GetStarted />
        </div>
      </div>

      <div className="items-strech grid gap-5 lg:grid-cols-3 lg:gap-7.5">
        <div className="lg:col-span-1">
          <HighLights />
        </div>
        <div className="lg:col-span-2">
          <Earnings />
        </div>
      </div>

      <div className="items-strech grid gap-5 lg:grid-cols-3 lg:gap-7.5">
        <div className="lg:col-span-1">
          <TeamMeeting />
        </div>
        <div className="lg:col-span-2">
          <Teams />
        </div>
      </div>
    </div>
  );
}
