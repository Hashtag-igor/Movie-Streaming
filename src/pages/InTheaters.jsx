import { useState, useEffect} from 'react'
import { fetchInTheaters } from "../services/fetch/TheathersMovies"
import { GenresTitle, TitleWrapper } from "../styles/GenresStyles"
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
      <TitleWrapper>
        <GenresTitle>THEATERS MOVIES</GenresTitle> 
      </TitleWrapper> 
      
      <div style={{display: 'flex',justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', width: '100%', gap: "12px 0"}}>
        {TheaterMovie.map((theater) => (
          <Card key={theater.id} goToProfilePage={goToTheProfilePage} id={theater.id} poster={theater.poster_path} title={theater.title} overview={theater.overview} releaseDate={theater.release_date} voteAverage={theater.vote_average} />
        ))}
      </div>
    </div>
  )
}
