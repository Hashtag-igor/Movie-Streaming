import React, { useState, useEffect } from 'react'
import { fetchPopularMovies } from "../services/fetch/PopularMovies"
import { MapCardWrapper, HomeCardTitle } from "./Home"
import Card from "../components/Cards/Card"
import { useNavigate } from "react-router-dom"


export default function Popular() {
  const [PopularMovie, setPopularMovie] = useState([])

  const navigate = useNavigate()

  const goToTheProfilePage = (id) => {
    navigate(`/profile/${id}`);
  };

  useEffect(() => {
    fetchPopularMovies().then((popular) => {
      setPopularMovie(popular.results)
    })
  }, [])  

  return (
    <div>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "95%", margin: "60px auto 0 auto"}}>
        <div>
          <HomeCardTitle>POPULAR MOVIES</HomeCardTitle>  
        </div>
      </div>
      <div style={{display: 'flex',justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', margin: '30px 0', width: '100%', gap: "60px 0"}}>
        {PopularMovie.map((popular, key) => (
          <MapCardWrapper key={key}>
            <Card goToProfilePage={goToTheProfilePage} id={popular.id} poster={popular.poster_path} title={popular.title} overview={popular.overview} releaseDate={popular.release_date} voteAverage={popular.vote_average} />
          </MapCardWrapper>
        ))}
      </div>
    </div>
  )
}
