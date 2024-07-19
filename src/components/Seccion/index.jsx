import styled from "styled-components";
import Boton from "../Boton";
import Galeria from "../Galeria";



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
    box-sizing: border-box;
`


const SeccionLista = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0;
    padding: 0 30px;
    width: 100%;
    height: auto;
    box-sizing: border-box;
`


const Seccion = ({botonlabel, botoncolor, sombreadointerno, listavideos}) => {
    return <ContenedorSeccion>
        <SeccionBoton><Boton label={botonlabel} color={botoncolor} /></SeccionBoton><SeccionLista><Galeria shadowcolor={sombreadointerno} videosarreglo= {listavideos}></Galeria></SeccionLista>
    </ContenedorSeccion>
}

export default Seccion

