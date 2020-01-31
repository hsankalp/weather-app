import React, { useState } from "react";
import { WeatherContext } from "./Context";

const WeatherProvider = ({ children }) => {
  const [isMetric, setIsMetric] = useState(false);
  const [city, setCity] = useState();

  return (
    <WeatherContext.Provider value={{ isMetric, setIsMetric, city, setCity }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
