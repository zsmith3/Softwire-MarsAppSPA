import Rover from "./Rover";
import Camera from "./Camera";

class EarthDate {
    day: string;
    month: string;
    year: string;

    constructor(dateObj: string | EarthDate) {
        if (typeof dateObj === "string") {
            this.year = dateObj.slice(0, 4);
            this.month = dateObj.slice(5, 7);
            this.day = dateObj.slice(8, 10);
        } else {
            this.year = dateObj.year;
            this.month = dateObj.month;
            this.day = dateObj.day;
        }
    }

    toString() {
        return `${this.day}/${this.month}/${this.year}`;
    }
}

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
