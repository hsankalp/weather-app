import { properties } from "../properties";

export function getWeatherByLocation(location) {
  return fetch(
    `${properties.weatherUrl}?lat=${location.latitude}&lon=${location.longitude}&units=imperial&appId=${properties.apiKey}`
  ).then(response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  });
}
