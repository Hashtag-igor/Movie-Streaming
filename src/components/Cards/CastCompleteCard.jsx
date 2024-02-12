import { imgApi } from "../../services/api/Api"
import styled from "styled-components";
import PropTypes from 'prop-types';

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 18%;
  height: 500px;

  @media screen and (max-width: 1280px){
    height: 540px;
  }

  @media (max-width: 1180px) {
    height: 540px;
  }

  @media (max-width: 1100px) {
    height: 490px;
  }

  @media (max-width: 899px) {
    height: 460px;
    width: 22%;
  }

  @media (max-width: 799px) {
    height: 520px;
    width: 46%;
  }

  @media (max-width: 700px) {
    height: 640px;
    width: 88%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }

  @media (max-width: 430px) {
    height: 580px;
    width: 94%;
  }

  @media (max-width: 400px) {
    width: 95%;
  }

  @media (max-width: 350px) {
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
  height: 350px;
  border-radius: 1rem;

  &:hover{
    border: 4px solid black;
    transition: 300ms all ease;
    cursor: pointer;
  }

  @media (max-width: 1180px) {
    height: 360px;
  }

  @media (max-width: 1100px) {
    height: 320px;
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
const CardInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: center;
  margin: 8px 0 0 0;
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



export default function CastCompleteCard({ profile, character, name }) {
    const imageUrl = profile ? imgApi.defaults.baseURL + profile : null;

    if (!imageUrl) {
      return null;
    }

  
  return (
    <CardContainer>
      <CardComponents>
        <CardImg src={imageUrl} alt={name}/>    
        <CardInfoArea>
          <CardInfoTitle>{name}</CardInfoTitle>
          <CardInfoDate>{character}</CardInfoDate>
        </CardInfoArea>
      </CardComponents>
    </CardContainer>
  )
}


CastCompleteCard.propTypes = {
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
};