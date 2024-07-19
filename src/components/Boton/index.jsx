import styled from "styled-components";


const BotonCategoria = styled.button`
    width: 390px;
    background-color: ${props => props.color || '#6bd1ff'};
    font-family: "RobotoBlack";
    font-style: normal;
    font-size: 24px;
    color: #ffffff;
    padding: 13px;
    margin: 0 20px;
    border-color: ${props => props.color || '#6bd1ff'};
    border-radius: 12px;
    cursor: pointer;

    &:hover{
        background-color: #ffffff;
        color: #000030;
        opacity: 1;
        border-radius: 10px;
    }

`

const Boton = ({label, color}) => {
    return (
    <BotonCategoria color={color}>{label}</BotonCategoria>)
}

export default Boton