import axios from "axios";
import Photo from "./Photo";
import Rover from "./Rover";
import EarthDate, {DateType, DateValue} from "../api/EarthDate";

export async function getRovers(): Promise<any[]> {
    const response = await axios.get("http://localhost:8000/rovers");
    const rovers: Rover[] = response.data.rovers;
    return rovers.map(rover => new Rover(rover));
}

export async function getPhotos(roverName: string, cameraName: string, dateType: DateType, date: DateValue) {
    const response = await axios.get(`http://localhost:8000/rovers/${roverName}/photos/${cameraName}?${dateType}=${date}`);
    const photos: Photo[] = response.data.photos;
    return photos.map(photo => new Photo(photo));
}
