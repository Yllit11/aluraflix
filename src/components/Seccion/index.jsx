import styled from "styled-components";
import Boton from "../Boton";


const ContenedorSeccion = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    margin: 0;
    width: 100%;
    padding: 30px 0;
    flex-grow: 1;
    background-color: #5656be;
`

const SeccionBoton = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    margin: 0;
    padding: 0 30px;
    width: 100%;
    height: auto;
    background-color: #242469;
    box-sizing: border-box;
`


const SeccionLista = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0 30px;
    width: 100%;
    height: auto;
    background-color: #9292ed;
    box-sizing: border-box;
`


const Seccion = ({titulo, color}) => {
    return <ContenedorSeccion>
        <SeccionBoton><Boton $color={color}>{titulo}</Boton></SeccionBoton><SeccionLista>Nuevo video</SeccionLista>
    </ContenedorSeccion>
}

export default Seccion