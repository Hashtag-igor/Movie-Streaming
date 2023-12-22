import { imgApi } from "../../services/api/Api"
import PropTypes from "prop-types";

export default function GalleryCard({image}) {
  return (
    <div>
        <img style={{width: "30px", height: "30px"}} src={imgApi.defaults.baseURL + image.file_path} alt="" />
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
