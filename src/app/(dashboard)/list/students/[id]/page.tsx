import Announcements from "@/components/Announcements"
import BigCalender from "@/components/BigCalender"
import Performance from "@/components/Performance"
import Image from "next/image"
import Link from "next/link"

const SingleStudentPage = () => {
    return (
        <div className=" flex flex-1 p-4 flex-col xl:flex-row gap-4">
            {/* LEFT */}
            <div className="w-full xl:w-2/3">
                {/* Top */}
                <div className="flex flex-col lg:flex-row gap-4">

                    {/* userInfo card */}
                    <div className="bg-lamaSky py-6 px-2 rounded-md flex-1 flex gap-4">
                        <div className="w-1/3 ">
                            <Image src="https://images.pexels.com/photos/1184572/pexels-photo-1184572.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" width={144} height={144} className="w-36 h-36  rounded-full object-cover" />
                        </div>

                        <div className="w-2/3 flex flex-col justify-between gap-4">
                            <h1 className="text-xl font-semibold">James Smith</h1>
                            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                                <div className="w-full md:w-1/3 lg:w-full xl:w-1/3 flex items-center gap-2">
                                    <Image src="/blood.png" alt="" width={14} height={14} />
                                    <span>A+</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full xl:w-1/3 flex items-center gap-2">
                                    <Image src="/date.png" alt="" width={14} height={14} />
                                    <span>January 2027</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full xl:w-1/3 flex items-center gap-2">
                                    <Image src="/mail.png" alt="" width={14} height={14} />
                                    <span>user@gmail.com</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full xl:w-1/3 flex items-center gap-2">
                                    <Image src="/phone.png" alt="" width={14} height={14} />
                                    <span>+92 324 1050966</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Small card */}
                    <div className="flex-1 flex gap-4 justify-between flex-wrap">
                        {/* 1st card */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image src="/singleAttendance.png" alt="" width={24} height={24} className="w-6 h-6" />
                            <div>
                                <h1 className="text-xl font-semibold">90%</h1>
                                <span className="text-sm text-gray-400">Attendance</span>
                            </div>
                        </div>
                        {/* 2nd card */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image src="/singleBranch.png" alt="" width={24} height={24} className="w-6 h-6" />
                            <div>
                                <h1 className="text-xl font-semibold">6th</h1>
                                <span className="text-sm text-gray-400">Grade</span>
                            </div>
                        </div>

                        {/* 3rd card */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image src="/singleLesson.png" alt="" width={24} height={24} className="w-6 h-6" />
                            <div>
                                <h1 className="text-xl font-semibold">18</h1>
                                <span className="text-sm text-gray-400">Lessons</span>
                            </div>
                        </div>

                        {/* 4th card */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image src="/singleClass.png" alt="" width={24} height={24} className="w-6 h-6" />
                            <div>
                                <h1 className="text-xl font-semibold">6A</h1>
                                <span className="text-sm text-gray-400">Classes</span>
                            </div>
                        </div>

                    </div>

                </div>

                {/* BOTTOM */}
                <div className="mt-4 bg-white rounded-md p-4 h-[800px] ">
                    <h1>Student&apos;s Schedule</h1>
                    <BigCalender />
                </div>
            </div>




            {/* RIGHT */}
            <div className="w-full xl:w-1/3 flex flex-col gap-4">
                <div className="bg-white p-4 rounded-md ">
                    <h1 className="text-xl font-semibold">Shortcuts</h1>
                    <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
                        <Link href={`/list/teachers?classId=${2}`} className="p-3 rounded-md bg-lamaSkyLight">Student&apos;s Lessons</Link>
                        <Link href="/" className="p-3 rounded-md bg-lamaPurpleLight">Student&apos;s Teachers</Link>
                        <Link href="/" className="p-3 rounded-md bg-lamaYellowLight">Student&apos;s Exams</Link>
                        <Link href="/" className="p-3 rounded-md bg-pink-50">Student&apos;s Assignments</Link>
                        <Link href="/" className="p-3 rounded-md bg-lamaSkyLight">Student&apos;s Result</Link>

                    </div>
                </div>
                <Performance />
                <Announcements />
            </div>
        </div>
    )
}

export default SingleStudentPage