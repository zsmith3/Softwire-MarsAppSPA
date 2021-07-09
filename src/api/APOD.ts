export default class APOD {
    url: string;
    title: string;

    constructor(apod: APOD) {
        this.url = apod.url;
        this.title = apod.title;
    }
}
