import Camera from "./Camera";
import EarthDate from "./EarthDate";

export default class Rover {
    id: number;
    name: string;
    max_sol: number;
    landing_date: EarthDate;
    max_date: EarthDate | undefined;
    cameras: Camera[];

    constructor (rover: Rover) {
        this.id = rover.id;
        this.name = rover.name;
        this.max_sol = rover.max_sol;
        this.landing_date = new EarthDate(rover.landing_date);
        this.max_date = rover.max_date ? new EarthDate(rover.max_date) : undefined;
        this.cameras = rover.cameras.map(camera => new Camera(camera));
    }
}
