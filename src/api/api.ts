import axios from "axios";
import Photo from "./Photo";
import APOD from "./APOD";
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

export async function getAPODs(startDate: string, endDate: string): Promise<APOD[]> {
    const response = await axios.get(`http://localhost:8000/apod?start_date=${startDate}&end_date=${endDate}`);
    const apods: APOD[] = response.data;
    return apods.map(apod => new APOD(apod));
}
