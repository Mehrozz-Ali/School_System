"use client";
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';







const CountChart = ({ boys, girls }: { boys: number, girls: number }) => {

    const data = [
        {
            name: 'Total ',
            count: boys + girls,
            fill: 'white',
        },
        {
            name: 'Girls',
            count: girls,
            fill: '#FAF27C',
        },
        {
            name: 'Boys',
            count: boys,
            fill: '#C3EBFA',
        },
    ];

    return (
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

            <Image src="/maleFemale.png" alt="" width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
    )
}

export default CountChart