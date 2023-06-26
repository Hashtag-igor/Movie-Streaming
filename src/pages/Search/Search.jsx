import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components"
import { useSearchParams, useNavigate } from "react-router-dom";
import {MapCardArea, MapCardWrapper} from "../Home/Home.jsx"
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";

const TVShowsURL = import.meta.env.VITE_TV_SEARCH;
const MoviesURL = import.meta.env.VITE_SEARCH;
const apiKEY = import.meta.env.VITE_API_KEY;


const SearchTitle = styled.h2`
  font-size: 34px;
  padding: 30px 0 40px 0; 
  margin-left: 20px;

  @media screen and (max-width: 768px){
    font-size: 26px;
}
`

const SearchResults = styled.span`
  color: #db9d00;
  text-shadow: 2px 1px 1px black;
`


Search.propTypes = {
  setProfileData: PropTypes.func,
};

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
    <>
        <Navbar />
        <SearchTitle>Resultados para: <SearchResults>{query}</SearchResults></SearchTitle>
        <MapCardArea>
          {movies && movies.map((data, key) => (
            <MapCardWrapper key={key} onClick={() => moviesAndTVShowsPickHandler(data)}>
              <Card poster={data.poster_path} title={data.title} overview={data.overview} releaseDate={data.release_date} voteAverage={data.vote_average} backDrop={data.backdrop_path} />
            </MapCardWrapper>
          ))}
          {TVShows && TVShows.map((data, key) => (
            <MapCardWrapper key={key} onClick={() => moviesAndTVShowsPickHandler(data)}>
              <Card poster={data.poster_path} title={data.name} overview={data.overview} releaseDate={data.first_air_date} voteAverage={data.vote_average} backDrop={data.backdrop_path} />
            </MapCardWrapper>
          ))}
        </MapCardArea>
    </>
  )
}
