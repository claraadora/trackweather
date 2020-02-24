import React, { useState, useEffect } from "react";
import CitySelection from "./components/CitySelection/CitySelection";
import WeatherTable from "./components/WeatherTable/WeatherTable";
import "./App.css";
import Icon from "./sun.png";

//ids' of cities
const CITY_ID = {
  Jakarta: 1642907,
  Singapore: 1880251,
  Bangkok: 1609350
};

// retrieve JSON from API
const fetchWeatherDetails = async selection => {
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?id=${CITY_ID[selection]}&q=&mode=json&units=metric&cnt=5&appid=271da6b323b05ebaf2b4aaa0f3378f89`
  );
  const json = await res.json();
  return json;
};

function App() {
  //states
  const [selection, setSelection] = useState("Jakarta");
  const [weatherDetails, setWeatherDetails] = useState([]);

  useEffect(() => {
    const updateWeatherDetails = async () => {
      const json = await fetchWeatherDetails(selection);
      setWeatherDetails(json.list);
    };
    updateWeatherDetails();
  }, [selection]);

  return (
    <div className="container">
      <img src={Icon} height="250" width="280"></img>
      <CitySelection selection={selection} setSelection={setSelection} />
      <WeatherTable selection={selection} weatherDetails={weatherDetails} />
    </div>
  );
}

export default App;
