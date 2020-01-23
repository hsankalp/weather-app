import React, { useContext } from "react";
import { Typography } from "@material-ui/core";
import { properties } from "../properties";
import { getTemperature } from "../Helper/TemperatureUtil";
import { MeasureContext } from "../Context/MeasureContext";

const DailyForecast = ({ date, min, max, icon }) => {
  const { isMetric } = useContext(MeasureContext);

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
        Max: {getTemperature(max, isMetric)}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Min: {getTemperature(min, isMetric)}
      </Typography>
    </>
  );
};

export default DailyForecast;
