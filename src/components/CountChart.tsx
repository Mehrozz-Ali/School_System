"use client";
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';


// #region Sample data
const data = [
    {
        name: 'Total ',
        count: 106,
        fill: 'white',
    },
    {
        name: 'Girls',
        count: 53,
        fill: '#FAF27C',
    },
    {
        name: 'Boys',
        count: 53,
        fill: '#C3EBFA',
    },
];





const CountChart = () => {
    return (
        <div className='bg-white rounded-xl w-full h-full p-4'>
            {/* Title */}
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Students</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>

            {/* CHART */}
            <div className="relative w-full h-[70%] flex justify-center items-center">
                <RadialBarChart
                    responsive
                    style={{ width: "100%", height: "100%" }}
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius="40%"
                    outerRadius="90%"
                    barSize={30}
                >
                    <RadialBar background dataKey="count" />
                </RadialBarChart>

                <Image src="/maleFemale.png" alt=""width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* BOTTOM */}
            <div className="flex justify-center gap-16">
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-lamaSky rounded-full " />
                    <h1 className="font-bold ">1,234</h1>
                    <h1 className="text-sm text-gray-300">Boys [55%]</h1>
                </div>

                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-lamaYellow rounded-full " />
                    <h1 className="font-bold ">1,234</h1>
                    <h1 className="text-sm text-gray-300">Girls [45%]</h1>
                </div>
            </div>

        </div>
    )
}

export default CountChart