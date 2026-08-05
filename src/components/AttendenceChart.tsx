"use client"
import Image from 'next/image';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';




const data = [
    {
        name: 'Mon ',
        present: 60,
        absent: 40,
    },
    {
        name: 'Tue',
        present: 53,
        absent: 47,
    },
    {
        name: 'Wed',
        present: 43,
        absent: 57,
    },
    {
        name: 'Thu',
        present: 23,
        absent: 47,
    },
    {
        name: 'Fri',
        present: 83,
        absent: 50,
    },

];

const AttendenceChart = () => {
    return (
        <div className="bg-white rounded-lg p-4 h-full ">
            <div className=" flex justify-between items-center">
                <h1 className="text-lg font-semibold">Attendance</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>


            <BarChart
                style={{ width: '100%', height: "90%" }}
                barSize={20}
                responsive
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
                <XAxis dataKey="name" axisLine={false} tick={{ fill: '#d1d5db' }} tickLine={false} />
                <YAxis width="auto" axisLine={false} tick={{ fill: '#d1d5db' }} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: '10px', borderColor: "lightgray" }} />
                <Legend align="left" verticalAlign="top" wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
                <Bar dataKey="present" fill="#FAF27C" legendType="circle" radius={[10, 10, 0, 0]} />
                <Bar dataKey="absent" fill="#C3EBFA" legendType="circle" radius={[10, 10, 0, 0]} />
            </BarChart>
        </div>
    )
}

export default AttendenceChart