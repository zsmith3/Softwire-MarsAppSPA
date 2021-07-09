import React, {useEffect, useState} from "react";
import {getAPODs} from "../api/api";
import APOD from "../api/APOD";
import APODImage from "./APODImage";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "./APODCalendar.scss";
import EarthDate from "../api/EarthDate";

export default function APODCalendar() {
    const [date, setDate] = useState(new Date());
    const [loaded, setLoaded] = useState(false);
    const [apods, setApods] = useState<APOD[]>([]);

    function getAPODDisplay(view: string, date: Date) {
        if (view !== 'month') return null;
        const apod = apods.find(apod => (apod.date as EarthDate).equals(date));
        if (apod) {
            return <APODImage apod={apod} />;
        } else return null;
    }

    if (!apods.filter(apod => (apod.date as EarthDate).month === date.getMonth() + 1).length) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const lastDay = new Date(year, month, 0).getDate();
        const startDate = new EarthDate({year: year, month: month, day: 1} as EarthDate);
        let endDate = new EarthDate({year: year, month: month, day: lastDay} as EarthDate);
        const curDate = new Date();
        const curEarthDate = new EarthDate({year: curDate.getFullYear(), month: curDate.getMonth() + 1, day: curDate.getDate()} as EarthDate);
        if (curEarthDate.lt(endDate)) endDate = curEarthDate;
        getAPODs(startDate.toRemoteFormat(), endDate.toRemoteFormat()).then(apods => {
            setApods(apods);
            setLoaded(true);
        });
    }

    return <div>
        {loaded || <p>Loading...</p>}
        <Calendar
            tileContent={({ activeStartDate, date, view }) => getAPODDisplay(view, date)}
            onClickMonth={value => {setDate(value); setLoaded(false)}}
        />
    </div>;
}
