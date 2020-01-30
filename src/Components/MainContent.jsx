import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Weather from "./Weather";
import FiveDayForecast from "./FiveDayForecast";
import { WeatherContext } from "../Context/WeatherContext";

const MainContent = ({ location }) => {
  const [isMetric, setIsMetric] = useState(false);
  const [city, setCity] = useState();

  return (
    <WeatherContext.Provider value={{ isMetric, setIsMetric, city, setCity }}>
      <Switch>
        <Route exact path="/weather">
          <Weather location={location} />
        </Route>
        <Route exact path="/forecast">
          <FiveDayForecast location={location} />
        </Route>
        <Redirect to="/weather"></Redirect>
      </Switch>
    </WeatherContext.Provider>
  );
};

export default MainContent;
