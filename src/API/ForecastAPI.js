import { properties } from "../properties";

export function getForecastByLocation(location) {
  return fetch(
    `${properties.forecastUrl}?lat=${location.latitude}&lon=${location.longitude}&units=imperial&appId=${properties.apiKey}`
  ).then(response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  });
}
