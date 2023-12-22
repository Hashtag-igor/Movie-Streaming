import styled from "styled-components";
import { imgApi } from "../../services/api/Api"

const CastContainer = styled.div`
  width: 200px; 
  height: 350px; 
  display: flex; 
  flex-wrap: wrap; 
  justify-content: center;

  background-image: url(${props => props.imageUrl});
`
const CastImage = styled.img`
  width: 100%;
  height: 90%;
  border-radius: 10px;
`

export default function CastCard({ profile, character, name}) {
  const imageUrl = profile ? imgApi.defaults.baseURL + profile : null;

  if (!imageUrl) {
    return null;
  }

  return (
    <CastContainer>
      <CastImage src={imageUrl} alt={name} />
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',width: '90%',margin: 'auto', textAlign: 'center', gap: '2px 0'}}>
          <p style={{marginTop: '5px'}}>{name}</p>
          <p>{character}</p>
      </div>
    </CastContainer>
  )
}
