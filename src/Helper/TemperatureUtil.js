export const getTemperature = (temperature, isMetric) => {
  return isMetric
    ? Math.round(converToCelcius(temperature)) + "\xB0C"
    : Math.round(temperature) + "\xB0F";
};

const converToCelcius = temperatureInF => (temperatureInF - 32) * (5 / 9);
