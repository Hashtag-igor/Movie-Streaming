import { useState, useEffect } from 'react';

import './App.css'
import Card from "./components/Card/Card";
import Navbar from './components/Navbar/Navbar';

//importando "moviesURL" e "apiKEY" do .env
const moviesURL = import.meta.env.VITE_API;
const apiKEY = import.meta.env.VITE_API_KEY;

function App() {
  const [topMovies, setTopMovies] = useState([])
  const [popularMovies, setPopularMovies] = useState([])

  const getTopRatedMovies = async (url) =>{
    const res = await fetch(url)
    const data = await res.json()
    //console.log(data.results)
    setTopMovies(data.results)
  }

  const getPopularMovies = async (url) =>{
    const res = await fetch(url)
    const data = await res.json()
    setPopularMovies(data.results)
  }

  useEffect(() =>{
    //top_rated   = melhores classificações
    const topRatedURL = `${moviesURL}top_rated?${apiKEY}`
    getTopRatedMovies(topRatedURL)
    //popular   = populares
    const popularURL = `${moviesURL}popular?${apiKEY}`
    getPopularMovies(popularURL)
  }, [])
  //upcoming    = Em breve
  //now_playing  = filmes em exibição

  console.log(moviesURL, apiKEY)

  return (
    <div className='app'>
      <Navbar />
    {/* {console.log(topMovies)}      */}
      <div className='card-container'>
          <h2 className='app-card-title'>Rated Movies</h2>
          <div className='rated-card-area'>
            {topMovies && topMovies.filter((item, idx) => idx < 4).map((movie, key) => (
              <div key={key}>
                <Card poster={movie.poster_path} title={movie.title} overview={movie.overview} releaseDate={movie.release_date} voteAverage={movie.vote_average} voteCount={movie.vote_count}/>
              </div>
            ))}
          </div>
          <h2 className='app-card-title'>Popular Movies</h2>
          <div className='popular-card-area'>
            {popularMovies && popularMovies.filter((item, idx) => idx < 4).map((popular, key) => (
              <div key={key}>
                <Card poster={popular.poster_path} title={popular.title} overview={popular.overview} releaseDate={popular.release_date} voteAverage={popular.vote_average} voteCount={popular.vote_count}/>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}

export default App
