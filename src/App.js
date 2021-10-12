import "./App.css";
import CurrentForecast from "./components/CurrentForecast";
import FutureForecast from "./components/FutureForecast";
import { useState, useEffect } from "react";
import { WeatherProvider } from "./WeatherContext"

function App() {
  const [city, setCity] = useState("Ankara");
  const [tempType, setTempType] = useState("°C");
  const [data, setData] = useState();

  let unit = tempType === "°C" ? "metric" : "imperial";

  useEffect( () => {
    let lat;
    let lon;
    async function fetchLocation() {
      try {
        let location = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.REACT_APP_API_KEY}`);
        location = await location.json();
        lat = await location[0].lat;
        lon = await location[0].lon;
        let info = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unit}&exclude=minutely,hourly,alerts&appid=${process.env.REACT_APP_API_KEY}`);
        info = await info.json();
        setData(info);
      }
      catch (err) {
        console.log(err.message);
      }
    }
    fetchLocation();
  }, [city, unit]);

  return (
    <WeatherProvider value={data}>
      <div className="App">
        {data !== undefined ? (
          <CurrentForecast
            tempType={tempType}
            city={city}
            setCity={setCity}
          />
        ) : (
          <div></div>
        )}
        {data !== undefined ? (
          <FutureForecast
            tempType={tempType}
            setTempType={setTempType}
          />
        ) : (
          <div></div>
        )}
      </div>
    </WeatherProvider>
  );
}

export default App;
