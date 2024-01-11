import React, { useState, useEffect } from 'react'
import { fetchTopRatedMovies } from "../services/fetch/TopRatedMovies"
import { MapCardWrapper, HomeCardTitle } from "./Home"
import Card from "../components/Cards/Card"
import { useNavigate } from "react-router-dom"


export default function TopRated() {
  const [TopRatedMovie, setTopRatedMovie] = useState([])

  const navigate = useNavigate()

  const goToTheProfilePage = (id) => {
    navigate(`/profile/${id}`);
  };

  useEffect(() => {
    fetchTopRatedMovies().then((data) => {
      setTopRatedMovie(data.results)
    })
  }, [])  

  return (
    <div>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "95%", margin: "60px auto 0 auto"}}>
        <div>
          <HomeCardTitle>TOP RATED MOVIES</HomeCardTitle>  
        </div>
      </div>
      <div style={{display: 'flex',justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', margin: '30px 0', width: '100%', gap: "60px 0"}}>
        {TopRatedMovie.map((topRated, key) => (
          <MapCardWrapper key={key}>
            <Card goToProfilePage={goToTheProfilePage} id={topRated.id} poster={topRated.poster_path} title={topRated.title} overview={topRated.overview} releaseDate={topRated.release_date} voteAverage={topRated.vote_average} />
          </MapCardWrapper>
        ))}
      </div>
    </div>
  )
}
