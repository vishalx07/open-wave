import { CourseProgress } from "./_components/course-progress";
import { Courses } from "./_components/courses";
import { CurrentProject } from "./_components/current-project";
import { DailyFeedback } from "./_components/daily-feeback";
import { DailyWorkHours } from "./_components/daily-work-hours";
import { EmployeeRating } from "./_components/employee-rating";
import { EmployeeSpotlight } from "./_components/employee-spotlight";
import { Notes } from "./_components/notes";
import { Schedule } from "./_components/schedule";
import { StatusTracker } from "./_components/status-tracker";
import { TimeOff } from "./_components/time-off";
import { TimeTracker } from "./_components/time-tracker";
import { TrainingAnalysis } from "./_components/training-analysis";
import { WorkHourAnalysis } from "./_components/work-hour-analysis";

export default function page() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(344px,1fr))] items-start justify-center gap-6">
      <TimeOff />
      <CurrentProject />
      <Schedule />
      <StatusTracker />
      <Notes />
      <div className="grid gap-6">
        <CourseProgress />
        <DailyWorkHours />
      </div>
      <DailyFeedback />
      <EmployeeSpotlight />
      <Courses />
      <TimeTracker />
      <div className="[grid-column:1/-1] grid grid-cols-3 gap-6 xl:grid-cols-6">
        <div className="col-span-3 grid gap-6">
          <EmployeeRating />
          <TrainingAnalysis />
        </div>
        <WorkHourAnalysis />
      </div>
    </div>
  );
}
