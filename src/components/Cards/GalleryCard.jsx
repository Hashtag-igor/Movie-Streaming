import { imgApi } from "../../services/api/Api"
import PropTypes from "prop-types";

export default function GalleryCard({image}) {
  return (
    <div style={{marginBottom: "50px"}}>
      <div style={{display: "flex", flexWrap: "wrap"}}>
        <img style={{ width: "400px", height: "250px", borderRadius: "12px" }} src={imgApi.defaults.baseURL + image.file_path} alt="" />
      </div>
    </div>
  )
}

GalleryCard.propTypes = {
    image: PropTypes.shape({
      file_path: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.number,
    }).isRequired,
  }
