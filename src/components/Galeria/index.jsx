import styled from "styled-components";
import Video from "../Video";




const ContenedorVideo = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2.5%;
    height: auto;
    border-radius: 0px;
    flex: 1 0 29%;
    margin: 20px;

    &::after{
        content: "";
        flex: 0 0 33%;
    }
`



const Galeria = ({shadowcolor, videosarreglo}) => {
    return (
        <ContenedorVideo>
            {videosarreglo.map((video) => (
            <Video key={video.id} src={video.src} shadowvideo={shadowcolor} shadowopciones={shadowcolor} imageneliminar="../../src/assets/erase.png" imageneditar="../../src/assets/edit.png"></Video>
            ))}    
        </ContenedorVideo>
    )
}

export default Galeria
