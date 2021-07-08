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

    async function onFormSubmit(roverName: string, cameraName: string) {
        const responsePhotos = await getPhotos(roverName, cameraName);
        setPhotos(responsePhotos);
    }

    return <div>
        <RoverForm onSubmit={onFormSubmit} />

        <ImageResult photoList={photos}/>
    </div>;
}
