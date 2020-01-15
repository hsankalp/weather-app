import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardContent, Grid } from "@material-ui/core";
import DailyForecast from "./DailyForecast";
import { getForecastByLocation } from "../API/ForecastAPI";
import "../Styles/Forecast.css";

const FiveDayForecast = ({ location }) => {
  const [forecast, setForecast] = useState();

  useEffect(() => {
    console.log("Fetching forecast data for ", location);
    getForecastByLocation(location)
      .then(data => setForecast(data))
      .catch(err => setForecast(null));
  }, [location]);

  return (
    <Card raised className="forecast-app-card">
      {forecast ? (
        <>
          <CardHeader title={forecast.city.name} subheader="5 Day Forecast" />
          <CardContent>
            <Grid container justify="center" spacing={4}>
              {forecast.list
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
        </>
      ) : (
        <CardHeader subheader="Unable to fetch forecast data. Please try after sometime" />
      )}
    </Card>
  );
};

export default FiveDayForecast;
