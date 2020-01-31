import React, { useContext } from "react";
import { Grid, Typography } from "@material-ui/core";
import { getTemperature } from "../Helper/TemperatureUtil";
import { properties } from "../properties";
import { WeatherContext } from "../Context/Context";

const Temperature = props => {
  const { isMetric } = useContext(WeatherContext);

  return (
    <>
      <Grid item>
        <Typography variant="subtitle2">
          {props.date && new Date(props.date).toString().slice(0, 10)}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h4">
          {getTemperature(props.temp, isMetric)}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1" color="textSecondary">
          Real Feel: {getTemperature(props.feelsLike, isMetric)}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle2" color="textSecondary">
          {props.condition}
        </Typography>
      </Grid>
      <Grid item>
        <img
          src={`${properties.weatherIconUrl}/${props.icon}@2x.png`}
          alt="weather-icon"
        ></img>
      </Grid>
    </>
  );
};

export default Temperature;
