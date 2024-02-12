import { imgApi } from "../../services/api/Api"
import PropTypes from "prop-types";
import styled from "styled-components";
import { CardComponents } from "./HomeCard";


const GalleryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 94%;
  height: 500px;

  @media (max-width: 1000px) {
    height: 400px;
  }

  @media (max-width: 899px) {
    height: 360px;
  }

  @media (max-width: 800px) {
    height: 400px;
  }


  @media (max-width: 700px) {
    height: 360px;
    width: 96%;
  }

  @media (max-width: 600px) {
    height: 320px;
  }

  @media (max-width: 430px) {
    height: 280px;
  }

  @media (max-width: 350px) {
    height: 250px;
  }

  @media (max-width: 320px) {
    height: 220px;
  }
`

const GalleryImg = styled.img`
  width: 100%;
  height: 500px;
  border-radius: 1rem;

  @media (max-width: 1000px) {
    height: 400px;
  }

  @media (max-width: 899px) {
    height: 360px;
  }

  @media (max-width: 800px) {
    height: 400px;
  }

  @media (max-width: 700px) {
    height: 360px;
  }

  @media (max-width: 600px) {
    height: 320px;
  }

  @media (max-width: 430px) {
    height: 280px;
  }

  @media (max-width: 350px) {
    height: 250px;
  }

  @media (max-width: 320px) {
    height: 220px;
  }
`



export default function GalleryCompleteCard({image}) {
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

GalleryCompleteCard.propTypes = {
    image: PropTypes.shape({
      file_path: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.number,
    }).isRequired,
  }
