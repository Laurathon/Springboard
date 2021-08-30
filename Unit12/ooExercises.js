class Vehicle {
  constructor(a, b, c) {
    for (let v1 of [a, b, c]) {
      if (v1 < 0) {
        throw new Error("Need make, model and year!");
      }
    }
    this.a = a;
    this.b = b;
    this.c = c;
    // const { a, b, c } = this;
  }
  honk() {
    return "Beep";
  }
  toString() {
    return `The vehicle is a ${this.a} ${this.b} from ${this.c} .`;
  }
}
class Car extends Vehicle {
  constructor(a, b, c) {
    super(a, b, c); //calls constructor class of Triange
    this.numWheels = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(a, b, c) {
    super(a, b, c); //calls constructor class of Triange
    this.numWheels = 2;
  }
  revEngine() {
    return "VROOM";
  }
}

class Garage {
  constructor(a) {
    if (a <= 0) {
      throw new Error("Need a bigger garage!");
    }
    this.vehicles = [];
    this.capacity = a;
  }
  add(vehicle) {
    if (!(vehicle instanceof Vehicle)) {
      return "Only vehicles allowed here!";
    }
    if (this.vehicles.length >= this.capacity) {
      return "Sorry, we're full.";
    }
    this.vehicles.push(vehicle);
    return "Vehicle added!";
  }
}

