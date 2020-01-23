import React, { useState } from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { HashRouter, Switch, Route, NavLink, Redirect } from "react-router-dom";
import Weather from "./Weather";
import FiveDayForecast from "./FiveDayForecast";
import { MeasureContext } from "../Context/MeasureContext";
import { useLocation } from "../Hooks/LocationHook";
import Error from "./Error";

const Home = () => {
  const [isMetric, setIsMetric] = useState(false);
  const location = useLocation();

  if (!location) {
    return <Error errorMessage="Please enable location and try again" />;
  }

  return (
    <HashRouter>
      <AppBar position="static">
        <Tabs value={false}>
          <Tab label="Weather" component={NavLink} to="/weather" />
          <Tab label="Forecast" component={NavLink} to="/forecast" />
        </Tabs>
      </AppBar>
      {location && (
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
      )}
    </HashRouter>
  );
};

export default Home;
