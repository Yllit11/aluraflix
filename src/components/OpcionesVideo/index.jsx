import styled from "styled-components";


const ContenedorVideoOpciones = styled.div`
    background-color: #0d0d24;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-radius: 0 0 18px 18px;
    padding: 10px 0;
    box-shadow: inset 0 0 8px ${props => props.shadow || '#6bd1ff'};    
`

const Opcion = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 25%;
    height: auto;
    padding: 0 15%;
    cursor: pointer;
`

const Imagen = styled.img`
    width: 25px;
    height: auto;
    margin: 2px;
`

const Label = styled.span`
    font-family: "RobotoBold";
    font-size: 14px;
    color: #ede7f5;
    line-height: 19px;

    &:hover{
        color: #9292ed;
    }
`



const Opciones = ({shadow, imagenborrar, imagenedit}) => {
    return (
        <ContenedorVideoOpciones shadow={shadow}>
            <Opcion><Imagen src={imagenborrar} /><Label>Borrar</Label></Opcion>
            <Opcion><Imagen src={imagenedit} /><Label>Editar</Label></Opcion>
        </ContenedorVideoOpciones>
    )
        
}

export default Opciones