import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  LinearProgress
} from "@material-ui/core";
import { properties } from "../properties";
import "../Styles/Weather.css";
import Error from "./Error";
import { converToCelcius } from "../Helper/TemperatureUtil";
import { useHttpHook } from "../Hooks/HttpHook";

const Weather = ({ location, isMetric, onButtonClick }) => {
  const [isLoading, value, error] = useHttpHook(
    properties.weatherUrl,
    location
  );

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
    <>
      {isLoading && <LinearProgress color="secondary" />}
      <Card raised className="weather-app-card">
        {value && (
          <>
            <CardHeader
              title={getTemperature(value.main.temp)}
              subheader={value.name + " " + getCurrentTime()}
            />
            <CardContent>
              <img
                src={`${properties.weatherIconUrl}/${value.weather[0].icon}@2x.png`}
                alt="weather-icon"
              ></img>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" onClick={onButtonClick}>
                {isMetric ? `Fahrenheit` : `Celsius`}
              </Button>
            </CardActions>
          </>
        )}
        {error && <Error />}
      </Card>
    </>
  );
};

export default Weather;
