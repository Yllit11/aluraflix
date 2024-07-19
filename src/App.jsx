import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Cabecera from "./components/Cabecera"
import Banner from "./components/Banner"
import banner from "./assets/banner.png"
import imagenbanner from "./assets/player.png"
import Seccion from "./components/Seccion"


const FondoDegradado = styled.div`
background: linear-gradient(0deg, #000000,#000040);
width: 100%;
min-height: 100vh;`

const videos = [
  { id: '1', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: '2', src: 'https://www.youtube.com/embed/IX2hbrMWqpc?si=HwtRebedBzRD4C74' },
  { id: '3', src: 'https://www.youtube.com/embed/3JZ_D3ELwOQ' }
];


function App() {
  

  return (
    <>
      <FondoDegradado>
        <GlobalStyles />
        <Cabecera />
        <Banner titulo = "Challenge React" texto = "Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React." backgroundImage={banner} backgroundImageDerecha={imagenbanner}/>
        <Seccion listavideos={videos} botonlabel="FRONT END" botoncolor="#68c4ee" sombreadointerno="#68c4ee"/>
      </FondoDegradado>
    </>
  )
}

export default App

 