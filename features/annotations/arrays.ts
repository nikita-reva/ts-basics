const someArray: string[] = [];
const carMakers = ['ford', 'toyota', 'tesla'];
const dates = [new Date(), new Date()];
const carsByMake = [['f150'], ['corolla'], ['model s']];

function wrapperFunction(): void {
  // Help with inferrence when extracting values
  const car = carMakers[0];
  const myCar = carMakers.pop();

  // Prevent incompatible values
  carMakers.push('bmw');

  // Help with 'map'
  carMakers.map((car: string): string => {
    return car.toUpperCase();
  });
}

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
