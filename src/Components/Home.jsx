import React from "react";
import { HashRouter } from "react-router-dom";
import { useLocation } from "../Hooks/LocationHook";
import Error from "./Error";
import NavBar from "./NavBar";
import MainContent from "./MainContent";

const Home = () => {
  const location = useLocation();

  if (!location) {
    return <Error errorMessage="Please enable location and try again" />;
  }

  return (
    <>
      {location && (
        <HashRouter>
          <NavBar />
          <MainContent location={location} />
        </HashRouter>
      )}
    </>
  );
};

export default Home;
