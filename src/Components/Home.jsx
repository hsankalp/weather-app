import React, { useState, useEffect } from "react";
import { AppBar, Tabs, Tab, Card, CardHeader } from "@material-ui/core";
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";
import Weather from "./Weather";
import FiveDayForecast from "./FiveDayForecast";

const Home = () => {
  const [location, setLocation] = useState();
  const [isMetric, setIsMetric] = useState(false);

  useEffect(() => {
    navigator.geolocation &&
      navigator.geolocation.getCurrentPosition(data => {
        const location = {
          latitude: data.coords.latitude,
          longitude: data.coords.longitude
        };
        setLocation(location);
      });
  }, []);

  const handleMeasureChange = () => {
    setIsMetric(!isMetric);
  };

  return (
    <BrowserRouter>
      <AppBar position="static">
        <Tabs value={false}>
          <Tab label="Weather" component={NavLink} to="/weather" />
          <Tab label="Forecast" component={NavLink} to="/forecast" />
        </Tabs>
      </AppBar>
      {location && (
        <div className="main">
          <Switch>
            <Route exact path="/weather">
              <Weather
                location={location}
                isMetric={isMetric}
                onButtonClick={handleMeasureChange}
              />
            </Route>
            <Route exact path="/forecast">
              <FiveDayForecast
                location={location}
                isMetric={isMetric}
                onButtonClick={handleMeasureChange}
              />
            </Route>
            <Redirect to="/weather"></Redirect>
          </Switch>
        </div>
      )}
      {!location && (
        <Card raised>
          <CardHeader subheader="Please enable location" />
        </Card>
      )}
    </BrowserRouter>
  );
};

export default Home;
