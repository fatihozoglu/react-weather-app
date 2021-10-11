import { BiCurrentLocation } from "react-icons/bi";
import { MdRoom } from "react-icons/md"

function CurrentForecast(props) {

  let icon = props.data.current.weather[0].icon;
  let currentTemp = Math.round(props.data.current.temp);
  let status = props.data.current.weather[0].description;
  let date = new Date(props.data.current.dt * 1000).toDateString().slice(0,10);

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
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="daily weather status"
      />
      <p className="current-temp">
        {currentTemp}<span className="temp-letter">{props.tempType}</span>
      </p>
      <p className="current-status">{status}</p>
      <div className="date-container">
        <span className="today">Today</span>
        <span className="date">{date}</span>
      </div>
      <span className="location"><MdRoom />{props.city}</span>
    </div>
  );
}

export default CurrentForecast;
