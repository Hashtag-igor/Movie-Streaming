import { useState, useEffect } from 'react'
import { fetchTrendingMovies } from "../services/fetch/TrendingMovies"
import { GenresTitle, TitleWrapper } from "../styles/GenresStyles"
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
      <TitleWrapper>
        <GenresTitle>TRENDING MOVIES</GenresTitle>  
      </TitleWrapper>

      <div style={{display: 'flex',justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', width: '100%', gap: "12px 0"}}>
        {TrendingMovie.map((trending) => (
          <Card key={trending.id} goToProfilePage={goToTheProfilePage} id={trending.id} poster={trending.poster_path} title={trending.title} overview={trending.overview} releaseDate={trending.release_date} voteAverage={trending.vote_average} />
        ))}
      </div>
    </div>
  )
}
