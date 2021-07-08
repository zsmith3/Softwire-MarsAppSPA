import axios from "axios";
import Photo from "./Photo";

export async function getRovers(): Promise<any[]> {
    const response = await axios.get("http://localhost:8000/rovers");
    return response.data.rovers;
}

export async function getPhotos(roverName: string, cameraName: string, sol: number) {
    const response = await axios.get(`http://localhost:8000/rovers/${roverName}/photos/${cameraName}?sol=${sol}`);
    const photos: Photo[] = response.data.photos;
    return photos.map(photo => new Photo(photo));
}
