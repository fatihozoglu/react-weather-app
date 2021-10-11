

function ForecastCard(props) {
    return (
        <div className="ForecastCard">
            <span className="forecast-date">{props.date}</span>
            <img className="forecast-img" src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="daily status" />
            <div className="max-min-temp">
                <span className="max-temp">{Math.round(props.max)}{props.tempSign}</span> 
                <span className="min-temp">{Math.round(props.min)}{props.tempSign}</span>
            </div>
        </div>
    );
}

export default ForecastCard;