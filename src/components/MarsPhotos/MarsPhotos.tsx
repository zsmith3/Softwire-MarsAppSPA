import RoverForm from "./RoverForm";
import React, {useEffect, useState} from "react";
import ImageResult from "./ImageResult";
import {getPhotos} from "../../api/api";
import Photo from "../../api/Photo";

export default function MarsPhotos() {
    const [photos, setPhotos] = useState<Photo[] | null>(null);

    useEffect(() => {
        document.title = "Mars Photos";
    }, []);

    async function onFormSubmit(roverName: string, cameraName: string, sol: number) {
        const responsePhotos = await getPhotos(roverName, cameraName, sol);
        setPhotos(responsePhotos);
    }

    return <div>
        <h2>Mars Rover Photos</h2>

        <RoverForm onSubmit={onFormSubmit} />

        <ImageResult photoList={photos}/>
    </div>;
}
