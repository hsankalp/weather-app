import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import { getWeatherByLocation } from "../API/WeatherAPI";
import { properties } from "../properties";
import "../Styles/Weather.css";
import Loading from "./Loading";
import Error from "./Error";

const Weather = ({ location }) => {
  const [weather, setWeather] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    console.log("Fetching weather data for ", location);
    getWeatherByLocation(location)
      .then(data => setWeather(data))
      .catch(err => setError(err));
  }, [location]);

  const getCurrentTime = () =>
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });

  return (
    <Card raised className="weather-app-card">
      {weather && (
        <>
          <CardHeader
            title={weather.main.temp + "\xB0F"}
            subheader={weather.name + " " + getCurrentTime()}
          />
          <CardContent>
            <img
              src={`${properties.weatherIconUrl}/${weather.weather[0].icon}@2x.png`}
              alt="weather-icon"
            ></img>
          </CardContent>
        </>
      )}
      {error && <Error />}
      {!error && !weather && <Loading />}
    </Card>
  );
};

export default Weather;
