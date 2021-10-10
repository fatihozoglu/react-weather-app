

function ForecastCard(props) {
    return (
        <div className="ForecastCard">
            <span className="forecast-date">Tomorrow</span>
            <img className="forecast-img" src="https://cdn5.vectorstock.com/i/1000x1000/91/54/rainy-weather-forecast-vector-17209154.jpg" alt="daily status" />
            <div className="max-min-temp">
                <span className="max-temp">25{props.tempSign}</span> 
                <span className="min-temp">12{props.tempSign}</span>
            </div>
        </div>
    );
}

export default ForecastCard;