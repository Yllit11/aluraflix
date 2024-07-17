import { styled } from "styled-components"



const ContenedorBotonesCabecera = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 28%;
`



const BotonesHeader = styled.button`
    width: 170px;
    background-color: #000030;
    font-family: "RobotoBlack";
    font-style: normal;
    font-size: 16px;
    color: #5656be;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;

    &:hover{
        background-color: #242469;
        color: #ffffff;
        border-radius: 9px;
    }

`

const BotonesCabecera = () => {
    return <ContenedorBotonesCabecera>
        <BotonesHeader>Home</BotonesHeader><BotonesHeader>Nuevo video</BotonesHeader>
    </ContenedorBotonesCabecera>
}

export default BotonesCabecera