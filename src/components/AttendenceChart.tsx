"use client"
import Image from 'next/image';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';





const AttendenceChart = ({ data }: { data: { name: string, present: number, absent: number }[] }) => {
    return (

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
    )
}

export default AttendenceChart