import { useState, useEffect } from 'react'
import { fetchPopularMovies } from "../services/fetch/PopularMovies"
import { GenresTitle, TitleWrapper } from "../styles/GenresStyles"
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
      <TitleWrapper>
        <GenresTitle>POPULAR MOVIES</GenresTitle> 
      </TitleWrapper> 
  
      <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', width: '100%', gap: "12px 0"}}>
        {PopularMovie.map((popular) => (
          <Card key={popular.id} goToProfilePage={goToTheProfilePage} id={popular.id} poster={popular.poster_path} title={popular.title} overview={popular.overview} releaseDate={popular.release_date} voteAverage={popular.vote_average} />
        ))}
      </div>
    </div>
  )
}
