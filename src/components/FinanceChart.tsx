"use client"
import Image from "next/image"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



const data = [
    {
        name: 'Jan ',
        income: 60,
        expense: 40,
    },
    {
        name: 'Feb',
        income: 53,
        expense: 47,
    },
    {
        name: 'Mar',
        income: 43,
        expense: 57,
    },
    {
        name: 'Apr',
        income: 23,
        expense: 47,
    },
    {
        name: 'May',
        income: 83,
        expense: 50,
    },
    {
        name: 'Jun',
        income: 83,
        expense: 50,
    },
    {
        name: 'Jul',
        income: 83,
        expense: 50,
    },
    {
        name: 'Aug',
        income: 83,
        expense: 50,
    },
    {
        name: 'Sep',
        income: 83,
        expense: 50,
    },
    {
        name: 'Oct',
        income: 83,
        expense: 50,
    },
    {
        name: 'Nov',
        income: 83,
        expense: 50,
    },
    {
        name: 'Dec',
        income: 83,
        expense: 50,
    }

];



const FinanceChart = () => {
    return (
        <div className='bg-white rounded-xl w-full h-full p-4'>
            {/* Title */}
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Finance</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>


            {/* CHART */}
            <LineChart
                style={{ width: '100%', height: '90%' }}
                responsive
                data={data}
                margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                <XAxis dataKey="name" axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} tickMargin={10} interval={0} />
                <YAxis width="auto" stroke="#ddd" tickLine={false} tickMargin={6} />
                <Tooltip
                    cursor={{
                        stroke: 'var(--color-border-2)',
                    }}
                    contentStyle={{
                        backgroundColor: 'var(--color-surface-raised)',
                        borderColor: 'var(--color-border-2)',
                    }}
                />
                <Legend align="center" verticalAlign="top" wrapperStyle={{ paddingTop: '10px', paddingBottom: "30px" }} />
                <Line
                    type="monotone"
                    dataKey="income"
                    stroke="#C3EBFA"
                    strokeWidth={3}
                />
                <Line
                    type="monotone"
                    dataKey="expense"
                    stroke="#CFCEFF"
                    strokeWidth={3}
                />
            </LineChart>

        </div>
    )
}

export default FinanceChart