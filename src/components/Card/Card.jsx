import "./Card.css";

const imgURL = import.meta.env.VITE_IMG

export default function Card({ title, releaseDate, voteAverage, poster }) {
  return (
    <div className="card">
        <div className="card-components">
            <div className="card-components-img">
                <img src={imgURL + poster} alt="imagem do filme" />
            </div>
            <div>
                <div className="card-vote">{voteAverage}<span style={{fontSize: "10px"}}>%</span></div>
            </div>
            <div className="card-title-date">
              <h2 className="card-title">{title}</h2>
              <div className="release-date">{releaseDate}</div>
            </div>
        </div>
    </div>
  )
}

