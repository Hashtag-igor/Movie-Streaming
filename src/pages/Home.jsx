import { useState, useEffect } from 'react';
import styled from "styled-components"
import PropTypes from 'prop-types';
import HomeCard from "../components/Cards/HomeCard"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom"
import { useCarousel } from "../components/Carousel/Carousel" 
import { fetchTrendingMovies } from "../services/fetch/TrendingMovies"
import { fetchInTheaters } from "../services/fetch/TheathersMovies"
import { fetchPopularMovies } from "../services/fetch/PopularMovies"
import { fetchTopRatedMovies } from "../services/fetch/TopRatedMovies"


const HomeContainer = styled.div`
  width: 100%;    
  overflow-x: hidden;
`
const HomeDescriptionContainer = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  color: white;
  background-image: url("https://cdn.pixabay.com/photo/2018/11/30/18/30/camera-3848320_1280.jpg");
  background-position: center;
  background-size: cover;
  text-shadow: 3px 3px 2px #000000;
  width: 100%;
`
const HomeDescriptionWrapper = styled.div`
  display: flex; 
  flex-direction: column; 
  width: 90%; 
  justify-content: center; 
  align-Items: flex-start; 
  margin: auto; 
  text-align: left;

  @media screen and (max-width: 500px){
    width: 94%;
  }
`
const HomeDescriptionTitle = styled.h1`
  margin: 0px 0px 10px 0px;
  font-size: 60px;
  color: #e6aa13;
  text-shadow: 0.1em 0.1em black;

  @media screen and (max-width: 600px){
    font-size: 50px;
  }

  @media screen and (max-width: 400px){
    font-size: 42px;
    margin: 0 auto 15px auto;
  }

  @media screen and (max-width: 350px){
    font-size: 39px;
  }
`
const HomeDescriptionSubTitle = styled.h2`
  color: white;
  margin-top: 2px;
  overflow: hidden;
  display: inline-block;
  border-right: .15em solid orange;
  position: relative;
  animation: typing-erasing 35s steps(30, end) infinite;
  height: 1.3em;

    @keyframes typing-erasing {
      0%, 100% { width: 0; }
      25%, 75% { width: 75%; }
      50% { width: 75%; }
    }

    @media screen and (max-width: 1280px){ 
      @keyframes typing-erasing {
        0%, 100% { width: 0; }
        25%, 75% { width: 80%; }
        50% { width: 80%; }
      }
    }

    @media screen and (max-width: 1200px){ 
      @keyframes typing-erasing {
        0%, 100% { width: 0; }
        25%, 75% { width: 85%; }
        50% { width: 85%; }
      }
    }

    @media screen and (max-width: 1130px){ 
      @keyframes typing-erasing {
        0%, 100% { width: 0; }
        25%, 75% { width: 90%; }
        50% { width: 90%; }
      }
    }

    @media screen and (max-width: 1060px){ 
      @keyframes typing-erasing {
        0%, 100% { width: 0; }
        25%, 75% { width: 95%; }
        50% { width: 95%; }
      }
    }

    @media screen and (max-width: 1005px){ 
      @keyframes typing-erasing {
        0%, 100% { width: 0; }
        25%, 75% { width: 100%; }
        50% { width: 100%; }
      }
    }

    @media screen and (max-width: 955px){ 
      height: 2.5em;
    }

    @media screen and (max-width: 485px){ 
      height: 3.7em;
    }

    @media screen and (max-width: 360px){ 
      height: 4.7em;
    }
`
const HomeCardArea = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 30px 20px;

  & > :first-child {
    margin-top: 90px;
  }

  @media screen and (max-width: 800px){
    margin: 0 0 60px 20px;
  }

  @media screen and (max-width: 430px){
    margin: 0 0 10px 25px;
  }

`;

