import { useState, useEffect } from 'react'
import { fetchTopRatedMovies } from "../services/fetch/TopRatedMovies"
import Card from "../components/Cards/Card"
import { useNavigate } from "react-router-dom"
import { GenresTitle, TitleWrapper } from "../styles/GenresStyles"

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
      <TitleWrapper>
        <GenresTitle>TOP RATED MOVIES</GenresTitle> 
      </TitleWrapper>

      <div style={{display: 'flex',justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', width: '100%', gap: "12px 0"}}>
        {TopRatedMovie.map((topRated) => (
          <Card key={topRated.id} goToProfilePage={goToTheProfilePage} id={topRated.id} poster={topRated.poster_path} title={topRated.title} overview={topRated.overview} releaseDate={topRated.release_date} voteAverage={topRated.vote_average} />
        ))}
      </div>
    </div>
  )
}
