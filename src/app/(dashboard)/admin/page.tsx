import UserCard from "@/components/UserCard";
import FinanceChart from "@/components/FinanceChart";
import Announcements from "@/components/Announcements";
import CountChartContainer from "@/components/CountChartContainer";
import AttendanceChartContainer from "@/components/AttendanceChartContainer";
import EventCalendarContainer from "@/components/EventCalendarContainer";

const AdminPage = async ({ searchParams }: { searchParams: Promise<{ [keys: string]: string | undefined }> }) => {
  const resolvedSearchParams = await searchParams;
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* user Card */}
        <div className="flex gap-4 justify-between flex-wrap ">
          <UserCard type="admin" />
          <UserCard type="teacher" />
          <UserCard type="student" />
          <UserCard type="parent" />
        </div>

        {/* Middle Charts */}
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChartContainer />
          </div>

          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChartContainer />
          </div>

        </div>

        {/* BOTTOM CHART */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>


      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        {/* calendar */}
        <EventCalendarContainer searchParams={resolvedSearchParams} />
        <Announcements />
      </div>


    </div>
  )
}

export default AdminPage