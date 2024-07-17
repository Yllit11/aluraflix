import styled from "styled-components"
import BotonesCabecera from "../BotonesCabecera"

const HeaderAluraflix = styled.header`
    background-color: #000000b9;
    padding: 30px;
    display: flex;
    justify-content: space-between;

    img{
        width: 200px;
    }
`

const Cabecera = () => {
    return <HeaderAluraflix>
        <img src="img/LogoMain.png" alt="Loga AluraFlix"></img>
        <BotonesCabecera />
    </HeaderAluraflix>
}

export default Cabecera