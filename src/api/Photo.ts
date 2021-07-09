import Rover from "./Rover";
import Camera from "./Camera";
import EarthDate from "./EarthDate";

export default class Photo {
    id: number;
    img_src: string;
    earth_date: EarthDate | string;
    camera: Camera;
    rover: Rover;

    constructor (photo: Photo) {
        this.id = photo.id;
        this.img_src = photo.img_src;
        this.earth_date = new EarthDate(photo.earth_date);
        this.camera = new Camera(photo.camera);
        this.rover = new Rover(photo.rover);
    }
}
