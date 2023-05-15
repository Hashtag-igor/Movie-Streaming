// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";

import "./Profile.css"

const imgURL = import.meta.env.VITE_IMG
const imgURLTV = import.meta.env.VITE_TV_IMG

export default function Profile({moviesAndTVShowsData, profileData}) {
  const { name, title, poster_path, overview, release_date, first_air_date, vote_average, original_language } = profileData || moviesAndTVShowsData;

  console.log(profileData)
  
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if(!moviesAndTVShowsData || !profileData){
  //   navigate("/")
  // }
  // }, []);

  return (
    <>
      <Navbar />
      <div className="profile">
          <div className="profile-area">
            <div className="profile-components">
              <img className="profile-img" src={imgURLTV + poster_path ? imgURL + poster_path : imgURL + poster_path} alt="imagem do filme" />
            </div>
            <div className="profile-components">
              <div className="profile-descriptions">
                <h2 className="profile-title">{title ? title : name}</h2>
                <div className="date-vote-count">
                <div className="vote-average">{vote_average}<span style={{fontSize: "10px"}}>%</span></div>
                  <div className="language-box">
                    <div>{original_language}</div>
                  </div>
                  <div className="release-date">{release_date ? release_date : first_air_date}</div>
                </div>
                <div className="overview">
                  <h2 className="overview-title">Overview</h2>
                  {overview}
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* {moviesAndTVShowsData > 0 ? (
        <div className="profile">
          <div className="profile-area">
            <div className="profile-components">
              <img className="profile-img" src={imgURLTV + poster_path ? imgURL + poster_path : imgURL + poster_path} alt="imagem do filme" />
            </div>
            <div className="profile-components">
              <div className="profile-descriptions">
                <h2 className="profile-title">{title ? title : name}</h2>
                <div className="date-vote-count">
                <div className="vote-average">{vote_average}<span style={{fontSize: "10px"}}>%</span></div>
                  <div className="language-box">
                    <div>{original_language}</div>
                  </div>
                  <div className="release-date">{release_date ? release_date : first_air_date}</div>
                </div>
                <div className="overview">
                  <h2 className="overview-title">Overview</h2>
                  {overview}
                </div>
              </div>
            </div>
          </div>
        </div>
   ) : (
        <div className="profile">
          <div className="profile-area">
            <div className="profile-components">
              <img className="profile-img" src={imgURLTV + poster_path ? imgURL + poster_path : imgURL + poster_path} alt="imagem do filme" />
            </div>
            <div className="profile-components">
              <div className="profile-descriptions">
                <h2 className="profile-title">{title ? title : name}</h2>
                <div className="date-vote-count">
                <div className="vote-average">{vote_average}<span style={{fontSize: "10px"}}>%</span></div>
                  <div className="language-box">
                    <div>{original_language}</div>
                  </div>
                  <div className="release-date">{release_date ? release_date : first_air_date}</div>
                </div>
                <div className="overview">
                  <h2 className="overview-title">Overview</h2>
                  {overview}
                </div>
              </div>
            </div>
          </div>
        </div>
   )} */}
    </>
  )
}
