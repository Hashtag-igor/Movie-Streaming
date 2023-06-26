import { useState, useEffect } from 'react';
import styled from "styled-components"
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from "../../components/Card/Card";
import Navbar from '../../components/Navbar/Navbar';

//importando "moviesURL" e "apiKEY" do .env
const moviesURL = import.meta.env.VITE_API;
const apiKEY = import.meta.env.VITE_API_KEY;
const TVURL = import.meta.env.VITE_TV_API;


const HomeContainer = styled.div`
  @media screen and (max-width: 480px){
    width: 100%;
    overflow-x: hidden;
  }
`
const HomeDescriptionArea = styled.div`
  border-bottom: 3px solid #161616;
  padding: 140px;
  color: white;
  background-image: url("https://cdn.pixabay.com/photo/2018/11/30/18/30/camera-3848320_1280.jpg");
  background-position: center;
  background-size: cover;
  text-shadow: 3px 3px 2px #000000;

  @media screen and (max-width: 768px){
    padding: 90px 15px;
  }

  @media screen and (max-width: 480px){
    border-bottom: 2px solid #161616;
    padding: 70px 20px;
    width: 100%;
    color: white;
  }
`
const HomeDescriptionTitle = styled.h1`
  margin: 0px 0px 10px 20px;
  font-size: 60px;

  @media screen and (max-width: 480px){
    margin: 0;
    font-size: 46px;
  }
`
const HomeDescriptionSubTitle = styled.h2`
  margin: 10px 0px 0px 20px;
  font-size: 28px;

  @media screen and (max-width: 480px){
    margin: 10px 0px 0px 0px;
    font-size: 24px;
    width: 95%;
  }
`
const HomeCardArea = styled.div`
  display: flex;
  flex-direction: column;

  & > :first-child{
    margin-top: 40px;
  }
`
const HomeCardTitle = styled.h2`
  margin: 10px 0 20px 20px;
  text-shadow: 2px 1px 1px #666666;
`
export const MapCardArea = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 60px;
  gap: 30px 0;
