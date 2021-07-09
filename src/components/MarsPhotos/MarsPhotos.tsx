import RoverForm from "./RoverForm";
import React, {useEffect, useState} from "react";
import ImageResult from "./ImageResult";
import {getPhotos} from "../../api/api";
import Photo from "../../api/Photo";
import {DateType, DateValue} from "../../api/EarthDate";

export default function MarsPhotos() {
    const [photos, setPhotos] = useState<Photo[] | null>(null);

    useEffect(() => {
        document.title = "Mars Photos";
    }, []);

    async function onFormSubmit(roverName: string, cameraName: string, dateType: DateType, date: DateValue) {
        const responsePhotos = await getPhotos(roverName, cameraName, dateType, date);
        setPhotos(responsePhotos);
    }

    return <div>
        <h2>Mars Rover Photos</h2>

        <RoverForm onSubmit={onFormSubmit} />

        <ImageResult photoList={photos}/>
    </div>;
}
