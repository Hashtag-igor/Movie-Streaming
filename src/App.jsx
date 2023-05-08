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
  const [upcomingMovies, setUpcomingMovies] = useState([])
  const [nowPlayingMovies, setNowPlayingMovies] = useState([])

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

  const getUpcomingMovies = async (url) =>{
    const res = await fetch(url)
    const data = await res.json()
    setUpcomingMovies(data.results)
  }

  const getNowPlyaing = async (url) =>{
    const res = await fetch(url)
    const data = await res.json()
    setNowPlayingMovies(data.results)
  }

  useEffect(() =>{
    //top_rated   = melhores classificações
    const topRatedURL = `${moviesURL}top_rated?${apiKEY}`
    getTopRatedMovies(topRatedURL)

    //popular   = populares
    const popularURL = `${moviesURL}popular?${apiKEY}`
    getPopularMovies(popularURL)

    //upcoming    = Em breve
    const upcomingURL = `${moviesURL}upcoming?${apiKEY}`
    getUpcomingMovies(upcomingURL)

    //now_playing  = filmes em exibição
    const nowPlayingURL = `${moviesURL}now_playing?${apiKEY}`
    getNowPlyaing(nowPlayingURL)
  }, [])

  console.log(moviesURL, apiKEY)

  return (
    <div className='app'>
      <Navbar />
      <div className='card-container'>
        <h2 className='app-card-title'>Rated Movies</h2>
        <div className='map-card-area'>
          {topMovies && topMovies.filter((item, idx) => idx < 4).map((top, key) => (
            <div key={key}>
              <Card poster={top.poster_path} title={top.title} overview={top.overview} releaseDate={top.release_date} voteAverage={top.vote_average} voteCount={top.vote_count}/>
            </div>
          ))}
        </div>

        <h2 className='app-card-title'>Popular Movies</h2>
        <div className='map-card-area'>
          {popularMovies && popularMovies.filter((item, idx) => idx < 4).map((popular, key) => (
            <div key={key}>
              <Card poster={popular.poster_path} title={popular.title} overview={popular.overview} releaseDate={popular.release_date} voteAverage={popular.vote_average} voteCount={popular.vote_count}/>
            </div>
          ))}
        </div>

        <h2 className='app-card-title'>Upcoming Movies</h2>
        <div className='map-card-area'>
          {upcomingMovies && upcomingMovies.filter((item, idx) => idx < 4).map((upcoming, key) => (
            <div key={key}>
              <Card poster={upcoming.poster_path} title={upcoming.title} overview={upcoming.overview} releaseDate={upcoming.release_date} voteAverage={upcoming.vote_average} voteCount={upcoming.vote_count}/>
            </div>
          ))}
        </div>
        
        <h2 className='app-card-title'>Now Playing</h2>
        <div className='map-card-area'>
          {nowPlayingMovies && nowPlayingMovies.filter((item, idx) => idx < 4).map((now, key) => (
            <div key={key}>
              <Card poster={now.poster_path} title={now.title} overview={now.overview} releaseDate={now.release_date} voteAverage={now.vote_average} voteCount={now.vote_count}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
