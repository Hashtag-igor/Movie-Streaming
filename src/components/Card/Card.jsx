import "./Card.css";

const imgURL = import.meta.env.VITE_IMG

export default function Card({title, releaseDate, voteAverage, poster }) {
  return (
    <div className="card">
        <div className="card-components">
            <div className="card-components-img">
                <img src={imgURL + poster} alt="imagem do filme" />
            </div>
            <div>
                <div className="card-vote">{voteAverage}<span style={{fontSize: "10px"}}>%</span></div>
            </div>
            <h2 className="card-title">{title}</h2>
            <div className="release-date">{releaseDate}</div>
        </div>
    </div>
  )
}

{/* <div className="card">
    <div className="card-components">
        <h2 className="card-title">{title}</h2>
        <p className="card-overview">{overview}</p>
        <div >{releaseDate}</div>
        <div >{voteAverage}</div>
        <div >{voteCount}</div>
    </div>
</div> */}