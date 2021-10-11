import ForecastCard from "./ForecastCard";

function FutureForecast(props) {
  function handleInput(e) {
    if (props.tempType !== e.target.value) {
      props.setTempType(e.target.value);
    }
  }

  return (
    <div className="FutureForecast">
      <div className="temp-selector">
        <label className={props.tempType === "°C" ? "active" : null} id="celsius" htmlFor="Celsius">°C</label>
        <input
          onClick={handleInput}
          className="temp-type"
          id="Celsius"
          type="radio"
          name="temp-type"
          value="°C"
        />
        <label className={props.tempType === "°F" ? "active" : null} id="fahrenheit" htmlFor="Fahrenheit">°F</label>
        <input
          onClick={handleInput}
          className="temp-type"
          id="Fahrenheit"
          type="radio"
          name="temp-type"
          value="°F"
        />
      </div>
      <div className="forecast-card-container">
        {props.data.daily.slice(1).map((item) => {
          return (
            <ForecastCard
              key={item.dt}
              date={new Date(item.dt * 1000).toDateString().slice(0, 10)}
              max={item.temp.max}
              min={item.temp.min}
              icon={item.weather[0].icon}
              tempSign={props.tempType}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FutureForecast;
