import styled from "styled-components";


const BotonCategoria = styled.button`
    width: 420px;
    background-color: ${props => props.color || '#6bd1ff'};
    font-family: "RobotoBlack";
    font-style: normal;
    font-size: 20px;
    color: #ffffff;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;

    &:hover{
        background-color: #ffffff;
        color: #4484a0;
        border-radius: 9px;
    }

`

const Boton = () => {
    return (
    <BotonCategoria></BotonCategoria>)
}

export default Boton