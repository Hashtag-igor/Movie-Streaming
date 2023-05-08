import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import CardProfile from "../../components/CardProfile/CardProfile";

export default function Profile({moviesData}) {
  const {title, poster_path, overview, date, vote_average, vote_count } = moviesData || {};

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
      <CardProfile />
    </>
  )
}
