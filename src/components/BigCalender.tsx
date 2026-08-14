"use client";
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from 'react';


const localizer = momentLocalizer(moment)

const BigCalender = ({ data }: { data: { title: string; start: Date; end: Date }[] }) => {
    const [view, setview] = useState<View>(Views.WORK_WEEK);

    const handleOnChangeView = (selectedView: View) => {
        setview(selectedView);
    }


    return (
        <Calendar
            localizer={localizer}
            events={data}
            startAccessor="start"
            endAccessor="end"
            views={{ work_week: true, day: true }}
            view={view}
            style={{ height: "98%" }}
            onView={handleOnChangeView}
            min={new Date(2026, 7, 5, 8, 0, 0)}
            max={new Date(2026, 7, 5, 17, 0, 0)}
        />
    )
}


export default BigCalender;