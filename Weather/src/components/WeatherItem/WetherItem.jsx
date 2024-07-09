import styled from "styled-components";
import "./WetherItem.scss";

export default function WeatherItem(props) {

    const ITEM = styled.div`
        background-color:${props.color};
        grid-area:${props.position};
    `

    return (
        <ITEM className="weather-item">
            <p className="weather-item__info">{props.city}</p>
            <p className="weather-item__info">{props.temp} <i style={{fontSize: "42px"}} className={`wi ${props.icon}`} ></i></p>
        </ITEM> 
    )

}

