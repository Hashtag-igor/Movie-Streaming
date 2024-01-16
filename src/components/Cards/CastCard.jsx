import styled from "styled-components";
import { imgApi } from "../../services/api/Api"
import { CardComponents} from "./HomeCard"

const CastContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 240px;
  height: 400px;
  margin-bottom: 50px;

  @media screen and (max-width: 1270px){
    width: 220px;
    height: 500px;
  }

  @media (max-width: 1180px) {
    width: 200px;
  }

  @media (max-width: 1090px) {
    width: 180px;
  }

  @media (max-width: 1000px) {
    width: 200px;
  }

  @media (max-width: 860px) {
    width: 185px;
  }

  @media (max-width: 800px) {
    width: 93%;
  }
`
const CastImage = styled.img`
  width: 100%;
  height: 350px;
  border-radius: 10px;
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
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',width: '90%',margin: 'auto', textAlign: 'center', gap: '2px 0'}}>
            <p>{name}</p>
            <p>{character}</p>
        </div>
      </CardComponents>
    </CastContainer>
  )
}
