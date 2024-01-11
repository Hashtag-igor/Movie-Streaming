import styled from "styled-components"
import PropTypes from 'prop-types';
import { imgApi } from "../../services/api/Api"
import { GreenCard, RedCard, WhiteCard, YellowCard, Percent } from "../../components/Cards/HomeCard"

const CardContainer = styled.div`
  width: 240px;
  height: 570px;
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
`
const CardVoteArea = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 19px;
  transform: translate(180px, -370px);
  position: relative;
  background-color: #000;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 1px;
  margin-bottom: -30px;
`
const CardInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: center;
  margin-top: -10px;
`
const CardInfoTitle = styled.h2`
  display: flex;
    text-align: center;
    justify-content: center;
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


export default function Card({ id, poster, title, releaseDate, voteAverage, goToProfilePage }) {
  const imageUrl = imgApi.defaults.baseURL + poster

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