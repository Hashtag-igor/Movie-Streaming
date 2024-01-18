import { useEffect, useState } from 'react';
import { fetchGallery } from "../services/fetch/Images";
import { useParams, useNavigate } from 'react-router-dom';
import GalleryCard from '../components/Cards/GalleryCard';
import { HomeCardTitle } from "./Home";
import { ReturnArrow } from "./CastPage"

export default function GalleryPage() {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const navigate = useNavigate()

  const handleReturnClick = () => {
    navigate(-1); // Navega de volta para a página anterior
  };

  useEffect(() => {
    setLoading(true);

    fetchGallery(id)
      .then((data) => {

        if (data && data.backdrops && Array.isArray(data.backdrops)) {
          setGallery(data.backdrops);
        } else {
          setGallery([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching gallery:", error);
        setGallery([]);
        setLoading(false);
      });
  }, [id]);

  return (
    <main style={{ marginBottom: "50px" }}>
      <div style={{margin: "5px auto 0 auto", width: "99%"}}>
        <span style={{display: "flex", alignItems: "center", gap: "0 8px"}}><ReturnArrow onClick={handleReturnClick}/><span> return</span></span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "95%", margin: "40px auto -25px auto" }}>
        <div>
          <HomeCardTitle>Gallery</HomeCardTitle>
        </div>
      </div>
      <div>
        {loading ? (
          <p>Loading images...</p>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', margin: '30px 0', width: '100%', gap: "30px 0" }}>
            {gallery.length > 0 ? (
              gallery.map((image) => (
                <GalleryCard key={image.id} image={image} />
              ))
            ) : (
              <p>No images available.</p>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
