import React from "react";
import Photo from "../../api/Photo";
import "./Image.scss"

export default function Image(props: {photo: Photo}) {
    return (
        <div className="Image">
            <div className="imageContainer">
                <div className="imageHelper"></div>
                <img src={props.photo.img_src} alt={`Mars, ID: ${props.photo.id}`}/>
                <span>
                    <div id="overlay"></div>
                    <img src={props.photo.img_src} alt={`Mars, ID: ${props.photo.id}`}/>
                </span>
            </div>

            <div className="desc">
                {props.photo.earth_date.toString()}
            </div>
        </div>
    )
}
