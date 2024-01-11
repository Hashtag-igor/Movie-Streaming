import React, { useState, useEffect } from 'react'
import { fetchTrendingMovies } from "../services/fetch/TrendingMovies"
import { MapCardWrapper, HomeCardTitle } from "./Home"
import Card from "../components/Cards/Card"
import { useNavigate } from "react-router-dom"


export default function TopRated() {
  const [TrendingMovie, setTrendingMovie] = useState([])

  const navigate = useNavigate()

  const goToTheProfilePage = (id) => {
    navigate(`/profile/${id}`);
  };

  useEffect(() => {
    fetchTrendingMovies().then((data) => {
      setTrendingMovie(data.results)
    })
  }, [])  

  return (
    <div>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "95%", margin: "60px auto 0 auto"}}>
        <div>
          <HomeCardTitle>TRENDING MOVIES</HomeCardTitle>  
        </div>
      </div>
      <div style={{display: 'flex',justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', margin: '30px 0', width: '100%', gap: "60px 0"}}>
        {TrendingMovie.map((trending, key) => (
          <MapCardWrapper key={key}>
            <Card goToProfilePage={goToTheProfilePage} id={trending.id} poster={trending.poster_path} title={trending.title} overview={trending.overview} releaseDate={trending.release_date} voteAverage={trending.vote_average} />
          </MapCardWrapper>
        ))}
      </div>
    </div>
  )
}
