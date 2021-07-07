import React, {useEffect} from "react";

import InfoCard from "./InfoCard";

export default function NasaInfo() {
    useEffect(() => {
        document.title = "NASA Info";
    });
    
    return <InfoCard title="NASA" paragraph1="NASA is the space agency of the United States government."
                     paragraph2="They sent the first man to the moon." imgSrc="images/nasa.png"/>
}
