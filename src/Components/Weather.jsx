import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  LinearProgress
} from "@material-ui/core";
import { properties } from "../properties";
import "../Styles/Weather.css";
import Error from "./Error";
import { getTemperature } from "../Helper/TemperatureUtil";
import { useFetchHook } from "../Hooks/FetchHook";
import TemperatureMeasureSwitch from "./TemperatureMeasureSwitch";
import { MeasureContext } from "../Context/MeasureContext";

const Weather = ({ location }) => {
  const [isLoading, value, error] = useFetchHook(
    `${properties.weatherUrl}?lat=${location.latitude}&lon=${location.longitude}&units=imperial&appId=${properties.apiKey}`,
    location
  );

  const { isMetric } = useContext(MeasureContext);

  const getCurrentTime = () =>
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });

  if (isLoading) return <LinearProgress color="secondary" />;

  if (error)
    return (
      <Error errorMessage="Unable to get weather data. Please try again after sometime" />
    );

  return (
    <>
      {value && (
        <Card raised className="weather-app-card">
          <CardHeader
            title={getTemperature(value.main.temp, isMetric)}
            subheader={value.name + " " + getCurrentTime()}
          />
          <CardContent>
            <img
              src={`${properties.weatherIconUrl}/${value.weather[0].icon}@2x.png`}
              alt="weather-icon"
            ></img>
          </CardContent>
          <CardActions>
            <TemperatureMeasureSwitch />
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default Weather;
