import React from "react";
import Photo from "../../dataClasses/Photo";
import "./Image.scss"

export default function Image(props: {photo: Photo}) {
    return (
        <div className="Image">
            <img src={props.photo.img_src}/>
            <div className="desc"> This image was taken by {props.photo.rover.name} using the {props.photo.camera.name} Camera <br/></div>
        </div>
    )
}