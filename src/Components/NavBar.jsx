import React from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Tabs value={false}>
        <Tab label="Weather" component={NavLink} to="/weather" />
        <Tab label="Forecast" component={NavLink} to="/forecast" />
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
