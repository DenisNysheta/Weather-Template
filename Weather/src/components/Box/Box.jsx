import styled from "styled-components"
import "./Box.scss"
import Box__Weather from "../Box__Weather/Box__Weather"

export default function Box(props) {

    return (
        <>
            <div className="box">
                <h1 className="box__title">
                    CSS Weather Forecast <i style={{fontSize:"27px"}} className="wi wi-sunrise"></i>
                </h1>
                <Box__Weather/>
                <p className="box__advice">
                    Have a nice day and don't forget umbrella if you are in New Delhi now!
                </p>
            </div>
        </>
    )
}