`
export const MapCardWrapper = styled.div``


//Para resolver o erro da passagem de props abaixo
Home.propTypes = {
  setmoviesAndTVShowsData: PropTypes.func,
};

export default function Home({setmoviesAndTVShowsData}) {
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

    //top_rated
    const topTVURL = `${TVURL}top_rated?${apiKEY}`
    getTopTV(topTVURL)

    //poular 
    const popularTVURL = `${TVURL}popular?${apiKEY}`
    getPopularTV(popularTVURL)
  }, [])

  // console.log(moviesURL, apiKEY)
  //console.log(TVURL, apiKEY)


  const moviesAndTVShowsPickHandler = (moviesData) =>{
    setmoviesAndTVShowsData(moviesData)
    navigate("/profile")
  }

  return (
    <HomeContainer>
      <Navbar />
      <HomeDescriptionArea>
        <HomeDescriptionTitle>Welcome,</HomeDescriptionTitle>
        <HomeDescriptionSubTitle>Find movies, Tv shows and more on THTV Streaming. Explore now..</HomeDescriptionSubTitle>
      </HomeDescriptionArea>
      <HomeCardArea>
        {/*MOVIES */}
        <HomeCardTitle>Rated Movies</HomeCardTitle>
        <MapCardArea>
          {topMovies && topMovies.filter((item, idx) => idx < 18).map((top, key) => (
            <MapCardWrapper key={key} onClick={() => moviesAndTVShowsPickHandler(top)}>
              <Card poster={top.poster_path} title={top.title} overview={top.overview} releaseDate={top.release_date} voteAverage={top.vote_average} />
            </MapCardWrapper>
          ))}
        </MapCardArea>

        <HomeCardTitle>Popular Movies</HomeCardTitle>
        <MapCardArea>
          {popularMovies && popularMovies.filter((item, idx) => idx < 18).map((popular, key) => (
            <MapCardWrapper key={key} onClick={() => moviesAndTVShowsPickHandler(popular)}>
              <Card poster={popular.poster_path} title={popular.title} overview={popular.overview} releaseDate={popular.release_date} voteAverage={popular.vote_average} />
            </MapCardWrapper>
          ))}
        </MapCardArea>

        <HomeCardTitle>Upcoming Movies</HomeCardTitle>
        <MapCardArea>
          {upcomingMovies && upcomingMovies.filter((item, idx) => idx < 18).map((upcoming, key) => (
            <MapCardWrapper key={key} onClick={() => moviesAndTVShowsPickHandler(upcoming)}>
              <Card poster={upcoming.poster_path} title={upcoming.title} overview={upcoming.overview} releaseDate={upcoming.release_date} voteAverage={upcoming.vote_average} language={top.original_language}/>
            </MapCardWrapper>
          ))}
        </MapCardArea>
        
        <HomeCardTitle>Now Playing Movies</HomeCardTitle>
        <MapCardArea>
          {nowPlayingMovies && nowPlayingMovies.filter((item, idx) => idx < 18).map((now, key) => (
            <MapCardWrapper key={key} onClick={() => moviesAndTVShowsPickHandler(now)}>
              <Card poster={now.poster_path} title={now.title} overview={now.overview} releaseDate={now.release_date} voteAverage={now.vote_average} language={now.original_language}/>
            </MapCardWrapper>
          ))}
        </MapCardArea>

        {/*TV SHOWS/SERIES */}
        <HomeCardTitle>TV Shows Airing Today</HomeCardTitle>
        <MapCardArea>
          {airingTodayTV && airingTodayTV.filter((item, idx) => idx < 18).map((airingToday, key) => (
            <MapCardWrapper key={key} onClick={() => moviesAndTVShowsPickHandler(airingToday)}>
              <Card poster={airingToday.poster_path} title={airingToday.name} overview={airingToday.overview} releaseDate={airingToday.first_air_date} voteAverage={airingToday.vote_average} language={airingToday.original_language}/>
            </MapCardWrapper>
          ))}
        </MapCardArea>

        <HomeCardTitle>Currently Airing TV Shows</HomeCardTitle>
        <MapCardArea>
          {onTheAirTV && onTheAirTV.filter((item, idx) => idx < 18).map((onTheAir, key) => (
            <MapCardWrapper key={key} onClick={() => moviesAndTVShowsPickHandler(onTheAir)}>
              <Card poster={onTheAir.poster_path} title={onTheAir.name} overview={onTheAir.overview} releaseDate={onTheAir.first_air_date} voteAverage={onTheAir.vote_average} language={onTheAir.original_language}/>
            </MapCardWrapper>
          ))}
        </MapCardArea>

        <HomeCardTitle>Top Rated TV Shows</HomeCardTitle>
        <MapCardArea>
          {topTV && topTV.filter((item, idx) => idx < 18).map((top, key) => (
            <MapCardWrapper key={key} onClick={() => moviesAndTVShowsPickHandler(top)}>
              <Card poster={top.poster_path} title={top.name} overview={top.overview} releaseDate={top.first_air_date} voteAverage={top.vote_average} voteCount={top.vote_count}/>
            </MapCardWrapper>
          ))}
        </MapCardArea>

        <HomeCardTitle>Popular TV Shows</HomeCardTitle>
        <MapCardArea>
          {popularTV && popularTV.filter((item, idx) => idx < 18).map((popularTVShows, key) => (
            <MapCardWrapper key={key} onClick={() => moviesAndTVShowsPickHandler(popularTVShows)}>
              <Card poster={popularTVShows.poster_path} title={popularTVShows.name} overview={popularTVShows.overview} releaseDate={popularTVShows.first_air_date} voteAverage={popularTVShows.vote_average} language={popularTVShows.original_language}/>
            </MapCardWrapper>
          ))}
        </MapCardArea>
      </HomeCardArea>
    </HomeContainer>
  )
}

