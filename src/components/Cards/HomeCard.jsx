import styled from "styled-components"
import PropTypes from 'prop-types';
import { imgApi } from "../../services/api/Api"


export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 240px;
  height: 520px;

  @media screen and (max-width: 1270px){
    width: 220px;
  }

  @media (max-width: 1180px) {
    width: 200px;
    height: 530px;
  }

  @media (max-width: 1090px) {
    width: 180px;
    height: 510px;
  }

  @media (max-width: 1000px) {
    width: 200px;
  }

  @media (max-width: 999px) {
    height: 530px;
  }

  @media (max-width: 860px) {
    width: 185px;
    height: 525px;
  }

  @media (max-width: 800px) {
    width: 93%;
    height: 540px;
  }

  @media (max-width: 799px) {
    height: 500px;
  }

  @media (max-width: 700px) {
    height: 620px;
  }

  @media (max-width: 699px) {
    height: 570px;
  }

  @media (max-width: 430px) {
    width: 97%;
  }

  @media (max-width: 390px) {
    width: 97%;
    height: 570px;
  }

  @media (max-width: 320px) {
    height: 520px;
  }
`;


export const CardComponents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const CardImg = styled.img`
  width: 100%;
  height: 380px;
  border-radius: 1rem;

  &:hover{
    border: 4px solid black;
    transition: 300ms all ease;
    cursor: pointer;
  }

  @media (max-width: 1180px) {
    height: 360px;
  }

  @media (max-width: 1090px) {
    height: 340px;
  }

  @media (max-width: 1000px) {
    height: 360px;
  }

  @media (max-width: 860px) {
    height: 345px;
  }

  @media (max-width: 800px) {
    height: 380px;
  }

  @media (max-width: 700px) {
    height: 500px;
  }

  @media (max-width: 430px) {
    height: 460px;

    &:hover{
    border: none;
    transition: none;
   }
  }

  @media (max-width: 350px) {
    height: 400px;
  }
  
`
const CardVoteArea = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 19px;
  transform: translate(182px, -2px);
  position: relative;
  background-color: #000;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 1px;
  

  @media screen and (max-width: 1270px){
    transform: translate(160px, -2px);
  }

  @media (max-width: 1180px) {
    transform: translate(143px, -5px);
  }

  @media (max-width: 1090px) {
    transform: translate(123px, -8px);
  }

  @media (max-width: 1000px) {
    transform: translate(143px, -5px);
  }

  @media (max-width: 860px) {
    transform: translate(128px, -5px);
  }

  @media (max-width: 800px) {
    transform: translate(124px, -5px);
  }
  @media (max-width: 799px) {
    transform: translate(285px, -5px);
  }

  @media (max-width: 765px) {
    transform: translate(276px, -4px);
  }

  @media (max-width: 740px) {
    transform: translate(267px, -4px);
  }

  @media (max-width: 720px) {
    transform: translate(255px, -4px);
  }

  @media (max-width: 700px) {
    transform: translate(248px, -4px);
  }

  @media (max-width: 699px) {
    transform: translate(537px, -4px);
  }
  
  @media (max-width: 680px) {
    transform: translate(518px, -4px);
  }

  @media (max-width: 660px) {
    transform: translate(500px, -4px);
  }

  @media (max-width: 640px) {
    transform: translate(480px, -4px);
  }

  @media (max-width: 620px) {
    transform: translate(465px, -4px);
  }

  @media (max-width: 600px) {
    transform: translate(445px, -4px);
  }

  @media (max-width: 580px) {
    transform: translate(428px, -4px);
  }
  
  @media (max-width: 560px) {
    transform: translate(415px, -4px);
  }

  @media (max-width: 540px) {
    transform: translate(400px, -4px);
  }

  @media (max-width: 520px) {
    transform: translate(380px, -4px);
  }

  @media (max-width: 500px) {
    transform: translate(360px, -4px);
  }

  @media (max-width: 480px) {
    transform: translate(338px, -4px);
  }

  @media (max-width: 460px) {
    transform: translate(323px, -4px);
  }

  @media (max-width: 440px) {
    transform: translate(312px, -4px);
  }

  @media (max-width: 420px) {
    transform: translate(330px, -4px);
  }

  @media (max-width: 410px) {
    transform: translate(320px, -4px);
  }

  @media (max-width: 400px) {
    transform: translate(310px, -4px);
  }

  @media (max-width: 390px) {
    transform: translate(300px, -4px);
  }

  @media (max-width: 380px) {
    transform: translate(290px, -4px);
  }

  @media (max-width: 370px) {
    transform: translate(280px, -4px);
  }

  @media (max-width: 360px) {
    transform: translate(270px, -4px);
  }

  @media (max-width: 350px) {
    transform: translate(258px, -4px);
  }

  @media (max-width: 340px) {
    transform: translate(250px, -4px);
  }

  @media (max-width: 330px) {
    transform: translate(240px, -4px);
  }

  @media (max-width: 320px) {
    transform: translate(235px, -4px);
  }
  
  @media (max-width: 315px) {
    transform: translate(228px, -4px);
  }

  @media (max-width: 305px) {
    transform: translate(224px, -4px);
  }
`
const CardInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: center;
  margin-top: -5px;

  @media (max-width: 800px) {
    width: 95%;
    margin: 0 auto 0 auto;
  }
