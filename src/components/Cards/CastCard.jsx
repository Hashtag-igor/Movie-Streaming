import styled from "styled-components";
import { imgApi } from "../../services/api/Api"
import { CardComponents } from "./HomeCard"
import { CardInfoTitle } from "./HomeCard"

const CastContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 94%;
  height: 495px;

  @media screen and (max-width: 1270px){
    height: 490px;
  }

  @media (max-width: 1180px) {
    height: 480px;
  }

  @media (max-width: 1090px) {
    height: 470px;
  }

  @media (max-width: 999px) {
    height: 460px;
  }

  @media (max-width: 899px) {
    height: 450px;
  }

  @media (max-width: 799px) {
    height: 490px;
  }

  @media (max-width: 700px) {
    height: 500px;
  }

  @media (max-width: 699px) {
    height: 670px;
  }

  @media (max-width: 599px) {
    height: 570px;
  }

  @media (max-width: 430px) {
    width: 97%;
    height: 510px;
  }

  @media (max-width: 390px) {
    height: 490px;
  }

  @media (max-width: 320px) {
    height: 490px;
  }
`
const CastImage = styled.img`
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
    height: 330px;
  }

  @media (max-width: 900px) {
    height: 300px;
  }

  @media (max-width: 799px) {
    height: 380px;
  }

  @media (max-width: 699px) {
    height: 560px;
  }

  @media (max-width: 600px) {
    height: 500px;
  }

  @media (max-width: 500px) {
    height: 450px;
  }

  @media (max-width: 430px) {
    height: 420px;

    &:hover{
      border: none;
      transition: none;
    }
  }

  @media (max-width: 390px) {
    height: 400px;
  }

  @media (max-width: 350px) {
    height: 370px;
  }
`
const CastDesc = styled.div`
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

export default function CastCard({ profile, character, name}) {
  const imageUrl = profile ? imgApi.defaults.baseURL + profile : null;

  if (!imageUrl) {
    return null;
  }

  return (
    <CastContainer>
      <CardComponents>
        <CastImage src={imageUrl} alt={name} />
        <CastDesc>
          <CardInfoTitle>{name}</CardInfoTitle>
          <p>{character}</p>
        </CastDesc>
      </CardComponents>
    </CastContainer>
  )
}
