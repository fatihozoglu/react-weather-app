import ForecastCard from "./ForecastCard";

function FutureForecast( props) {

    function handleInput(e) {
        if(props.tempType !== e.target.value) {
            props.setTempType(e.target.value);
        }
    }



    return (
        <div className="FutureForecast">
            <div className="temp-selector">
                <label htmlFor="Celsius">°C</label>
                <input onClick={handleInput} className="temp-type" id="Celsius" type="radio" name="temp-type" value="°C"/>
                <label htmlFor="Fahrenheit">°F</label>
                <input onClick={handleInput} className="temp-type" id="Fahrenheit" type="radio" name="temp-type" value="°F" />
            </div>
            <div className="forecast-card-container">
                <ForecastCard tempSign={props.tempType}/>
                <ForecastCard tempSign={props.tempType}/>
                <ForecastCard tempSign={props.tempType}/>
                <ForecastCard tempSign={props.tempType}/>
                <ForecastCard tempSign={props.tempType}/>
            </div>
        </div>
    );
}

export default FutureForecast;