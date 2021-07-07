import React from "react";
import InfoCard from "./InfoCard";


export default class NasaInfo extends React.Component {
    render() {
        return <InfoCard title="NASA" paragraph1="NASA is the space agency of the United States government."
                         paragraph2="They sent the first man to the moon." imgSrc="images/nasa.png"/>
    }
}