`
const CardInfoTitle = styled.h2`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 1rem;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 700;
  color: black;
  font-family: 'Source Sans 3', sans-serif;
`
const CardInfoDate = styled.div`
  color: black;
  font-size: 1.1rem;
  text-align: center;
`
export const RedCard = styled.div`
  border-top: 5px solid #ff0000;
  border-right: 5px solid #4b0000;
  border-bottom: 5px solid #4b0000;
  border-left: 5px solid #4b0000;
  font-weight: 600;
  font-size: 17px;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const YellowCard = styled.div`
  border-top: 5px solid #fffb00;
  border-right: 5px solid #fffb00;
  border-bottom: 5px solid #807d00;
  border-left: 5px solid #807d00;
  font-weight: 600;
  font-size: 17px;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const GreenCard = styled.div`
  border-top: 5px solid #0fc209;
  border-right: 5px solid #0fc209;
  border-bottom: 5px solid #0fc209;
  border-left: 5px solid #033500;
  font-weight: 600;
  font-size: 17px;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const WhiteCard = styled.div`
  border-top: 5px solid #c2c2c2;
  border-right: 5px solid #c2c2c2;
  border-bottom: 5px solid #c2c2c2;
  border-left: 5px solid #c2c2c2;
  font-weight: 600;
  font-size: 17px;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Percent = styled.span`
  font-size: 10px;
`


export default function Card({ id, poster, title, releaseDate, voteAverage, goToProfilePage }) {
  const imageUrl = imgApi.defaults.baseURL + poster

  function formatDate(dateString) {
    if (!dateString) {
      return ""; 
    }
  
    const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
    const [year, month, day] = dateString.split('-').map(Number);
  
    // Obtém a abreviação do mês
    const abbreviatedMonth = months[month - 1];
  
    // Formata a data no estilo desejado
    const formattedDate = `${abbreviatedMonth} ${day}, ${year}`;
  
    return formattedDate;
  }
  
  let formattedDate = formatDate(releaseDate);

  const voteAverageBox = () => {
    if(voteAverage === 0){
      return <WhiteCard>{voteAverage.toFixed(1)}<Percent>%</Percent></WhiteCard>
    }
    if(voteAverage > 0 && voteAverage < 5){
      return <RedCard>{voteAverage.toFixed(1)}<Percent>%</Percent></RedCard>
    }
    else if(voteAverage > 4 && voteAverage < 7){
      return <YellowCard>{voteAverage.toFixed(1)}<Percent>%</Percent></YellowCard>
    }
    else if(voteAverage > 6 && voteAverage <= 10){
      return <GreenCard>{voteAverage.toFixed(1)}<Percent>%</Percent></GreenCard>
    }
  }
  
  return (
    <CardContainer>
      <CardComponents>
        <CardImg onClick={() => goToProfilePage(id)} src={imageUrl} alt="imagem do filme"/>
        
        <div style={{width: '100%', top: '1rem', position: 'absolute', display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
          <CardVoteArea>
            {voteAverageBox()}
          </CardVoteArea>
        </div>

        <CardInfoArea>
          <CardInfoTitle>{title}</CardInfoTitle>
          <CardInfoDate>{formattedDate}</CardInfoDate>
        </CardInfoArea>
      </CardComponents>
    </CardContainer>
  )
}


Card.propTypes = {
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  voteAverage: PropTypes.number,
  poster: PropTypes.string,
  id: PropTypes.number,
  overview: PropTypes.string
};
