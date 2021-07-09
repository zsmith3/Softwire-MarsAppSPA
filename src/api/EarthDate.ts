function twoPad(num: number) {
    return `00${num}`.slice(-2);
}

export default class EarthDate {
    day: number;
    month: number;
    year: number;

    constructor(dateObj: string | EarthDate) {
        if (typeof dateObj === "string") {
            if (dateObj.length !== 10) throw "Invalid date format (wrong length)";
            if (dateObj[2] === "/" && dateObj[5] === "/") {
                this.day = parseInt(dateObj.slice(0, 2));
                this.month = parseInt(dateObj.slice(3, 5));
                this.year = parseInt(dateObj.slice(6, 10));
            } else if (dateObj[4] === "-" && dateObj[7] === "-") {
                this.year = parseInt(dateObj.slice(0, 4));
                this.month = parseInt(dateObj.slice(5, 7));
                this.day = parseInt(dateObj.slice(8, 10));
            } else throw "Invalid date format (wrong separators)";
            if (isNaN(this.year) || isNaN(this.month) || isNaN(this.day)) throw "Invalid date format (NaN)";
        } else {
            this.year = dateObj.year;
            this.month = dateObj.month;
            this.day = dateObj.day;
        }
    }

    toRemoteFormat() {
        return `${this.year}-${twoPad(this.month)}-${twoPad(this.day)}`;
    }

    toString() {
        return `${twoPad(this.day)}/${twoPad(this.month)}/${this.year}`;
    }

    lt (otherDate: EarthDate) {
        if (this.year < otherDate.year) return true;
        else if (this.year > otherDate.year) return false;

        if (this.month < otherDate.month) return true;
        else if (this.month > otherDate.month) return false;

        if (this.day < otherDate.day) return true;

        return false;
    }

    gt (otherDate: EarthDate) {
        return otherDate.lt(this);
    }
}

export type DateType = "sol" | "earth_date";
export type DateValue = number | string;
