import { useEffect, useState } from 'react';
import { fetchMovieCastAndCrew } from "../services/fetch/MovieCast";
import { useParams } from 'react-router-dom';
import CastCard from '../components/Cards/CastCard';
import { HomeCardTitle } from "./Home"

export default function CastPage() {
  const [MovieCast, setMovieCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

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
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "95%", margin: "40px auto -25px auto"}}>
        <div>
          <HomeCardTitle>Cast and Crew</HomeCardTitle>
        </div>
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