import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Weather from "./Weather";
import FiveDayForecast from "./FiveDayForecast";
import WeatherProvider from "../Context/WeatherProvider";

const MainContent = ({ location }) => {
  return (
    <WeatherProvider>
      <Switch>
        <Route exact path="/weather">
          <Weather location={location} />
        </Route>
        <Route exact path="/forecast">
          <FiveDayForecast location={location} />
        </Route>
        <Redirect to="/weather"></Redirect>
      </Switch>
    </WeatherProvider>
  );
};

export default MainContent;
