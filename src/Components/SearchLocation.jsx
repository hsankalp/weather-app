import React, { useRef, useContext } from "react";
import { Grid, TextField } from "@material-ui/core";
import { WeatherContext } from "../Context/WeatherContext";

const SearchLocation = () => {
  const cityRef = useRef();
  const { setCity } = useContext(WeatherContext);

  const handleSubmit = e => {
    e.preventDefault();
    setCity(cityRef.current.value);
    cityRef.current.value = null;
  };

  return (
    <Grid item xs={12} sm={7} md={4} lg={3}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="City"
          variant="outlined"
          fullWidth
          inputRef={cityRef}
        />
      </form>
    </Grid>
  );
};

export default SearchLocation;
