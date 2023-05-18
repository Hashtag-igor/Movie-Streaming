import "./Card.css";

const imgURL = import.meta.env.VITE_IMG

export default function Card({ title, releaseDate, voteAverage, poster }) {
  
  const voteAverageBox = () => {
    if(voteAverage === 0){
      return <div className="white-card">{voteAverage.toFixed(1)}<span style={{fontSize: "10px"}}>%</span></div>
    }
    if(voteAverage > 0 && voteAverage < 5){
      return <div className="red-card">{voteAverage.toFixed(1)}<span style={{fontSize: "10px"}}>%</span></div>
    }
    else if(voteAverage > 4 && voteAverage < 7){
      return <div className="yellow-card">{voteAverage.toFixed(1)}<span style={{fontSize: "10px"}}>%</span></div>
    }
    else if(voteAverage > 6 && voteAverage <= 10){
      return <div className="green-card">{voteAverage.toFixed(1)}<span style={{fontSize: "10px"}}>%</span></div>
    }
  }
  
  return (
    <div className="card">
        <div className="card-components">
            <div className="card-components-img">
                <img src={imgURL + poster} alt="imagem do filme" />
            </div>
            <div className="card-vote">
              {voteAverageBox()}
                {/* <div className="card-vote">{voteAverage.toFixed(1)}<span style={{fontSize: "10px"}}>%</span></div> */}
            </div>
            <div className="card-title-date">
              <h2 className="card-title">{title}</h2>
              <div className="release-date">{releaseDate}</div>
            </div>
        </div>
    </div>
  )
}

