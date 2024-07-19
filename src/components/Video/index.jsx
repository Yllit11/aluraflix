import styled from "styled-components"
import Opciones from "../OpcionesVideo"


const ContenedorVideoCompuesto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const VideoCuerpo = styled.div`
    position: relative;
    width: 390px;
    height: 220px;
    border-radius: 18px 18px 0 0;
    overflow: hidden;

    /* Este pseudo-elemento se utiliza para aplicar el sombreado interno sobre el contenido del iframe */
    &::before {
    content: '';
    /* Se posiciona absolutamente dentro del VideoCuerpo y cubre todo el contenedor aplicando el box-shadow deseado. */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 8px ${props => props.shadowvideo || '#6bd1ff'};
    pointer-events: none; /* Asegura que el pseudo-elemento no interfiera con las interacciones del usuario con el iframe. */
    border-radius: 18px 18px 0 0; /* Es adecuado para que el pseudo-elemento tenga el mismo radio de borde */
    }

    iframe {
        width: 100%;
        height: 100%;
        border: none;
    }
`



const Video = ({shadowvideo, shadowopciones, imageneliminar, imageneditar, src}) => {
    return (
        <ContenedorVideoCompuesto>
            <VideoCuerpo shadowvideo={shadowvideo}> 
                <iframe
                    src={src}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </VideoCuerpo>
            <Opciones shadow={shadowopciones} imagenborrar={imageneliminar} imagenedit={imageneditar}></Opciones>
        </ContenedorVideoCompuesto>
    )
        
}

export default Video

