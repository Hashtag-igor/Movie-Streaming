import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { imgApi } from '../../services/api/Api';
import { Percent } from "../Cards/HomeCard"

const ProfileBackground = styled.div`
  position: relative; 
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  background-color: black;
  background-image: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  width: 100%; 
  height: 700px; 
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 150px;
  left: 0;
  right: 0;
  bottom: 100px;
  width: 85%;
  margin: auto;
  border-radius: 10px;
  background: rgba(27, 27, 27, 0.986); 
  color: white;
  padding: 20px; 

  @media screen and (max-width: 800px){
    height: 100%;
  }
`;

const InfoWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 800px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const RedCard = styled.div`
  border-top: 6px solid #ff0000;
  border-right: 6px solid #4b0000;
  border-bottom: 6px solid #4b0000;
  border-left: 6px solid #4b0000;
  font-weight: 600;
  font-size: 18px;
  color: white;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  /* top: 0;
  bottom: 0;
  left: 0;
  right: 0; */
  /* position: absolute; */
  display: flex;
  align-items: center;
  justify-content: center;
`
export const YellowCard = styled.div`
  border-top: 6px solid #fffb00;
  border-right: 6px solid #fffb00;
  border-bottom: 6px solid #807d00;
  border-left: 6px solid #807d00;
  font-weight: 600;
  font-size: 18px;
  color: white;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  /* top: 0;
  bottom: 0;
  left: 0;
  right: 0; */
  /* position: absolute; */
  display: flex;
  align-items: center;
  justify-content: center;
`
export const GreenCard = styled.div`
  border-top: 6px solid #0fc209;
  border-right: 6px solid #0fc209;
  border-bottom: 6px solid #0fc209;
  border-left: 6px solid #033500;
  font-weight: 600;
  font-size: 18px;
  color: white;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  /* top: 0;
  bottom: 0;
  left: 0;
  right: 0; */
  /* position: absolute; */
  display: flex;
  align-items: center;
  justify-content: center;
`
export const WhiteCard = styled.div`
  border-top: 6px solid #c2c2c2;
  border-right: 6px solid #c2c2c2;
  border-bottom: 6px solid #c2c2c2;
  border-left: 6px solid #c2c2c2;
  font-weight: 600;
  font-size: 18px;
  color: white;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  /* top: 0;
  bottom: 0;
  left: 0;
  right: 0; */
  /* position: absolute; */
  display: flex;
  align-items: center;
  justify-content: center;
`


export default function InfoCard({movie}) {
    const [ movieGenres, setMovieGenres ] = useState([])

    const imageBackdrop = imgApi.defaults.baseURL + movie.backdrop_path;
    const imageUrl = imgApi.defaults.baseURL + movie.poster_path;
    const voteAverage = movie.vote_average;
    const firstAirDate = new Date(movie.release_date);
    const durationInHours = Math.floor(movie.runtime / 60);
    const durationInMinutes = movie.runtime % 60;

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

    useEffect(() => {
        setMovieGenres(movie.genres)
    }, [movie.genres])


  return (
    <div>
        <ProfileBackground image={imageBackdrop} alt={movie.original_name}>
            <InfoContainer>
                <InfoWrapper>
                  <div>
                    <img style={{height: "400px", width: "300px", marginRight: "40px"}} src={imageUrl} alt="" />
                  </div>
                  <div style={{display: "flex", flexDirection: "column", gap: "20px 0"}}>
                    <div>
                      <h2 style={{marginTop: "15px", fontSize: "40px"}}> {movie.title} <span>      
                      ({firstAirDate.getFullYear()}) </span> </h2>
                    </div>
                    
                    <div style={{ width: "50%", display: "flex", alignItems: "center", justifyContent: "left", gap: "0 40px"}}>
                      {voteAverageBox()}
                      <span style={{fontSize: "24px", fontWeight: "600", letterSpacing: "2px"}}>{durationInHours}h{durationInMinutes}</span>
                    </div>
                    
                    <div style={{margin: "20px 0 10px 0"}}>
                      <p>{movie.overview} </p>
                    </div>
                    <div style={{display: "flex", gap: "0 20px"}}>
                      {movieGenres.map((genres) => (
                          <div key={genres.id}>
                              <span style={{background: "white", color: "black", padding: "5px 8px", borderRadius: "10px"}}>{genres.name}</span>
                          </div>
                      ))}
                    </div>
                  </div>
                </InfoWrapper>
            </InfoContainer>
        </ProfileBackground>
    </div>
  )
}
