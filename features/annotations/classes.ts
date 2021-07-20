class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(color: string, public wheels: number) {
    super(color);
  }
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('orange');
const car = new Car('blue', 4);

car.startDrivingProcess();
console.log(vehicle.color);
