import React from "react";
import APOD from "../api/APOD";

export default function APODImage(props: {apod: APOD}) {
    return <div className="Image">
        <div className="imageContainer">
            <div className="imageHelper"></div>
            <img src={props.apod.url} alt={props.apod.title}/>
        </div>

        <div className="desc">
            {props.apod.title}
        </div>
    </div>;
}
