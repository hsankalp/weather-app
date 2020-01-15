import React, { useState, useEffect } from "react";
import { Card, CardHeader } from "@material-ui/core";
import { getWeatherByLocation } from "../API/WeatherAPI";
import { properties } from "../properties";
import "../Styles/Weather.css";

const Weather = ({ location }) => {
  const [weather, setWeather] = useState();

  useEffect(() => {
    console.log("Fetching weather data", location);
    getWeatherByLocation(location).then(data => setWeather(data));
  }, [location.latitude, location.longitude]);

  return (
    <>
      {weather && (
        <Card raised className="weather-app-card">
          <CardHeader
            title={weather.main.temp + "\xB0F"}
            subheader={
              weather.name +
              " " +
              new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
              })
            }
          />
          <img
            src={`${properties.weatherIconUrl}/${weather.weather[0].icon}@2x.png`}
            alt="weather-icon"
          ></img>
        </Card>
      )}
    </>
  );
};

export default Weather;
