import styled from "styled-components"
import PropTypes from 'prop-types';
import { imgApi } from "../../services/api/Api"

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 18%;
  height: 530px;

  @media screen and (max-width: 1280px){
    height: 540px;
  }

  @media (max-width: 1180px) {
    height: 540px;
  }

  @media (max-width: 1090px) {
    height: 530px;
  }

  @media (max-width: 999px) {
    height: 510px;
  }

  @media (max-width: 899px) {
    height: 500px;
    width: 22%;
  }

  @media (max-width: 799px) {
    height: 540px;
    width: 46%;
  }

  @media (max-width: 700px) {
    height: 670px;
    width: 88%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }

  @media (max-width: 430px) {
    height: 600px;
    width: 94%;
  }

  @media (max-width: 400px) {
    width: 95%;
  }

  @media (max-width: 350px) {
    height: 580px;
  }

  @media (max-width: 320px) {
    height: 560px;
  }
`
const CardComponents = styled.div`
  width: 100%;
  height: 100%;
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
    height: 360px;
  }

  @media (max-width: 1000px) {
    height: 300px;
  }

  @media (max-width: 799px) {
    height: 380px;
  }

  @media (max-width: 700px) {
    height: 500px;
  }

  @media (max-width: 430px) {
    height: 440px;

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
  transform: translate(212px, -370px);
  position: relative;
  background-color: #000;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 1px;
  margin-bottom: -30px;

  @media (max-width: 1590px) {
    transform: translate(202px, -370px);
  }

  @media (max-width: 1470px) {
    transform: translate(192px, -370px);
  }

  @media (max-width: 1390px) {
    transform: translate(180px, -370px);
  }

  @media (max-width: 1330px) {
    transform: translate(170px, -370px);
  }

  @media (max-width: 1270px) {
    transform: translate(163px, -370px);
  }

  @media (max-width: 1220px) {
    transform: translate(156px, -370px);
  }

  @media (max-width: 1180px) {
    transform: translate(149px, -352px);
  }

  @media (max-width: 1140px) {
    transform: translate(140px, -352px);
  }

  @media (max-width: 1090px) {
    transform: translate(138px, -352px);
  }

  @media (max-width: 1080px) {
    transform: translate(143px, -352px);
    width: 40px;
    height: 40px;
  }

  @media (max-width: 1060px) {
    transform: translate(139px, -352px);
  }

  @media (max-width: 1040px) {
    transform: translate(135px, -352px);
  }

  @media (max-width: 1000px) {
    transform: translate(135px, -295px);
  }

  @media (max-width: 999px) {
    transform: translate(131px, -295px);
  }

  @media (max-width: 980px) {
    transform: translate(127px, -295px);
  }

  @media (max-width: 960px) {
    transform: translate(123px, -295px);
  }

  @media (max-width: 940px) {
    transform: translate(116px, -295px);
  }

  @media (max-width: 900px) {
    transform: translate(116px, -295px);
  }

  @media (max-width: 899px) {
    transform: translate(146px, -295px);
  }

  @media (max-width: 880px) {
    transform: translate(142px, -295px);
  }

  @media (max-width: 860px) {
    transform: translate(138px, -295px);
  }

  @media (max-width: 840px) {
    transform: translate(134px, -295px);
  }

  @media (max-width: 820px) {
    transform: translate(130px, -295px);
  }

  @media (max-width: 800px) {
    transform: translate(130px, -295px);
  }
  
  @media (max-width: 799px) {
    transform: translate(300px, -370px);
    width: 50px;
    height: 50px;
  }

  @media (max-width: 780px) {
    transform: translate(292px, -370px);
  }

  @media (max-width: 760px) {
    transform: translate(280px, -370px);
  }

  @media (max-width: 740px) {
    transform: translate(272px, -370px);
  }

  @media (max-width: 720px) {
    transform: translate(260px, -370px);
  }

  @media (max-width: 700px) {
    transform: translate(542px, -490px);
  }

  @media (max-width: 699px) {
    transform: translate(539px, -490px);
  }
  
  @media (max-width: 680px) {
    transform: translate(521px, -490px);
  }

  @media (max-width: 660px) {
    transform: translate(505px, -490px);
  }

  @media (max-width: 640px) {
    transform: translate(489px, -490px);
  }

  @media (max-width: 620px) {
    transform: translate(479px, -490px);
  }

  @media (max-width: 610px) {
    transform: translate(470px, -490px);
  }

  @media (max-width: 600px) {
    transform: translate(472px, -490px);
  }

  @media (max-width: 590px) {
    transform: translate(462px, -490px);
  }

  @media (max-width: 580px) {
    transform: translate(455px, -490px);
  }
  
  @media (max-width: 570px) {
    transform: translate(445px, -490px);
  }

  @media (max-width: 560px) {
    transform: translate(437px, -490px);
  }

  @media (max-width: 550px) {
    transform: translate(427px, -490px);
  }

  @media (max-width: 540px) {
    transform: translate(419px, -490px);
  }

  @media (max-width: 530px) {
    transform: translate(409px, -490px);
  }

  @media (max-width: 520px) {
    transform: translate(401px, -490px);
  }

  @media (max-width: 510px) {
    transform: translate(391px, -490px);
  }

  @media (max-width: 500px) {
    transform: translate(384px, -490px);
  }

  @media (max-width: 490px) {
    transform: translate(374px, -490px);
  }

  @media (max-width: 480px) {
    transform: translate(364px, -490px);
  }

  @media (max-width: 470px) {
    transform: translate(354px, -490px);
  }

  @media (max-width: 460px) {
    transform: translate(344px, -490px);
  }

  @media (max-width: 450px) {
    transform: translate(335px, -490px);
  }

  @media (max-width: 440px) {
    transform: translate(326px, -490px);
  }

  @media (max-width: 430px) {
    transform: translate(337px, -430px);
  }

  @media (max-width: 420px) {
    transform: translate(330px, -430px);
  }

  @media (max-width: 410px) {
    transform: translate(320px, -430px);
  }

  @media (max-width: 400px) {
    transform: translate(315px, -430px);
  }

  @media (max-width: 390px) {
    transform: translate(305px, -430px);
  }

  @media (max-width: 380px) {
    transform: translate(295px, -430px);
  }

  @media (max-width: 370px) {
    transform: translate(285px, -430px);
  }

  @media (max-width: 360px) {
    transform: translate(275px, -430px);
  }

  @media (max-width: 350px) {
    transform: translate(265px, -390px);
  }

  @media (max-width: 340px) {
    transform: translate(255px, -390px);
  }

  @media (max-width: 330px) {
    transform: translate(245px, -390px);
  }

  @media (max-width: 320px) {
    transform: translate(240px, -390px);
  }
  
  @media (max-width: 315px) {
    transform: translate(235px, -390px);
  }

  @media (max-width: 310px) {
    transform: translate(230px, -390px);
  }

  @media (max-width: 305px) {
    transform: translate(214px, -390px);
  }
`
const CardInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: center;
  margin: -14px 0 0 0;

  @media (max-width: 1080px) {
    margin: -4px 0 0 0;
  }

  @media (max-width: 799px) {
    margin: -10px 0 0 0;
  }
`
const CardInfoTitle = styled.h2`
  display: flex;
  text-align: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 17px;
  font-weight: 700;
  color: black;
  font-family: 'Source Sans 3', sans-serif;

  @media (max-width: 1180px) {
    font-size: 16px;
  }

  @media (max-width: 699px) {
    font-size: 17px;
  }
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

  @media (max-width: 1080px) {
    width: 30px;
    height: 30px;
    font-size: 14px;
  }

  @media (max-width: 799px) {
    width: 40px;
    height: 40px;
    font-size: 17px;
  }
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

  @media (max-width: 1080px) {
    width: 30px;
    height: 30px;
    font-size: 14px;
  }

  @media (max-width: 799px) {
    width: 40px;
    height: 40px;
    font-size: 17px;
  }
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

  @media (max-width: 1080px) {
    width: 30px;
    height: 30px;
    font-size: 14px;
  }

  @media (max-width: 799px) {
    width: 40px;
    height: 40px;
    font-size: 17px;
  }
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

  @media (max-width: 1080px) {
    width: 30px;
    height: 30px;
    font-size: 14px;
  }

  @media (max-width: 800px) {
    width: 40px;
    height: 40px;
    font-size: 17px;
  }
`
export const Percent = styled.span`
  font-size: 9px;

  @media (min-width: 1080px) {
    font-size: 8px;
  }

  @media (max-width: 799px) {
    font-size: 9px;
  }
`


export default function Card({ id, poster, title, releaseDate, voteAverage, goToProfilePage }) {
  const imageUrl = imgApi.defaults.baseURL + poster;

  function formatDate(dateString) {
    if (!dateString) {
      return "";
    }
  
    const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
    const [year, month, day] = dateString.split('-').map(Number);
  
    const abbreviatedMonth = months[month - 1];
  
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
        
        <CardVoteArea>
          {voteAverageBox()}
        </CardVoteArea>
              
        <CardInfoArea>
          <CardInfoTitle>{title}</CardInfoTitle>
          <CardInfoDate>{formattedDate}</CardInfoDate>
        </CardInfoArea>
      </CardComponents>
    </CardContainer>
  )
}


Card.propTypes = {
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
};