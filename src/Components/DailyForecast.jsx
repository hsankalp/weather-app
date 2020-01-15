import React from "react";
import { Typography } from "@material-ui/core";
import { properties } from "../properties";

const DailyForecast = ({ date, min, max, icon }) => {
  return (
    <>
      <Typography variant="body2" color="textSecondary">
        {new Date(date).toString().slice(0, 10)}
      </Typography>
      <img
        src={`${properties.weatherIconUrl}/${icon}@2x.png`}
        alt="weather-icon"
      ></img>
      <Typography variant="body2" color="textPrimary">
        Max: {max}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Min: {min}
      </Typography>
    </>
  );
};

export default DailyForecast;
