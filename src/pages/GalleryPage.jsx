import { useEffect, useState } from 'react';
import { fetchGallery } from "../services/fetch/Images";
import { useParams } from 'react-router-dom';
import GalleryCard from '../components/Cards/GalleryCard';
import { HomeCardTitle } from "./Home";

export default function GalleryPage() {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    fetchGallery(id)
      .then((data) => {
        console.log("Data from fetchGallery:", data);

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
