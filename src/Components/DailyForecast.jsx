import React from "react";
import { Typography } from "@material-ui/core";
import { properties } from "../properties";

const DailyForecast = ({ date, min, max, icon }) => {
  return (
    <>
      <Typography variant="body2" color="textSecondary" component="p">
        {new Date(date).toString().slice(0, 10)}
      </Typography>
      <img
        src={`${properties.weatherIconUrl}/${icon}@2x.png`}
        alt="weather-icon"
      ></img>
      <Typography component="h6">Min: {min + "\xB0F"}</Typography>
      <Typography component="h6">Max: {max + "\xB0F"}</Typography>
    </>
  );
};

export default DailyForecast;
