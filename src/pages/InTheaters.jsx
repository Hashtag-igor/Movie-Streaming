import { useState, useEffect} from 'react'
import { fetchInTheaters } from "../services/fetch/TheathersMovies"
import { MapCardWrapper, HomeCardTitle } from "./Home"
import Card from "../components/Cards/Card"
import { useNavigate } from "react-router-dom"

export default function InTheaters() {
  const [TheaterMovie, setTheatherMovie] = useState([])
  
  const navigate = useNavigate()

  const goToTheProfilePage = (id) => {
    navigate(`/profile/${id}`);
  };

  useEffect(() => {
    fetchInTheaters().then((data) => {
      setTheatherMovie(data.results)
    })
  },[])

  return (
    <div>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "95%", margin: "60px auto 0 auto"}}>
        <div>
          <HomeCardTitle>THEATERS MOVIES</HomeCardTitle>  
        </div>
      </div>
      <div style={{display: 'flex',justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', margin: '30px 0', width: '100%', gap: "60px 0"}}>
        {TheaterMovie.map((theater, key) => (
          <MapCardWrapper key={key}>
            <Card goToProfilePage={goToTheProfilePage} id={theater.id} poster={theater.poster_path} title={theater.title} overview={theater.overview} releaseDate={theater.release_date} voteAverage={theater.vote_average} />
          </MapCardWrapper>
        ))}
      </div>
  </div>
  )
}
