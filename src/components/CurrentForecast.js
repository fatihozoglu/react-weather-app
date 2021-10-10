import { BiCurrentLocation } from "react-icons/bi";

function CurrentForecast(props) {

  return (
    <div className="CurrentForecast">
      <div className="input-container">
        <input
          className="location-input"
          type="text"
          placeholder="Search For Cities"
          onBlur={ e => props.setCity(e.target.value)}
        />
        <BiCurrentLocation className="location-icon" />
      </div>
      <img
        className="current-img"
        src="https://cdn5.vectorstock.com/i/1000x1000/91/54/rainy-weather-forecast-vector-17209154.jpg"
        alt="daily weather status"
      />
      <p className="current-temp">
        15<span className="temp-letter">{props.tempType}</span>
      </p>
      <p className="current-status">Shower</p>
      <div className="date-container">
        <span className="today">Today</span>
        <span className="date">Today</span>
      </div>
      <span className="location">{}</span>
    </div>
  );
}

export default CurrentForecast;
