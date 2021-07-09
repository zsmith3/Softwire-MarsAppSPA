import EarthDate from "./EarthDate";

export default class APOD {
    url: string;
    title: string;
    date: EarthDate | string;

    constructor(apod: APOD) {
        this.url = apod.url;
        this.title = apod.title;
        this.date = new EarthDate(apod.date);
    }
}
