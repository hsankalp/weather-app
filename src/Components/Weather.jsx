import React, { useContext } from "react";
import { Box, Grid, LinearProgress, Paper } from "@material-ui/core";
import { properties } from "../properties";
import Error from "./Error";
import { useFetchHook } from "../Hooks/FetchHook";
import TemperatureMeasureSwitch from "./TemperatureMeasureSwitch";
import Temperature from "./Temperature";
import SearchLocation from "./SearchLocation";
import LocationTime from "./LocationTime";
import { WeatherContext } from "../Context/WeatherContext";
import { getQuery } from "../Helper/QueryUtil";

const Weather = ({ location }) => {
  const { city } = useContext(WeatherContext);
  const [isLoading, weather, error] = useFetchHook(
    `${properties.weatherUrl}?${getQuery(
      city,
      location
    )}&units=imperial&appId=${properties.apiKey}`,
    location
  );

  if (isLoading) return <LinearProgress color="secondary" />;

  if (error)
    return (
      <Error errorMessage="Unable to get weather data. Please try again after sometime" />
    );

  return (
    <Box m={2}>
      <Grid container direction="column" spacing={2}>
        <SearchLocation />
        <Grid item xs={12} sm={7} md={4} lg={3}>
          {weather && (
            <Paper elevation={3}>
              <Box p={2}>
                <Grid container direction="column" spacing={1}>
                  <LocationTime city={weather.name} />
                  <Grid
                    item
                    container
                    direction="column"
                    alignItems="center"
                    justify="center"
                    spacing={1}
                  >
                    <Temperature
                      temp={weather.main.temp}
                      condition={weather.weather[0].main}
                      feelsLike={weather.main.feels_like}
                      icon={weather.weather[0].icon}
                      date={weather.dt_txt}
                    />
                  </Grid>
                  <Grid item>
                    <TemperatureMeasureSwitch />
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Weather;
