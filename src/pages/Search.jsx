import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components"
import { useSearchParams, useNavigate } from "react-router-dom";
import { MapCardArea } from "./Home.jsx"
import Card from "../components/Cards/Card.jsx";
import { searchMovies } from "../services/fetch/SearchMovies.jsx"


const CardArea = styled.div`
  display: flex;
  flex-direction: column;

  & > :first-child{
    margin-top: 40px;
  }
`

const SearchTitle = styled.h2`
  font-size: 34px; 
  padding: 20px 0 20px 0; 
  margin: 0 20px 30px 20px;
  word-wrap: break-word;

  @media screen and (max-width: 768px){
    font-size: 26px;
}
`

const SearchResults = styled.span`
  color: #db9d00;
  text-shadow: 2px 1px 1px black;
`


export default function Search() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();

  const navigate = useNavigate()

  useEffect(() => {
    const query = searchParams.get("q");
    setSearchQuery(query || "");
  }, [searchParams]);

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      setLoading(true);
      handleSearchMovies(searchQuery);
    } else {
      setMovies([]);
    }
  }, [searchQuery]);

  const handleSearchMovies = async (query) => {
    try {
      const searchedMovies = await searchMovies(query);
      setMovies(searchedMovies);
    } catch (error) {
      console.error("Error searching movies:", error);
    } finally {
      setLoading(false);
    }
  }

  const goToTheProfilePage = (id) => {
    navigate(`/profile/${id}`);
  };

  return (
    <>
      <CardArea>
        <SearchTitle>Resultados para: <SearchResults>{searchQuery}</SearchResults></SearchTitle>
        <MapCardArea>
          {loading ? (
            <p>Loading...</p>
          ) : (
            movies && movies.length > 0 ? (
              movies.map((movie) => (
                movie.poster_path ? (                
                  <Card key={movie.id}
                    goToProfilePage={goToTheProfilePage}
                    id={movie.id}
                    poster={movie.poster_path}
                    title={movie.title}
                    overview={movie.overview}
                    releaseDate={movie.release_date}
                    voteAverage={movie.vote_average}
                  />  
                ) : null
              ))
            ) : (
              <p>No results found.</p>
            )
          )}
        </MapCardArea>
      </CardArea>
    </>
  )
}


Search.propTypes = {
  setProfileData: PropTypes.func,
};