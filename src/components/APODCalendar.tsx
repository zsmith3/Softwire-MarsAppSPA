import React, {useEffect, useState} from "react";
import {getAPODs} from "../api/api";
import APOD from "../api/APOD";
import APODImage from "./APODImage";

export default function APODCalendar() {
    const [apods, setApods] = useState<APOD[]>([]);

    useEffect(() => {
        getAPODs("2021-07-01", "2021-07-09").then(apods => setApods(apods));
    }, []);

    return <div>
        {apods.map(apod => <APODImage apod={apod} />)}
    </div>;
}
