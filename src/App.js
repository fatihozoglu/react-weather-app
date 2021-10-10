import "./App.css";
import CurrentForecast from "./components/CurrentForecast";
import FutureForecast from "./components/FutureForecast";
import { useState, useEffect } from "react";

function App() {
  const [city, setCity] = useState("Ankara");
  const [tempType, setTempType] = useState("°C");
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="App">
      {data !== undefined ? (
        <CurrentForecast
          data={data}
          tempType={tempType}
          city={city}
          setCity={setCity}
        />
      ) : (
        <div>LOADING</div>
      )}
      <FutureForecast tempType={tempType} setTempType={setTempType} />
    </div>
  );
}

export default App;
