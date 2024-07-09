import styled from "styled-components";
import "./WetherItem.scss";

export default function WeatherItem(props) {

    const Item = styled.div`
        background-color:${props.color};
        grid-area:${props.position};
    `

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
                color:"#3399CC",
                position: "third ",
                temp:"15°C",
                icon:"wi-day-cloudy",
                city:"Belgrade"
            },
            {
                color:"#3399CC",
                position: "four ",
                temp:"21°C",
                icon:"wi-day-cloudy-high",
                city:"Venice"
            },
            {
                color:"#3399CC",
                position:"five",
                temp:"32°C",
                icon:"wi-hot",
                city:"Tel-Avive"
            },
            {
                color:"#3399CC",
                position:"six",
                temp:"21°C",
                icon:"wi-day-sunny",
                city:"Cair"
            },
            {
                color:"#3399CC",
                position:"seven",
                temp:"17°C",
                icon:"wi-night-alt-snow-thunderstorm",
                city:"New-York"
            },
            {
                color:"#3399CC",
                position:"eight",
                temp:"17°C",
                icon:"wi-hail",
                city:"New-Delhi"
            },
            {
                color:"#3399CC",
                position:"nine",
                temp:"15°C",
                icon:"wi-day-cloudy",
                city:"San-Francisco"
            },
            {
                color:"#3399CC",
                position:"ten",
                temp:"8°C",
                icon:"wi-night-clear",
                city:"Tokyo"
            },
            {
                color:"#3399CC",
                position:"eleven",
                temp:"25°C",
                icon:"wi-night-cloudy",
                city:"Sydney"
            },
    ]

    // listItems.forEach((item) => {
    //     const Item = styled.div`
    //         background-color:${item.color};
    //         grid-area:${item.position};
    //      `

    //     return (
    //         <>
    //         <Item className="weather-item">
                
    //         </Item>
            
    //         </>
    //     )
    // })
    return (
        <Item className="weather-item">
            <p className="weather-item__info">{props.city}</p>
            <p className="weather-item__info">{props.temp} <i style={{fontSize: "42px"}} className={`wi ${props.icon}`} ></i></p>
        </Item> 
    )

    // return (
    //     <>
    //     {

    //         listItems.forEach((item) => {
    //             const Item = styled.div`
    //                 background-color:${item.color};
    //                 grid-area:${item.position};
    //             `

    //             const list = document.querySelector(".weather-box")

    //             let e = <Item className="weather-item"></Item>
    //             list.append(e)
    //         })

    //     }
    //     </>
    // )
}

