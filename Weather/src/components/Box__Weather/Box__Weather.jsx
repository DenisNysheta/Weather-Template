import WeatherItem from "../WeatherItem/WetherItem";
import "./Box__Weather.scss";

export default function Box__Weather() {

    const listItems = [
        {
            color:"#3399CC",
            position: "first ",
            temp:"21°C",
            icon:"wi-day-sunny",
            city:"Lisbon"
        },
        {
            color:"#33CCCC",
            position: "second ",
            temp:"11°C",
            icon:"wi-night-showers",
            city:"Paris"
        },
        {
            color:"#996699",
            position: "third ",
            temp:"15°C",
            icon:"wi-day-cloudy",
            city:"Belgrade"
        },
        {
            color:"#C24747",
            position: "four ",
            temp:"21°C",
            icon:"wi-day-cloudy-high",
            city:"Venice"
        },
        {
            color:"#E2674A",
            position:"five",
            temp:"32°C",
            icon:"wi-hot",
            city:"Tel-Avive"
        },
        {
            color:"#FFCC66",
            position:"six",
            temp:"21°C",
            icon:"wi-day-sunny",
            city:"Cair"
        },
        {
            color:"##99CC99",
            position:"seven",
            temp:"17°C",
            icon:"wi-night-alt-snow-thunderstorm",
            city:"New-York"
        },
        {
            color:"#669999",
            position:"eight",
            temp:"17°C",
            icon:"wi-hail",
            city:"New-Delhi"
        },
        {
            color:"#CC6699",
            position:"nine",
            temp:"15°C",
            icon:"wi-day-cloudy",
            city:"San-Francisco"
        },
        {
            color:"#339966",
            position:"ten",
            temp:"8°C",
            icon:"wi-night-clear",
            city:"Tokyo"
        },
        {
            color:"#666699",
            position:"eleven",
            temp:"25°C",
            icon:"wi-night-cloudy",
            city:"Sydney"
        },
]

    return (
        <div className="weather-box">
            {
                listItems.map((item) => {
                    return <WeatherItem
                        color={item.color}
                        position={item.position}
                        temp={item.temp}
                        icon={item.icon}
                        city={item.city}
                    />
                })
            }
        </div>
    )
}