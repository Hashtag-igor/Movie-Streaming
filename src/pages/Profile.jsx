import { useState, useEffect, useLayoutEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchMovieCastAndCrew } from "../services/fetch/MovieCast"
import { fetchGallery } from '../services/fetch/Images';
import { fetchMovieDetails } from '../services/fetch/Movies';
import CastCard from '../components/Cards/CastCard';
import GalleryCard from '../components/Cards/GalleryCard';
import InfoCard from '../components/Cards/InfoCard';
import { useCarousel } from '../components/Carousel/Carousel';
import { useGalleryCarousel } from "../components/Carousel/GalleryCarousel"
import { ScrollMessage } from "../pages/Home"
import styled from 'styled-components';

export const CastContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 40px 10px;

  & > :first-child {
      margin-top: 60px;
    }

  @media screen and (max-width: 1050px){
    margin: 0 0 40px 9px;
  }

  @media screen and (max-width: 999px){
    margin: 0 0 40px 11px;
  }

  @media screen and (max-width: 900px){
    margin: 0 0 40px 10px;
  }

  @media screen and (max-width: 800px){
    & > :first-child {
      margin-top: 110px;
    }
  }

  @media screen and (max-width: 799px){
    margin: 0 0 40px 20px;
  }

  @media screen and (max-width: 770px){
    margin: 0 0 40px 18px;
  }

  @media screen and (max-width: 700px){
    margin: 0 0 40px 18px;
  }

  @media screen and (max-width: 699px){
    margin: 0 0 40px 35px;
  }

  @media screen and (max-width: 640px){
    margin: 0 0 40px 33px;
  }

  @media screen and (max-width: 600px){
    margin: 0 0 40px 29px;
  }

  @media screen and (max-width: 510px){
    margin: 0 0 40px 24px;
  }

  @media screen and (max-width: 430px){
    margin: 0 0 30px 12px;
  }
  
  @media screen and (max-width: 426px){
    margin: 0 0 30px 11px;
  }

  @media screen and (max-width: 390px){
    margin: 0 0 30px 10px;
  }

  @media screen and (max-width: 350px){
    margin: 0 0 30px 9px;
  }
`
const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 12px;

  @media screen and (max-width: 1250px){
    margin: 0 0 0 10px;
  }

  @media screen and (max-width: 899px){
    margin: 0 0 0 8px;
  }

  @media screen and (max-width: 830px){
    margin: 0 0 0 6px;
  }

  @media screen and (max-width: 800px){
    margin: 0 0 0 14px;
  }

  @media screen and (max-width: 700px){
    margin: 0 0 0 13px;
  }

  @media screen and (max-width: 600px){
    margin: 0 0 0 10px;
  }

  @media screen and (max-width: 500px){
    margin: 0 0 0 9px;
  }

  @media screen and (max-width: 440px){
    margin: 0 0 0 8px;
  }

  @media screen and (max-width: 390px){
    margin: 0 0 0 7px;
  }

  @media screen and (max-width: 345px){
    margin: 0 0 0 6px;
  }
`
const CastCardDesc = styled.div`
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  width: 97%; 
  margin-top: 60px; 
  margin-bottom: 15px;

`

const Profile = () => {
  const { id } = useParams();
  const [ movieDetails, setMovieDetails ] = useState(null)
  const [ castAndCrew, setCastAndCrew ] = useState([])
  const [ gallery, setGallery ] = useState([])
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { Carousel } = useCarousel();
  const { GalleryCarousel } = useGalleryCarousel();

  useLayoutEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 769;
      setIsMobile(isMobileDevice);
    };

    checkMobile();

    const handleResize = () => {
      checkMobile();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    fetchMovieDetails(id).then((details) => setMovieDetails(details));
    fetchMovieCastAndCrew(id).then((castCrew) => setCastAndCrew(castCrew));
    fetchGallery(id)
      .then((images) => {
        if (images && images.backdrops && Array.isArray(images.backdrops)) {
          setGallery(images.backdrops);
        } else {
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
        <div>
          {movieDetails === null && <p>Loading...</p>}
          {movieDetails !== null && <InfoCard movie={movieDetails} />}
        </div>

        <CastContainer>
          <CastCardDesc>
            <div>
              <h3 style={{ fontSize: "32px" }}>CAST</h3>
            </div>
            <div>
              <Link style={{cursor: "poiter"}} to={`/movie/${id}/cast`}>See full cast</Link>
            </div>
          </CastCardDesc>
          
          {windowWidth <= 699 ? (
            // Renderiza os links menores
            <ScrollMessage>
              (scroll the card to change the actores)
            </ScrollMessage>
          ) : (
            // Renderiza os links maiores
            <></>
          )}
          <Carousel slidesToShow={window.innerWidth < 600 ? 1 : window.innerWidth < 800 ? 2 : window.innerWidth < 1000 ? 4 : 5} >
            {castAndCrew.cast && castAndCrew.cast.filter((item, idx) => idx < 12).map((cast) => (
              <CastCard key={cast.id} name={cast.name} character={cast.character} profile={cast.profile_path} />
            ))}
          </Carousel>
        </CastContainer>

        <GalleryContainer>
          <CastCardDesc>
            <div>
              <h3 style={{fontSize: "32px"}}>GALLERY</h3>
            </div>
            <div>
              <Link style={{cursor: "poiter"}} to={`/movie/${id}/gallery`}>See full gallery</Link>
            </div>
          </CastCardDesc>

          {windowWidth <= 699 ? (
            // Renderiza os links menores
            <ScrollMessage>
              (scroll the card to change the images)
            </ScrollMessage>
          ) : (
            // Renderiza os links maiores
            <></>
          )}

          <GalleryCarousel>
            {Array.isArray(gallery) && gallery.filter((item, idx) => idx < 12).map((image) => (
              <GalleryCard key={image.id} image={image}/>
          ))}
          </GalleryCarousel>
        </GalleryContainer>
    </main>
  );
};

export default Profile;
