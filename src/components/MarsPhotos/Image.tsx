import React from "react";
import Photo from "../../api/Photo";
import "./Image.scss"

export default function Image(props: {photo: Photo}) {
    return (
        <div className="Image">
            <div className="imageContainer">
                <div className="imageHelper"></div>
                <img src={props.photo.img_src}/>
            </div>

            <div className="desc"> This image was taken by {props.photo.rover.name} using the {props.photo.camera.name} Camera <br/></div>
        </div>
    )
}
