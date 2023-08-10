class Home {
    constructor(rooms, bathroom, squareFeet) {
        this.rooms = rooms;
        this.bathroom = bathroom;
        this.squareFeet = squareFeet;
    }
    summary() {
        return `My home has ${this.rooms} rooms and ${this.bathroom} bathrooms and is ${this.squareFeet} square feet.`
    }
}

class SingleFamilyHome extends Home {
    constructor(rooms, bathroom, squareFeet, yardSize) {
        super(rooms, bathroom, squareFeet);
        this.yardSize = yardSize;
    }
    summary() {
        return `${super.summary} It has ${this.yardSize} sq ft yard.`
    }
}

class Apartment extends Home {
    constructor(rooms, bathroom, squareFeet, floor) {
        super(rooms, bathroom, squareFeet);
        this.floor = floor;
    }
    summary() {
        return `${super.summary} It is on ${this.floor} floor.`
    }
}