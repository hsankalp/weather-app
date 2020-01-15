import React, { useState, useEffect } from "react";
import { AppBar, Tabs, Tab, Card, CardHeader } from "@material-ui/core";
import Weather from "./Weather";
import FiveDayForecast from "./FiveDayForecast";

const Home = () => {
  const [value, setValue] = useState(0);
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

  const handleChange = (e, val) => {
    setValue(val);
  };

  const handleMeasureChange = () => {
    setIsMetric(!isMetric);
  };

  return (
    <>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Weather" />
          <Tab label="5 Day Forecast" />
        </Tabs>
      </AppBar>
      {value === 0 && location && (
        <Weather
          location={location}
          isMetric={isMetric}
          onButtonClick={handleMeasureChange}
        />
      )}
      {value === 1 && location && (
        <FiveDayForecast
          location={location}
          isMetric={isMetric}
          onButtonClick={handleMeasureChange}
        />
      )}
      {!location && (
        <Card raised>
          <CardHeader subheader="Please enable location" />
        </Card>
      )}
    </>
  );
};

export default Home;
