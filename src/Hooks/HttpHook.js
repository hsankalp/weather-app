import { useState, useEffect } from "react";
import { properties } from "../properties";

export const useHttpHook = (url, location) => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    console.log("Fetching data for ", location);
    setIsLoading(true);
    fetch(
      `${url}?lat=${location.latitude}&lon=${location.longitude}&units=imperial&appId=${properties.apiKey}`
    )
      .then(response => {
        setIsLoading(false);
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(data => setValue(data))
      .catch(err => setError(err));
  }, [url, location]);

  return [isLoading, value, error];
};
