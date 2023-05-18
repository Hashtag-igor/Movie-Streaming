// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";

import "./Profile.css"

const imgURL = import.meta.env.VITE_IMG
const imgURLTV = import.meta.env.VITE_TV_IMG

export default function Profile({moviesAndTVShowsData, profileData}) {
  const { name, title, poster_path, overview, release_date, first_air_date, vote_average, backdrop_path } = profileData || moviesAndTVShowsData;

  console.log(profileData)
  
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if(!moviesAndTVShowsData || !profileData){
  //   navigate("/")
  // }
  // }, []);

  const voteAverage = () => {
    if(vote_average === 0){
      return <div className="white">{vote_average.toFixed(1)}<span style={{fontSize: "10px"}}>%</span></div>
    }
    if(vote_average > 0 && vote_average < 5){
      return <div className="red">{vote_average.toFixed(1)}<span style={{fontSize: "10px"}}>%</span></div>
    }
    else if(vote_average > 4 && vote_average < 7){
      return <div className="yellow">{vote_average.toFixed(1)}<span style={{fontSize: "10px"}}>%</span></div>
    }
    else if(vote_average > 6 && vote_average <= 10){
      return <div className="green">{vote_average.toFixed(1)}<span style={{fontSize: "10px"}}>%</span></div>
    }
  }

  return (
    <>
      <Navbar />
      <div className="profile" >
        <div className="profile-background" style={{backgroundImage: `url(${imgURLTV + backdrop_path ? imgURL + backdrop_path : imgURL + backdrop_path})`}}></div>
          <div className="profile-area">
            <div className="profile-components" >
              <img className="profile-img" src={imgURLTV + poster_path ? imgURL + poster_path : imgURL + poster_path} alt="Image not found" />
            </div>
            <div className="profile-components">
              <div className="profile-descriptions">
                <h2 className="profile-title">{title ? title : name}</h2>
                <div className="date-vote-count">
                <div>
                  <h2 className="profile-all-title">vote average</h2>
                  <div className="vote-average">
                    {voteAverage()}
                    {/* {vote_average.toFixed(1)}<span style={{fontSize: "10px"}}>%</span> */}
                  </div>
                </div>
                  <div className="release-date">
                    <h2 className="profile-all-title">date</h2>
                    <span>{release_date ? release_date : first_air_date}</span>
                  </div>
                </div>
                <div className="overview">
                  <h2 className="profile-all-title">Overview</h2>
                  {overview}
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
