import { useEffect, useState } from 'react';
import { fetchMovieCastAndCrew } from "../services/fetch/MovieCast";
import { useParams, useNavigate } from 'react-router-dom';
import CastCard from '../components/Cards/CastCard';
import { HomeCardTitle } from "./Home"
import styled from 'styled-components';
import { FaArrowCircleLeft } from "react-icons/fa";


export const ReturnArrow = styled(FaArrowCircleLeft)`
  width: 25px;
  height: 25px;

  &:hover {
    cursor: pointer;
  }
`


export default function CastPage() {
  const [MovieCast, setMovieCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const navigate = useNavigate()

  const handleReturnClick = () => {
    navigate(-1); // Navega de volta para a página anterior
  };

  useEffect(() => {
    setLoading(true);

    fetchMovieCastAndCrew(id)
      .then((data) => {
        if (data && data.cast && Array.isArray(data.cast)) {
          setMovieCast(data.cast);
          setLoading(false);
        } else {
          setMovieCast([]); 
          setLoading(false);
        }
      })
      .catch(() => {
        setMovieCast([]); 
        setLoading(false);
      });
  }, [id]);


  return (
    <main style={{marginBottom: "50px"}}>
      <div style={{margin: "5px auto 0 auto", width: "99%"}}>
        <span style={{display: "flex", alignItems: "center", gap: "0 8px"}}><ReturnArrow onClick={handleReturnClick}/><span> return</span></span>
      </div>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "95%", margin: "30px auto -25px auto"}}>
        <HomeCardTitle>Cast and Crew</HomeCardTitle>
      </div>
      <div>
        {loading ? (
          <p>Loading cast...</p>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', margin: '30px 0', width: '100%', gap: "60px 0" }}>
            {MovieCast.length > 0 ? (
              MovieCast.map((cast) => (
                <CastCard key={cast.id} name={cast.name} character={cast.character} profile={cast.profile_path} />
              ))
            ) : (
                <p>No cast members available.</p>
            )}
          </div>
        )}
      </div>
    </main>
  );
}