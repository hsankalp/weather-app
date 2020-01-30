import React, { useContext } from "react";
import { WeatherContext } from "../Context/WeatherContext";
import { Button } from "@material-ui/core";

const TemperatureMeasureSwitch = () => {
  const { isMetric, setIsMetric } = useContext(WeatherContext);

  return (
    <Button
      variant="outlined"
      color="secondary"
      onClick={() => setIsMetric(!isMetric)}
    >
      {isMetric ? `Fahrenheit` : `Celsius`}
    </Button>
  );
};

export default TemperatureMeasureSwitch;
