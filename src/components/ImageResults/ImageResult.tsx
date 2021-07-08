import React, {useState} from "react";
import Image from "./Image";
import Photo from "../../dataClasses/Photo";

export default function ImageResult(props: {PhotoList: Photo[]}) {
    console.log(props.PhotoList)

    return (
        <div className="ImageResult">
            <h1>Rover Image Search Results</h1>
            <br/>
            {props.PhotoList.map(photo => <Image photo={photo}/>)}
        </div>
    )

}