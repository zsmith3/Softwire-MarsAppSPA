import React, {useEffect} from "react";
import APODCalendar from "../components/APODCalendar";

export default function APODPage() {
    useEffect(() => {
        document.title = "APODs";
    });

    return <APODCalendar />;
}
