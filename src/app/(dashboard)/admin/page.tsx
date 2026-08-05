import UserCard from "@/components/UserCard";
import CountChart from "@/components/CountChart";
import AttendenceChart from "@/components/AttendenceChart";
import FinanceChart from "@/components/FinanceChart";
import EventCalendar from "@/components/EventCalendar";

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* user Card */}
        <div className="flex gap-4 justify-between flex-wrap ">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>

        {/* Middle Charts */}
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>

          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendenceChart />
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
        <EventCalendar />
      </div>


    </div>
  )
}

export default AdminPage