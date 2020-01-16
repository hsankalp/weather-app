import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  CardActions,
  Button,
  LinearProgress
} from "@material-ui/core";
import DailyForecast from "./DailyForecast";
import "../Styles/Forecast.css";
import Error from "./Error";
import { converToCelcius } from "../Helper/TemperatureUtil";
import { properties } from "../properties";
import { useHttpHook } from "../Hooks/HttpHook";

const FiveDayForecast = ({ location, isMetric, onButtonClick }) => {
  const [isLoading, value, error] = useHttpHook(
    properties.forecastUrl,
    location
  );

  const getTemperature = temp => {
    return isMetric
      ? Math.round(converToCelcius(temp)) + "\xB0C"
      : Math.round(temp) + "\xB0F";
  };

  return (
    <>
      {isLoading && <LinearProgress color="secondary" />}
      <Card raised className="forecast-app-card">
        {value && (
          <>
            <CardHeader title={value.city.name} subheader="5 Day Forecast" />
            <CardContent>
              <Grid container justify="center" spacing={4}>
                {value.list
                  .filter((data, index) => index % 8 === 0)
                  .map(data => (
                    <Grid
                      key={data.dt}
                      item
                      className="daily-forecast-grid-item"
                    >
                      <DailyForecast
                        date={data.dt_txt}
                        min={getTemperature(data.main.temp_min)}
                        max={getTemperature(data.main.temp_max)}
                        icon={data.weather[0].icon}
                      />
                    </Grid>
                  ))}
              </Grid>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" onClick={onButtonClick}>
                {isMetric ? `Fahrenheit` : `Celcius`}
              </Button>
            </CardActions>
          </>
        )}
        {error && <Error />}
      </Card>
    </>
  );
};

export default FiveDayForecast;
