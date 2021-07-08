import axios from "axios";

export async function getRovers(): Promise<any[]> {
    const response = await axios.get("http://localhost:8000/rovers");
    return response.data.rovers;
}

export async function getPhotos(roverName: string, cameraName: string) {
    const response = await axios.get(`http://localhost:8000/rovers/${roverName}/photos/${cameraName}`);
    return response.data.photos;
}
