import WeatherItem from "../WeatherItem/WetherItem";
import "./Box__Weather.scss";

export default function Box__Weather() {
    return (
        <div className="weather-box">
            <WeatherItem
                color="#3399CC"
                position="first"
                temp={21 + "°C"}
                icon="wi-day-sunny"
                city="Lisbon"
            />
            <WeatherItem
                color="#33CCCC"
                position="second"
                temp={11 + "°C"}
                icon="wi-night-showers"
                city="Paris"
            />
            <WeatherItem
                color="#996699"
                position="third"
                temp={15 + "°C"}
                icon="wi-day-cloudy"
                city="Belgrade"
            />
            <WeatherItem
                color="#C24747"
                position="four"
                temp={21 + "°C"}
                icon="wi-day-cloudy-high"
                city="Venice"
            />
            <WeatherItem
                color="#E2674A"
                position="five"
                temp={32 + "°C"}
                icon="wi-hot"
                city="Tel-Avive"
            />
            <WeatherItem
                color="#FFCC66"
                position="six"
                temp={21 + "°C"}
                icon="wi-day-sunny"
                city="Cair"
            />
            <WeatherItem
                color="#99CC99"
                position="seven"
                temp={17 + "°C"}
                icon="wi-night-alt-snow-thunderstorm"
                city="New-York"
            />
            <WeatherItem
                color="#669999"
                position="eight"
                temp={17 + "°C"}
                icon="wi-hail"
                city="New-Delhi"
            />
            <WeatherItem
                color="#CC6699"
                position="nine"
                temp={15 + "°C"}
                icon="wi-day-cloudy"
                city="San-Francisco"
            />
            <WeatherItem
                color="#339966"
                position="ten"
                temp={8 + "°C"}
                icon="wi-night-clear"
                city="Tokyo"
            /> 
             <WeatherItem
                color="#666699"
                position="eleven"
                temp={25 + "°C"}
                icon="wi-night-cloudy"
                city="Sydney"
            />
            {/* <WeatherItem/> */}
        </div>
    )
}