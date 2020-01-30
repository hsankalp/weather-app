import React, { useContext } from "react";
import { MeasureContext } from "../Context/MeasureContext";
import { Button } from "@material-ui/core";

const TemperatureMeasureSwitch = () => {
  const { isMetric, setIsMetric } = useContext(MeasureContext);

  return (
    <Button
      size="small"
      variant="outlined"
      color="secondary"
      onClick={() => setIsMetric(!isMetric)}
    >
      {isMetric ? `Fahrenheit` : `Celsius`}
    </Button>
  );
};

export default TemperatureMeasureSwitch;
