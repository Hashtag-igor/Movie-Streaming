import { useState, useEffect } from 'react';

import './Home.css'
import Card from "../../components/Card/Card";
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

//importando "moviesURL" e "apiKEY" do .env
const moviesURL = import.meta.env.VITE_API;
const apiKEY = import.meta.env.VITE_API_KEY;

export default function Home({setMoviesData}) {
  const [topMovies, setTopMovies] = useState([])
  const [popularMovies, setPopularMovies] = useState([])
  const [upcomingMovies, setUpcomingMovies] = useState([])
  const [nowPlayingMovies, setNowPlayingMovies] = useState([])

  const navigate = useNavigate()

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

  const moviesPickHandler = (moviesData) =>{
    setMoviesData(moviesData)
    navigate("/profile")
  }

  return (
    <div className='home'>
      <Navbar />
      <div className='home-card-container'>
        <h2 className='home-card-title'>Rated Movies</h2>
        <div className='map-card-area'>
          {topMovies && topMovies.filter((item, idx) => idx < 4).map((top, key) => (
            <div key={key} onClick={() => moviesPickHandler(top)}>
              <Card poster={top.poster_path} title={top.title} overview={top.overview} releaseDate={top.release_date} voteAverage={top.vote_average} voteCount={top.vote_count}/>
            </div>
          ))}
        </div>

        <h2 className='home-card-title'>Popular Movies</h2>
        <div className='map-card-area'>
          {popularMovies && topMovies.filter((item, idx) => idx < 4).map((popular, key) => (
            <div key={key} onClick={() => moviesPickHandler(popular)}>
              <Card poster={popular.poster_path} title={popular.title} overview={popular.overview} releaseDate={popular.release_date} voteAverage={popular.vote_average} voteCount={popular.vote_count}/>
            </div>
          ))}
        </div>

        <h2 className='home-card-title'>Upcoming Movies</h2>
        <div className='map-card-area'>
          {upcomingMovies && upcomingMovies.filter((item, idx) => idx < 4).map((upcoming, key) => (
            <div key={key} onClick={() => moviesPickHandler(upcoming)}>
              <Card poster={upcoming.poster_path} title={upcoming.title} overview={upcoming.overview} releaseDate={upcoming.release_date} voteAverage={upcoming.vote_average} voteCount={upcoming.vote_count}/>
            </div>
          ))}
        </div>
        
        <h2 className='home-card-title'>Now Playing</h2>
        <div className='map-card-area'>
          {nowPlayingMovies && nowPlayingMovies.filter((item, idx) => idx < 4).map((now, key) => (
            <div key={key} onClick={() => moviesPickHandler(now)}>
              <Card poster={now.poster_path} title={now.title} overview={now.overview} releaseDate={now.release_date} voteAverage={now.vote_average} voteCount={now.vote_count}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

