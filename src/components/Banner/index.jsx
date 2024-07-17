import styled from "styled-components";


const ContenedorBannerPrincipal = styled.div`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    min-height: 500px;
    margin: 0;
    max-width: 100%;
    background-size: cover;
    padding: 30px;
`



const BannerParrafo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin: 50px 10px 0 20px;
    width: 45%;
    color: #ffffff;
`

const BotonBanner = styled.button`
    width: 200px;
    background-color: #6bd1ff;
    font-family: "RobotoBlack";
    font-style: normal;
    font-size: 20px;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    cursor: pointer;

    &:hover{
        background-color: #ffffff;
        color: #4484a0;
        border-radius: 9px;
    }

`

const TituloBanner = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 30px;
    color: #FFFFFF;
    padding: 0px;
`

const ParrafoBanner = styled.p`
    font-weight: 200;
    font-style: normal;
    font-size: 20px;
    line-height: 25px;
    padding: 0px;
`

const ContenedorBannerImagen = styled.img`
    background-image: ${props => `url(${props.$backgroundImageDerecha})`};
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35%;
    height: 200px;
    margin: 30px 20px;
    background-size: cover;
    background-position: center;
    padding: 30px;
`



const Banner = ({titulo, texto, backgroundImage, backgroundImageDerecha}) => {
    return (
    <ContenedorBannerPrincipal $backgroundImage={backgroundImage}>
        <BannerParrafo><BotonBanner>FRONTEND</BotonBanner><TituloBanner>{titulo}</TituloBanner><ParrafoBanner>{texto}</ParrafoBanner></BannerParrafo>
        <ContenedorBannerImagen $backgroundImageDerecha={backgroundImageDerecha}></ContenedorBannerImagen>
    </ContenedorBannerPrincipal>)
}

export default Banner