import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";

import "./Profile.css"

const imgURL = import.meta.env.VITE_IMG
const imgURLTV = import.meta.env.VITE_TV_IMG

export default function Profile({moviesData}) {
  const {name, title, poster_path, overview, release_date, first_air_date, vote_average, vote_count } = moviesData || {};

  console.log(moviesData)

  const navigate = useNavigate();

  useEffect(() => {
    if(!moviesData){
    navigate("/")
  }
  }, []);

  return (
    <>
      <Navbar />
      {/* {title} */}
      <div className="profile">
        <div className="profile-area">
          <div className="profile-components">
            <img className="profile-img" src={imgURLTV + poster_path ? imgURL + poster_path : imgURL + poster_path} alt="imagem do filme" />
          </div>
          <div className="profile-components">
            <div className="profile-descriptions">
              <div>{title ? title : name}</div>
              <div>{release_date ? release_date : first_air_date}</div>
              <div>{vote_average}</div>
              <div>{vote_count}</div>
              <div className="overview">{overview}</div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
