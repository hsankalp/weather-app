import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Weather from "./Weather";
import FiveDayForecast from "./FiveDayForecast";
import { MeasureContext } from "../Context/MeasureContext";

const MainContent = ({ location }) => {
  const [isMetric, setIsMetric] = useState(false);

  return (
    <div className="main">
      <MeasureContext.Provider value={{ isMetric, setIsMetric }}>
        <Switch>
          <Route exact path="/weather">
            <Weather location={location} />
          </Route>
          <Route exact path="/forecast">
            <FiveDayForecast location={location} />
          </Route>
          <Redirect to="/weather"></Redirect>
        </Switch>
      </MeasureContext.Provider>
    </div>
  );
};

export default MainContent;
