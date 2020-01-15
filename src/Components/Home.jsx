import React, { useState, useEffect } from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import Weather from "./Weather";
import FiveDayForecast from "./FiveDayForecast";

const Home = () => {
  const [value, setValue] = useState(0);
  const [location, setLocation] = useState();
  const handleChange = (e, val) => {
    setValue(val);
  };

  useEffect(() => {
    navigator.geolocation &&
      navigator.geolocation.getCurrentPosition(data => {
        const location = {
          latitude: data.coords.latitude,
          longitude: data.coords.longitude
        };
        setLocation(location);
      });
  }, [location]);

  return (
    <>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Weather" />
          <Tab label="5 Day Forecast" />
        </Tabs>
      </AppBar>
      {value === 0 && location && <Weather location={location} />}
      {value === 1 && location && <FiveDayForecast location={location} />}
    </>
  );
};

export default Home;
