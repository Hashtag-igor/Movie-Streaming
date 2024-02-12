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
  height: 710px;
  
  @media screen and (max-width: 1116px){
    height: 790px;
  }

  @media screen and (max-width: 1024px){
    height: 770px;
  }

  @media screen and (max-width: 900px){
    height: 800px;
  }

  @media screen and (max-width: 840px){
    height: 850px;
  }

  @media screen and (max-width: 610px){
    height: 840px;
  }

  @media screen and (max-width: 520px){
    height: 880px;
  }

  @media screen and (max-width: 400px){
    height: 850px;
  }
`;

const ImgDesc = styled.img`
  height: 400px; 
  width: 300px;
  margin-right: 40px;

  @media screen and (max-width: 1116px){
    height: 490px;
  }

  @media screen and (max-width: 1024px){
    height: 470px;
  }

  @media screen and (max-width: 900px){
    height: 510px;
  }

  @media screen and (max-width: 840px){
    height: 560px;
  }

  @media screen and (max-width: 800px){
    height: 420px;
    width: 380px;
    margin: auto;
  }

  @media screen and (max-width: 700px){
    width: 360px;
    height: 400px;
  }

  @media screen and (max-width: 600px){
    width: 340px;
  }

  @media screen and (max-width: 500px){
    width: 320px;
    height: 380px;
  }

  @media screen and (max-width: 400px){
    width: 280px;
    height: 340px;
  }
`
const TitleDesc = styled.h2`
  margin-top: 15px; 
  font-size: 40px;

  @media screen and (max-width: 999px){
    font-size: 34px;
  }

  @media screen and (max-width: 800px){
    margin-top: 20px; 
    text-align: center;
    font-size: 36px;
  }

  @media screen and (max-width: 700px){
    font-size: 38px; 
  }

  @media screen and (max-width: 600px){
    font-size: 35px; 
  }

  @media screen and (max-width: 500px){
    font-size: 30px; 
  }

  @media screen and (max-width: 400px){
    font-size: 26px; 
  }

  @media screen and (max-width: 360px){
    font-size: 24px; 
  }
`
const VoteAverageContainer = styled.div`
  width: 50%; 
  display: flex; 
  align-items: center; 
  justify-content: left; 
  gap: 0 40px;

  @media screen and (max-width: 399px){
    width: 70%; 
    gap: 0 30px;
    margin-left: 10px;
  }
`
const MovieTime = styled.span`
  font-size: 24px; 
  font-weight: 600; 
  letter-spacing: 2px;

  @media screen and (max-width: 399px){
    font-size: 20px;
  }
`
const OverviewContainter = styled.div`
  margin: 20px 0 10px 0;

  @media screen and (max-width: 800px){
    margin: 0px 0 0px 0;
  }
`
const GenresBox = styled.div`
  background: white; 
  color: black; 
  padding: 5px 8px; 
  border-radius: 10px;

  @media screen and (max-width: 840px){
    font-size: 13px;
  }
`

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
                    <ImgDesc src={imageUrl} alt="" />
                  </div>
                  <div style={{display: "flex", flexDirection: "column", gap: "20px 0"}}>
                    <div>
                      <TitleDesc> {movie.title} <span>      
                      ({firstAirDate.getFullYear()}) </span> </TitleDesc>
                    </div>
                    
                    <VoteAverageContainer>
                      {voteAverageBox()}
                      <MovieTime>{durationInHours}h{durationInMinutes}</MovieTime>
                    </VoteAverageContainer>
                    
                    <OverviewContainter>
                      <p>{movie.overview} </p>
                    </OverviewContainter>
                    
                    <div style={{display: "flex", gap: "0 20px"}}>
                      {movieGenres.map((genres) => (
                        <div key={genres.id}>
                          <GenresBox>{genres.name}</GenresBox>
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
