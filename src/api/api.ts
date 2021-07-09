import axios from "axios";
import Photo from "./Photo";
import APOD from "./APOD";

export async function getRovers(): Promise<any[]> {
    const response = await axios.get("http://localhost:8000/rovers");
    return response.data.rovers;
}

export async function getPhotos(roverName: string, cameraName: string, sol: number) {
    const response = await axios.get(`http://localhost:8000/rovers/${roverName}/photos/${cameraName}?sol=${sol}`);
    const photos: Photo[] = response.data.photos;
    return photos.map(photo => new Photo(photo));
}

export async function getAPODs(startDate: string, endDate: string): Promise<APOD[]> {
    const response = await axios.get(`http://localhost:8000/apod?start_date=${startDate}&end_date=${endDate}`);
    const apods: APOD[] = response.data;
    return apods.map(apod => new APOD(apod));
}
