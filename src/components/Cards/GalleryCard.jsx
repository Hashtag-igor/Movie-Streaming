import { imgApi } from "../../services/api/Api"
import PropTypes from "prop-types";
import styled from "styled-components";
import { CardComponents } from "./HomeCard";


const GalleryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 98%;
  height: 380px;

  @media (max-width: 1090px) {
    height: 370px;
  }

  @media (max-width: 899px) {
    height: 330px;
  }

  @media (max-width: 800px) {
    height: 450px;
  }

  @media (max-width: 799px) {
    height: 420px;
  }

  @media (max-width: 699px) {
    height: 340px;
    width: 98%;
  }

  @media (max-width: 430px) {
    height: 320px;
  }

  @media (max-width: 399px) {
    height: 290px;
  }
`

const GalleryImg = styled.img`
  width: 100%;
  height: 340px;
  border-radius: 1rem;

  &:hover{
    border: 2px solid black;
    transition: 300ms all ease;
    cursor: pointer;
  }

  @media (max-width: 1300px) {
    height: 300px;
  }

  @media (max-width: 1180px) {
    height: 360px;
  }

  @media (max-width: 1090px) {
    height: 340px;
  }

  @media (max-width: 1000px) {
    height: 340px;
  }

  @media (max-width: 999px) {
    height: 340px;
  }

  @media (max-width: 899px) {
    height: 300px;
  }

  @media (max-width: 800px) {
    height: 420px;
  }

  @media (max-width: 799px) {
    height: 390px;
  }

  @media (max-width: 700px) {
    height: 380px;
  }

  @media (max-width: 699px) {
    height: 310px;
  }

  @media (max-width: 430px) {
    height: 290px;

    &:hover{
    border: none;
    transition: none;
   }
  }

  @media (max-width: 350px) {
    height: 250px;
  }
`



export default function GalleryCard({image}) {
  return (
    <GalleryContainer>
      <CardComponents>
        <div>
          <GalleryImg src={imgApi.defaults.baseURL + image.file_path} alt="" />
        </div>
      </CardComponents>
    </GalleryContainer>
  )
}

GalleryCard.propTypes = {
    image: PropTypes.shape({
      file_path: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.number,
    }).isRequired,
  }
