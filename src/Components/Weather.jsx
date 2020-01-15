import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button
} from "@material-ui/core";
import { getWeatherByLocation } from "../API/WeatherAPI";
import { properties } from "../properties";
import "../Styles/Weather.css";
import Loading from "./Loading";
import Error from "./Error";
import { converToCelcius } from "../Helper/convertTemperature";

const Weather = ({ location }) => {
  const [weather, setWeather] = useState();
  const [error, setError] = useState();
  const [isMetric, setIsMetric] = useState(false);

  useEffect(() => {
    console.log("Fetching weather data for ", location);
    getWeatherByLocation(location)
      .then(data => setWeather(data))
      .catch(err => setError(err));
  }, [location]);

  const handleClick = () => {
    setIsMetric(!isMetric);
  };

  const getCurrentTime = () =>
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });

  const getTemperature = temp => {
    return isMetric
      ? Math.round(converToCelcius(temp)) + "\xB0C"
      : Math.round(temp) + "\xB0F";
  };

  return (
    <Card raised className="weather-app-card">
      {weather && (
        <>
          <CardHeader
            title={getTemperature(weather.main.temp)}
            subheader={weather.name + " " + getCurrentTime()}
          />
          <CardContent>
            <img
              src={`${properties.weatherIconUrl}/${weather.weather[0].icon}@2x.png`}
              alt="weather-icon"
            ></img>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={handleClick}>
              {isMetric ? <>Fahrenheit</> : <>Celcius</>}
            </Button>
          </CardActions>
        </>
      )}
      {error && <Error />}
      {!error && !weather && <Loading />}
    </Card>
  );
};

export default Weather;
