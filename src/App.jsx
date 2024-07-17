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


function App() {
  

  return (
    <>
      <FondoDegradado>
        <GlobalStyles />
        <Cabecera />
        <Banner titulo = "Challenge React" texto = "Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React." backgroundImage={banner} backgroundImageDerecha={imagenbanner}/>
        <Seccion titulo= "FRONTEND" color="#000025" />
      </FondoDegradado>
    </>
  )
}

export default App
