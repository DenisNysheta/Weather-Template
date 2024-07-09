import styled from "styled-components"
import "./Box.scss"

export default function Box(props) {

    const BOX = styled.div`
        width:500px;
        height:500px;
        background-color:${props.color == 2 ? "red" : props.color == 3 ? "green" : "blue"};
    `

    return (
        <>
            <BOX className="box">
                <p className="box__text">Hello World</p>
                <p className="box__icon"><i className="wi wi-night-sleet"></i></p>
            </BOX>
        </>
    )
}
