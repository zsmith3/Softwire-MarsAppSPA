import React, {useState} from "react";
import EarthDate, {DateType, DateValue} from "../../api/EarthDate";

function getDateError(dateType: DateType, date: DateValue, maxSol?: number, minDate?: EarthDate, maxDate?: EarthDate) {
    if (dateType === "sol") {
        if (date < 0) return "Please enter a sol greater than zero";
        else if (maxSol && date >= maxSol) return `Please enter a sol at most ${maxSol}`;
        else return false;
    } else {
        try {
            const earthDate = new EarthDate(date as string);
            if (minDate && earthDate.lt(minDate)) return `Please enter a date at least ${minDate}`;
            else if (maxDate && earthDate.gt(maxDate)) return `Please enter a date at most ${maxDate}`;
            else return false;
        } catch (error) {
            return "Please enter a valid date";
        }
    }
}

export default function DateInput(props: { onChange: (dateType: DateType, date: DateValue) => void, maxSol?: number, minDate?: EarthDate, maxDate?: EarthDate }) {
    const [dateType, setDateType] = useState<DateType>("sol");
    const [date, setDate] = useState<DateValue>(1000);

    function updateValue(newDateType: DateType | null, newDate: DateValue | null) {
        if (newDateType) setDateType(newDateType);
        if (newDate) setDate(newDate);

        const curDateType = newDateType || dateType;
        const curDate = newDate || date;

        if (!getDateError(curDateType, curDate, props.maxSol, props.minDate, props.maxDate)) {
            props.onChange(curDateType, curDateType === "earth_date" ? (new EarthDate(curDate as string)).toRemoteFormat() : curDate);
        }
    }

    return <div>
        <input type="radio" name="dateType" value="sol" checked={dateType === "sol"} onChange={() => updateValue("sol", null)}/>
        <label htmlFor="sol">
            Sol:
            <input type="number"
                   className="text-input"
                   disabled={dateType !== "sol"}
                   placeholder="Enter sol"
                   value={dateType === "sol" ? date : ""}
                   onInput={event => updateValue(null, parseInt((event.target as any).value))}/>
        </label>

        <br/>

        <input type="radio" name="dateType" value="earth_date" checked={dateType === "earth_date"} onChange={() => updateValue("earth_date", null)}/>
        <label htmlFor="earth_date">
            Earth Date:
            <input type="text"
                   className="text-input"
                   disabled={dateType !== "earth_date"}
                   placeholder="Enter earth date"
                   value={dateType === "earth_date" ? date : ""}
                   onInput={event => updateValue(null, (event.target as any).value)}/>
        </label>
        <p>{getDateError(dateType, date, props.maxSol, props.minDate, props.maxDate)}</p>
    </div>;
}
