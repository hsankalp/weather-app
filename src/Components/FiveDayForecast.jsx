import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  CardActions,
  LinearProgress
} from "@material-ui/core";
import DailyForecast from "./DailyForecast";
import "../Styles/Forecast.css";
import Error from "./Error";
import { properties } from "../properties";
import { useFetchHook } from "../Hooks/FetchHook";
import TemperatureMeasureSwitch from "./TemperatureMeasureSwitch";

const FiveDayForecast = ({ location }) => {
  const [isLoading, value, error] = useFetchHook(
    `${properties.forecastUrl}?lat=${location.latitude}&lon=${location.longitude}&units=imperial&appId=${properties.apiKey}`,
    location
  );

  if (isLoading) return <LinearProgress color="secondary" />;

  if (error)
    return (
      <Error errorMessage="Unable to get weather data. Please try again after sometime" />
    );

  return (
    <>
      {value && (
        <Card raised className="forecast-app-card">
          <CardHeader title={value.city.name} subheader="5 Day Forecast" />
          <CardContent>
            <Grid container justify="center" spacing={4}>
              {value.list
                .filter((data, index) => index % 8 === 0)
                .map(data => (
                  <Grid key={data.dt} item className="daily-forecast-grid-item">
                    <DailyForecast
                      date={data.dt_txt}
                      min={data.main.temp_min}
                      max={data.main.temp_max}
                      icon={data.weather[0].icon}
                    />
                  </Grid>
                ))}
            </Grid>
          </CardContent>
          <CardActions>
            <TemperatureMeasureSwitch />
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default FiveDayForecast;
