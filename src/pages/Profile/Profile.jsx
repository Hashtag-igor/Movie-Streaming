import PropTypes from 'prop-types';
import Navbar from "../../components/Navbar/Navbar";
import styled from "styled-components"
import {GreenCard, RedCard, YellowCard, WhiteCard, Percent} from "../../components/Card/Card.jsx"

const imgURL = import.meta.env.VITE_IMG
const imgURLTV = import.meta.env.VITE_TV_IMG


const ProfileGreen = styled(GreenCard)`
  font-size: 26px;
  width: 70px;
  height: 70px;

  @media screen and (max-width: 480px){
    font-size: 22px;
    width: 50px;
    height: 50px;
  }
`
const ProfileYellow = styled(YellowCard)`
  font-size: 26px;
  width: 70px;
  height: 70px;

  @media screen and (max-width: 480px){
    font-size: 22px;
    width: 50px;
    height: 50px;
  }
`
const ProfileWhite = styled(WhiteCard)`
  font-size: 26px;
  width: 70px;
  height: 70px;

  @media screen and (max-width: 480px){
    font-size: 22px;
    width: 50px;
    height: 50px;
  }
`
const ProfileRed = styled(RedCard)`
  font-size: 26px;
  width: 70px;
  height: 70px;

  @media screen and (max-width: 480px){
    font-size: 22px;
    width: 50px;
    height: 50px;
  }
`


const ProfileContainer = styled.div`
  padding: 30px 0;
  position: relative;

  @media screen and (max-width: 768px){
    height: 100%;
    padding: 10px 0;
}
`
const ProfileBackground = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: .5;
  background-image: url(${props => props.image});

  @media screen and (max-width: 768px){
    background-position: center;
    height: 100%;
  }
`
const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: auto;
  gap: 0 50px;
  padding: 30px 0;
  margin-bottom: 20px;

  @media screen and (max-width: 1024px){
    flex-direction: column;
    gap: 50px 0;
  }

  @media screen and (max-width: 768px){
    width: 90%;
    gap: 40px 0;
  }
`
const ProfileComponents = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 768px){
    & > :first-child{
      width: 100%;
    }
  }
`
const ProfileImg = styled.img`
  border-radius: 1px;
  width: 370px;
  height: 500px;
  border: 8px solid black;

  @media screen and (max-width: 1024px){
    height: 450px;
    width: 380px;
  }
`
const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px 0;
  background-color: #ffffff;
  border: 4px solid #000000ee;
  padding: 30px 0;
  box-shadow: 10px 10px;

  @media screen and (max-width: 768px){
    width: 90%;
  }
`
const ProfileInfoTitle = styled.h2`
  font-size: 42px;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 15px;
  width: 95%;
  margin: auto;
  text-shadow: 2px 1px 1px #a5a5a5; 

  @media screen and (max-width: 768px){
    font-size: 38px;
  }
`
const ProfileVoteAndDateContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
const ProfileVoteContainer = styled.div``

const ProfileInfoSubTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 20px;

  @media screen and (max-width: 768px){
    font-size: 22px;
}
`
const ProfileVoteArea = styled.div`
  position: relative;
  background-color: #000;
  width: 90px;
  height: 90px;
  margin: auto;
  border-radius: 50%;

  @media screen and (max-width: 768px){
    padding: 1px;
  }

  @media screen and (max-width: 480px){
    width: 70px;
    height: 70px;
  }
`
const ProfileDateArea = styled.div``

const ProfileDateContent = styled.span``

const ProfileOverviewArea = styled.div`
  text-align: justify;
  width: 90%;
  margin: auto;
  font-size: 18px;
`


Profile.propTypes = {
  moviesAndTVShowsData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  profileData: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default function Profile({moviesAndTVShowsData, profileData}) {
  const { name, title, poster_path, overview, release_date, first_air_date, vote_average, backdrop_path } = profileData || moviesAndTVShowsData;

  console.log(profileData)

  const voteAverageBox = () => {
    if(vote_average === 0){
      return <ProfileWhite>{vote_average.toFixed(1)}<Percent>%</Percent></ProfileWhite>
    }
    if(vote_average > 0 && vote_average < 5){
      return <ProfileRed>{vote_average.toFixed(1)}<Percent>%</Percent></ProfileRed>
    }
    else if(vote_average > 4 && vote_average < 7){
      return <ProfileYellow>{vote_average.toFixed(1)}<Percent>%</Percent></ProfileYellow>
    }
    else if(vote_average > 6 && vote_average <= 10){
      return <ProfileGreen>{vote_average.toFixed(1)}<Percent>%</Percent></ProfileGreen>
    }
  }
  

  return (
    <>
      <Navbar />
      <ProfileContainer>
        <ProfileBackground image={`${imgURLTV + backdrop_path ? imgURL + backdrop_path : imgURL + backdrop_path}`}></ProfileBackground>
          <ProfileWrapper>
            <ProfileComponents>
              <ProfileImg src={imgURLTV + poster_path ? imgURL + poster_path : imgURL + poster_path} alt="Image not found" />
            </ProfileComponents>
            <ProfileComponents>
              <ProfileInfoContainer>
                <ProfileInfoTitle>{title ? title : name}</ProfileInfoTitle>
                <ProfileVoteAndDateContainer>
                  <ProfileVoteContainer>
                    <ProfileInfoSubTitle>vote average</ProfileInfoSubTitle>
                    <ProfileVoteArea>
                      {voteAverageBox()}
                      {/* {vote_average.toFixed(1)}<span style={{fontSize: "10px"}}>%</span> */}
                    </ProfileVoteArea>
                  </ProfileVoteContainer>
                  <ProfileDateArea>
                    <ProfileInfoSubTitle>date</ProfileInfoSubTitle>
                    <ProfileDateContent>{release_date ? release_date : first_air_date}</ProfileDateContent>
                  </ProfileDateArea>
                </ProfileVoteAndDateContainer>
                <ProfileOverviewArea>
                  <ProfileInfoSubTitle>Overview</ProfileInfoSubTitle>
                  {overview}
                </ProfileOverviewArea>
              </ProfileInfoContainer>
            </ProfileComponents>
          </ProfileWrapper>
        </ProfileContainer>
    </>
  )
}

