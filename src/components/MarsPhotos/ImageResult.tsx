import React, {useState} from "react";
import Image from "./Image";
import Photo from "../../api/Photo";

export default function ImageResult(props: { photoList: (Photo[] | null) }) {
    return (
        <div className="ImageResult">
            <h3>Results</h3>
            <div className="imageList">
                {props.photoList ? (props.photoList.length ? props.photoList.map(photo => <Image key={photo.id}
                                                                                                 photo={photo}/>) :
                    <p>No Images Found</p>) : <p>Please select search parameters.</p>}
            </div>
        </div>
    )
}
