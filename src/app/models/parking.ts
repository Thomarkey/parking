export default class Parking {
    constructor(public id: string, 
                public name: string, 
                public isOpenNow: boolean, 
                public totalcapacity: number, 
                public availablecapacity: number
                ){}

    toString(): string {
        return `${this.name} - ${this.availablecapacity}/${this.totalcapacity} free. Is open: ${this.isOpenNow}`;
    }

}
