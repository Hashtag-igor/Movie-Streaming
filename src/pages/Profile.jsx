import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCastAndCrew } from "../services/fetch/MovieCast"
import { fetchGallery } from '../services/fetch/Images';
import { fetchMovieDetails } from '../services/fetch/Movies';
import CastCard from '../components/Cards/CastCard';
import GalleryCard from '../components/Cards/GalleryCard';
import InfoCard from '../components/Cards/InfoCard';

const Profile = () => {
  const { id } = useParams();
  const [ movieDetails, setMovieDetails ] = useState(null)
  const [ castAndCrew, setCastAndCrew ] = useState([])
  const [ gallery, setGallery ] = useState([])

  useEffect(() => {
    fetchMovieDetails(id).then((details) => setMovieDetails(details));
    fetchMovieCastAndCrew(id).then((castCrew) => setCastAndCrew(castCrew));
    fetchGallery(id).then((images) => setGallery(images));
  }, [id]);


  return (
    <main >
      <div >
        <div>
          {movieDetails === null && <p>Loading...</p>}
          {movieDetails !== null && <InfoCard movie={movieDetails} />}
        </div>
        <div>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "95%", margin: "60px auto 0 auto"}}>
            <div>
              <h3 style={{fontSize: "30px"}}>CAST</h3>
            </div>
            <div>
              <span>See full cast</span>
            </div>
          </div>
          <div style={{display: 'flex',justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', margin: '30px 0', width: '100%', gap: "60px 0"}}>
            {castAndCrew.cast && castAndCrew.cast.map((cast) => (
              <CastCard key={cast.id} name={cast.name} character={cast.character} profile={cast.profile_path}/>
            ))}
          </div>
        </div>
        {gallery.posters && gallery.posters.map((image) => (
          <GalleryCard key={image.id} image={image}/>
        ))}
    </div>


    </main>
  );
};

export default Profile;
