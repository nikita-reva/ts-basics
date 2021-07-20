const add = (a: number, b: number): number => {
  return a + b;
};

// Type inferrence on functions unput can lead to errors
const subtract = (a: number, b: number) => {
  a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);

  // return null;
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const throwErrorReturnString = (message: string): string => {
  if (!message) throw new Error(message);

  return message;
};

const throwErrorMaybe = (message: string): void => {
  if (!message) throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

logWeather(todaysWeather);

// ES2015 Destructuring
const logWeather15 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