export const HomeCardTitle = styled.h2`
  margin: 0 0 18px 0;
  font-weight: bolder;
  font-size: 36px;
  text-shadow: 1px 1px 2px black;
  
  @media screen and (max-width: 500px){
    margin: 0 36px 30px 0;
    text-align: center;
    font-size: 33px;
  }

  @media screen and (max-width: 428px){
    text-align: center;
  }

  @media screen and (max-width: 400px){
    font-size: 32px;
  }

  @media screen and (max-width: 375px){
    font-size: 30px;
  }

  @media screen and (max-width: 330px){
    font-size: 26px;
  }
  
`
export const MapCardArea = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`
export const MapCardWrapper = styled.div``


Home.propTypes = {
  setmoviesAndTVShowsData: PropTypes.func,
};


export default function Home() {
  const [TrendingMovie, setTrendingMovie] = useState([])
  const [TheatersMovie, setTheatersMovie] = useState([])
  const [TopRatedMovie, setTopRatedMovie] = useState([])
  const [PopularMovie, setPopularMovie] = useState([])

  const navigate = useNavigate()
  const { Carousel } = useCarousel();


  const goToTheProfilePage = (id) => {
    navigate(`/profile/${id}`);
  };


  useEffect(() => {
    fetchTopRatedMovies().then((TopRatedMovie) => {
      setTopRatedMovie(TopRatedMovie.results);
    });
  }, []);

  useEffect(() => {
    fetchPopularMovies().then((PopularMovie) => {
      setPopularMovie(PopularMovie.results);
    });
  }, []);

  useEffect(() => {
    fetchTrendingMovies().then((TrendingMovie) => {
      setTrendingMovie(TrendingMovie.results);
    });
  }, []);

  useEffect(() => {
    fetchInTheaters().then((TheatersMovie) => {
      setTheatersMovie(TheatersMovie.results);
    });
  }, []);

  
  return (
    <HomeContainer>
      <HomeDescriptionContainer>
        <HomeDescriptionWrapper>
          <HomeDescriptionTitle>Welcome,</HomeDescriptionTitle>
          <HomeDescriptionSubTitle>Discover a world of cinematic wonders on THTV Streaming. Explore now..</HomeDescriptionSubTitle>
        </HomeDescriptionWrapper>
      </HomeDescriptionContainer>

      
      <HomeCardArea>
        <HomeCardTitle>TRENDING MOVIES</HomeCardTitle>
        <Carousel slidesToShow={window.innerWidth < 600 ? 1 : window.innerWidth < 800 ? 2 : window.innerWidth < 1000 ? 4 : 5} >
          {TrendingMovie && TrendingMovie.filter((item, idx) => idx < 20).map((trending, key) => (
            <MapCardWrapper key={key}>
              <HomeCard goToProfilePage={goToTheProfilePage} id={trending.id} poster={trending.poster_path} title={trending.title} overview={trending.overview} releaseDate={trending.release_date} voteAverage={trending.vote_average} />
            </MapCardWrapper>
          ))}
        </Carousel> 
      </HomeCardArea>

      <HomeCardArea>
        <HomeCardTitle>THEATERS MOVIES</HomeCardTitle>
        <Carousel slidesToShow={window.innerWidth < 600 ? 1 : window.innerWidth < 800 ? 2 : window.innerWidth < 1000 ? 4 : 5}>
          {TheatersMovie && TheatersMovie.filter((item, idx) => idx < 20).map((theater, key) => (
            <MapCardWrapper key={key}>
              <HomeCard goToProfilePage={goToTheProfilePage} id={theater.id} poster={theater.poster_path} title={theater.title} overview={theater.overview} releaseDate={theater.release_date} voteAverage={theater.vote_average} />
            </MapCardWrapper>
          ))}
        </Carousel>
      </HomeCardArea>
    
      <HomeCardArea>
        <HomeCardTitle>TOP RATED MOVIES</HomeCardTitle>
        <Carousel slidesToShow={window.innerWidth < 600 ? 1 : window.innerWidth < 800 ? 2 : window.innerWidth < 1000 ? 4 : 5}>
          {TopRatedMovie && TopRatedMovie.filter((item, idx) => idx < 20).map((top, key) => (
            <MapCardWrapper key={key}>
              <HomeCard goToProfilePage={goToTheProfilePage} id={top.id} poster={top.poster_path} title={top.title} overview={top.overview} releaseDate={top.release_date} voteAverage={top.vote_average} />
            </MapCardWrapper>
          ))}
        </Carousel>
      </HomeCardArea>

      <HomeCardArea>
        <HomeCardTitle>POPULAR MOVIES</HomeCardTitle>
          <Carousel slidesToShow={window.innerWidth < 600 ? 1 : window.innerWidth < 800 ? 2 : window.innerWidth < 1000 ? 4 : 5}>
            {PopularMovie && PopularMovie.filter((item, idx) => idx < 20).map((popular, key) => (
              <MapCardWrapper key={key}>
                <HomeCard goToProfilePage={goToTheProfilePage} id={popular.id} poster={popular.poster_path} title={popular.title} overview={popular.overview} releaseDate={popular.release_date} voteAverage={popular.vote_average} />
              </MapCardWrapper>
            ))}
          </Carousel>
      </HomeCardArea>
    </HomeContainer>
  )
}