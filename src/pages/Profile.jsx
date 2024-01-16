import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchMovieCastAndCrew } from "../services/fetch/MovieCast"
import { fetchGallery } from '../services/fetch/Images';
import { fetchMovieDetails } from '../services/fetch/Movies';
import CastCard from '../components/Cards/CastCard';
import GalleryCard from '../components/Cards/GalleryCard';
import InfoCard from '../components/Cards/InfoCard';
import { useCarousel } from '../components/Carousel/Carousel';
import { useGalleryCarousel } from "../components/Carousel/GalleryCarousel"

const Profile = () => {
  const { id } = useParams();
  const [ movieDetails, setMovieDetails ] = useState(null)
  const [ castAndCrew, setCastAndCrew ] = useState([])
  const [ gallery, setGallery ] = useState([])

  const { Carousel } = useCarousel();
  const { sliderRef, GalleryCarousel } = useGalleryCarousel();

  useEffect(() => {
    fetchMovieDetails(id).then((details) => setMovieDetails(details));
    fetchMovieCastAndCrew(id).then((castCrew) => setCastAndCrew(castCrew));
    fetchGallery(id)
      .then((images) => {
        if (images && images.backdrops && Array.isArray(images.backdrops)) {
          setGallery(images.backdrops);
        } else {
          console.error("Invalid gallery data:", images);
          setGallery([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching gallery:", error);
        setGallery([]);
      });
  }, [id]);

  return (
    <main >
      <div >
      <div>
          {movieDetails === null && <p>Loading...</p>}
          {movieDetails !== null && <InfoCard movie={movieDetails} />}
        </div>
        <div style={{margin: "0 0 110px 20px"}}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "97%", marginTop: "60px", marginBottom: "15px" }}>
            <div>
              <h3 style={{ fontSize: "30px" }}>CAST</h3>
            </div>
            <div>
              <Link to={`/movie/${id}/cast`}>See full cast</Link>
            </div>
          </div>
          <div>
            <Carousel slidesToShow={window.innerWidth < 600 ? 1 : window.innerWidth < 800 ? 2 : window.innerWidth < 1000 ? 4 : 5} >
              {castAndCrew.cast && castAndCrew.cast.filter((item, idx) => idx < 12).map((cast) => (
                <CastCard key={cast.id} name={cast.name} character={cast.character} profile={cast.profile_path} />
              ))}
            </Carousel>
          </div>
        </div>

        <div style={{margin: "0 0 110px 20px"}}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "97%", marginTop: "60px", marginBottom: "15px"}}>
            <div>
              <h3 style={{fontSize: "30px"}}>GALLERY</h3>
            </div>
            <div>
              <Link to={`/movie/${id}/gallery`}>See full gallery</Link>
            </div>
          </div>
          <div>
            <GalleryCarousel>
              {Array.isArray(gallery) && gallery.filter((item, idx) => idx < 12).map((image) => (
                <GalleryCard key={image.id} image={image}/>
            ))}
            </GalleryCarousel>
          </div>
        </div>
    </div>


    </main>
  );
};

export default Profile;
