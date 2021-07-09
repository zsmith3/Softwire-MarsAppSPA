import React from "react";
import APOD from "../api/APOD";

export default function APODImage(props: {apod: APOD}) {
    return <div className="APODImage">
        <div className="apodImageContainer">
            <div className="imageHelper"></div>
            <img src={props.apod.url} alt={props.apod.title}/>
        </div>

        <div className="apodDesc">
            {props.apod.title}
        </div>
    </div>;
}
