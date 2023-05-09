import { useState, useEffect } from 'react';

import './Home.css'
import Card from "../../components/Card/Card";
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

//importando "moviesURL" e "apiKEY" do .env
const moviesURL = import.meta.env.VITE_API;
const apiKEY = import.meta.env.VITE_API_KEY;
const TVURL = import.meta.env.VITE_TV_API;

export default function Home({setMoviesData}) {
  const [topMovies, setTopMovies] = useState([])
  const [popularMovies, setPopularMovies] = useState([])
  const [upcomingMovies, setUpcomingMovies] = useState([])
  const [nowPlayingMovies, setNowPlayingMovies] = useState([])
  const [airingTodayTV, setAiringTodayTV] = useState([])
  const [onTheAirTV, setOnTheAirTV] = useState([]) 
  const [popularTV, setPopularTV] = useState([])
  const [topTV, setTopTV] = useState([])

  const navigate = useNavigate()

  //movies get
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

  const getNowPlayingMovies = async (url) =>{
    const res = await fetch(url)
    const data = await res.json()
    setNowPlayingMovies(data.results)
  }

  //tv series get
  const getAiringTodayTV = async (url) =>{
    const res = await fetch(url)
    const data = await res.json()
    setAiringTodayTV(data.results)
  }

  const getOnTheAirTV = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setOnTheAirTV(data.results)
  }

  const getPopularTV = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setPopularTV(data.results)
  }

  const getTopTV = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setTopTV(data.results)
  }


  useEffect(() =>{
    //top_rated   = melhores classificações
    const topRatedURL = `${moviesURL}top_rated?${apiKEY}`
    getTopRatedMovies(topRatedURL)

    //popular   = populares
    const popularURL = `${moviesURL}popular?${apiKEY}`
    getPopularMovies(popularURL)

    //upcoming  = Em breve
    const upcomingURL = `${moviesURL}upcoming?${apiKEY}`
    getUpcomingMovies(upcomingURL)

    //now_playing  = filmes em exibição
    const nowPlayingURL = `${moviesURL}now_playing?${apiKEY}`
    getNowPlayingMovies(nowPlayingURL)

    //airing_today = 
    const airingTodayTVURL = `${TVURL}airing_today?${apiKEY}`
    getAiringTodayTV(airingTodayTVURL)

    //on_the_air
    const onTheAirTVURL = `${TVURL}on_the_air?${apiKEY}`
    getOnTheAirTV(onTheAirTVURL)

    //poular 
    const popularTVURL = `${TVURL}popular?${apiKEY}`
    getPopularTV(popularTVURL)

    //top_rated
    const topTVURL = `${TVURL}top_rated?${apiKEY}`
    getTopTV(topTVURL)
  }, [])

  // console.log(moviesURL, apiKEY)
  //console.log(TVURL, apiKEY)


  const moviesPickHandler = (moviesData) =>{
    setMoviesData(moviesData)
    navigate("/profile")
  }

  return (
    <div className='home'>
      <Navbar />
      <div className='home-card-container'>
        {/*MOVIES */}
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
          {popularMovies && popularMovies.filter((item, idx) => idx < 4).map((popular, key) => (
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

        {/*TV SHOWS/SERIES */}
        <h2 className='home-card-title'>TV Shows Airing Today</h2>
        <div className='map-card-area'>
          {airingTodayTV && airingTodayTV.filter((item, idx) => idx < 4).map((airingToday, key) => (
            <div key={key} onClick={() => moviesPickHandler(airingToday)}>
              <Card poster={airingToday.poster_path} title={airingToday.name} overview={airingToday.overview} releaseDate={airingToday.first_air_date} voteAverage={airingToday.vote_average} voteCount={airingToday.vote_count}/>
            </div>
          ))}
        </div>

        <h2 className='home-card-title'>Currently Airing TV Shows</h2>
        <div className='map-card-area'>
          {onTheAirTV && onTheAirTV.filter((item, idx) => idx < 4).map((onTheAir, key) => (
            <div key={key} onClick={() => moviesPickHandler(onTheAir)}>
              <Card poster={onTheAir.poster_path} title={onTheAir.name} overview={onTheAir.overview} releaseDate={onTheAir.first_air_date} voteAverage={onTheAir.vote_average} voteCount={onTheAir.vote_count}/>
            </div>
          ))}
        </div>

        <h2 className='home-card-title'>Popular TV Shows</h2>
        <div className='map-card-area'>
          {popularTV && popularTV.filter((item, idx) => idx < 4).map((popularTVShows, key) => (
            <div key={key} onClick={() => moviesPickHandler(popularTVShows)}>
              <Card poster={popularTVShows.poster_path} title={popularTVShows.name} overview={popularTVShows.overview} releaseDate={popularTVShows.first_air_date} voteAverage={popularTVShows.vote_average} voteCount={popularTVShows.vote_count}/>
            </div>
          ))}
        </div>

        <h2 className='home-card-title'>Top Rated TV Shows</h2>
        <div className='map-card-area'>
          {topTV && topTV.filter((item, idx) => idx < 4).map((top, key) => (
            <div key={key} onClick={() => moviesPickHandler(top)}>
              <Card poster={top.poster_path} title={top.name} overview={top.overview} releaseDate={top.first_air_date} voteAverage={top.vote_average} voteCount={top.vote_count}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

