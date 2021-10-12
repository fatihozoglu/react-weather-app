import { BiCurrentLocation } from "react-icons/bi";
import { MdRoom } from "react-icons/md";
import { FaArrowCircleUp } from "react-icons/fa";
import { useContext } from "react"
import { WeatherContext } from "../WeatherContext";

function CurrentForecast(props) {
  const context = useContext(WeatherContext);
  
  let icon = context.current.weather[0].icon;
  let currentTemp = Math.round(context.current.temp);
  let status = context.current.weather[0].description;
  let date = new Date(context.current.dt * 1000).toDateString().slice(0, 10);
  let deg = context.current.wind_deg;

  return (
    <div className="CurrentForecast">
      <div className="input-container">
        <input
          className="location-input"
          type="text"
          placeholder="Search For Cities"
          onBlur={(e) => props.setCity(e.target.value)}
        />
        <BiCurrentLocation className="location-icon" />
      </div>
      <img
        className="current-img"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="daily weather status"
      />
      <p className="current-temp">
        {currentTemp}
        <span className="temp-letter">{props.tempType}</span>
      </p>
      <p className="current-status">{status}</p>
      <div className="wind-container">
        <span>
          Wind: {context.current.wind_speed}{" "}
          {props.tempType === "°C" ? "m/s" : "mph"}
        </span>
        <FaArrowCircleUp
          style={{ transform: `rotate(${deg + 180}deg)`, fontSize: "40px" }}
        />
      </div>
      <div className="date-container">
        <span className="today">Today</span>
        <span className="date">{date}</span>
      </div>
      <span className="location">
        <MdRoom />
        {props.city}
      </span>
    </div>
  );
}

export default CurrentForecast;
