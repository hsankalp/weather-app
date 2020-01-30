import React, { useContext } from "react";
import { Box, Paper, Grid, LinearProgress } from "@material-ui/core";
import Error from "./Error";
import { properties } from "../properties";
import { useFetchHook } from "../Hooks/FetchHook";
import TemperatureMeasureSwitch from "./TemperatureMeasureSwitch";
import Temperature from "./Temperature";
import LocationTime from "./LocationTime";
import { getQuery } from "../Helper/QueryUtil";
import { WeatherContext } from "../Context/WeatherContext";
import SearchLocation from "./SearchLocation";

const FiveDayForecast = ({ location }) => {
  const { city } = useContext(WeatherContext);
  const [isLoading, forecast, error] = useFetchHook(
    `${properties.forecastUrl}?${getQuery(
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
        <Grid item>
          {forecast && (
            <Paper elevation={3}>
              <Box p={2}>
                <Grid container direction="column" spacing={2}>
                  <LocationTime city={forecast.city.name} />
                  <Grid item container justify="space-around">
                    {forecast.list
                      .filter((data, index) => index % 8 === 0)
                      .map(data => (
                        <Grid
                          item
                          container
                          direction="column"
                          alignItems="center"
                          spacing={1}
                          xs={6}
                          md={2}
                          key={data.dt}
                        >
                          <Temperature
                            temp={data.main.temp}
                            condition={data.weather[0].main}
                            feelsLike={data.main.feels_like}
                            icon={data.weather[0].icon}
                            date={data.dt_txt}
                          />
                        </Grid>
                      ))}
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

export default FiveDayForecast;
