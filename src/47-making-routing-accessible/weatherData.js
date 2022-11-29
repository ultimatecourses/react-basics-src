const data = [
  { city: "Amsterdam", temp: 299.15 },
  { city: "Berlin", temp: 295.15 },
  { city: "Delhi", temp: 307.15 },
  { city: "Johannesburg", temp: 288.15 },
  { city: "London", temp: 294.15 },
  { city: "New York", temp: 301.15 },
];

export const weatherData = (scale) => {
  switch (scale) {
    case "celsius":
      return data.map(({ city, temp }) => ({
        city,
        temp: (temp - 273.15).toFixed(2),
      }));
    case "fahrenheit":
      return data.map(({ city, temp }) => ({
        city,
        temp: ((temp - 273.15) * 1.8 + 32).toFixed(2),
      }));
    case "kelvin":
    default:
      return data;
  }
};
