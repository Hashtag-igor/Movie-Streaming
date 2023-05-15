import { useState, useEffect } from "react";

import { useSearchParams, useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";

const TVShowsURL = import.meta.env.VITE_TV_SEARCH;
const MoviesURL = import.meta.env.VITE_SEARCH;
const apiKEY = import.meta.env.VITE_API_KEY;

export default function Search({setProfileData}) {
  const [movies, setMovies] = useState([])
  const [TVShows, setTVShows] = useState([])

  const navigate = useNavigate()

  const [searchParams] = useSearchParams()
  const query = searchParams.get("q")

  const getSearchMoviesResults = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.results)
    setMovies(data.results)
  }

  const getSearchTVShowsResults = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setTVShows(data.results)
  }

  useEffect(() =>{  
    const searchMoviesURL = `${MoviesURL}?${apiKEY}&query=${query}`  //O "&" é usado nessa caso quando você quer unir mais algum parametro
    getSearchMoviesResults(searchMoviesURL)

    const searchTVShowsURL = `${TVShowsURL}?${apiKEY}&query=${query}`
    getSearchTVShowsResults(searchTVShowsURL)
  }, [query])

  const moviesAndTVShowsPickHandler = (moviesAndTVShowsData) => {
    setProfileData(moviesAndTVShowsData)
    navigate(`/profile/${query}`)
  }

  return (
    <div>
        <Navbar />
        <h2 className='home-card-title'>Resultados para: {query}</h2>
        <div className='map-card-area'>
          {movies && movies.map((data, key) => (
            <div key={key} onClick={() => moviesAndTVShowsPickHandler(data)}>
              <Card poster={data.poster_path} title={data.title} overview={data.overview} releaseDate={data.release_date} voteAverage={data.vote_average} language={data.original_language}/>
            </div>
          ))}
          {TVShows && TVShows.map((data, key) => (
            <div key={key} onClick={() => moviesAndTVShowsPickHandler(data)}>
              <Card poster={data.poster_path} title={data.name} overview={data.overview} releaseDate={data.first_air_date} voteAverage={data.vote_average} language={data.original_language}/>
            </div>
          ))}
        </div>
    </div>
  )
}
