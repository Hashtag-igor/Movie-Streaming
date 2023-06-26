import styled from "styled-components"
import PropTypes from 'prop-types';

const imgURL = import.meta.env.VITE_IMG


const CardContainer = styled.div`
  border: 3px solid #e4e4e4;
  width: 200px;
  height: 390px;
  border-radius: 10px;
  cursor: pointer;
  background-color: white;
  padding-bottom: 30px;

  &:hover{
    background-color: #1f4242;
    transition: 0.5s;
    color: white;
    border: 3px solid black;
  }
`

const CardComponents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const CardImgArea = styled.div``

const CardImg = styled.img`
  height: 280px;
  width: 100%;
  border-radius: 6px 6px 0 0;
`

const CardVoteArea = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 19px;
  transform: translate(10px, -40px);
  position: relative;
  background-color: #000;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 1px;
  margin-bottom: -25px;
`

const CardInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: center;
`

const CardInfoTitle = styled.h2`
  /* text-align: center; */
  font-weight: 800;
  font-size: 17px;
`

const CardInfoDate = styled.div`
  /* text-align: center; */
`

// export const ColorsCards = styled.div`
//   font-weight: 600;
//   font-size: 17px;
//   color: white;
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   margin: auto;
//   position: absolute;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//`

export const RedCard = styled.div`
  border-top: 5px solid #ff0000;
  border-right: 5px solid #4b0000;
  border-bottom: 5px solid #4b0000;
  border-left: 5px solid #4b0000;
  font-weight: 600;
  font-size: 17px;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const YellowCard = styled.div`
  border-top: 5px solid #fffb00;
  border-right: 5px solid #fffb00;
  border-bottom: 5px solid #807d00;
  border-left: 5px solid #807d00;
  font-weight: 600;
  font-size: 17px;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const GreenCard = styled.div`
  border-top: 5px solid #0fc209;
  border-right: 5px solid #0fc209;
  border-bottom: 5px solid #0fc209;
  border-left: 5px solid #033500;
  font-weight: 600;
  font-size: 17px;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const WhiteCard = styled.div`
  border-top: 5px solid #c2c2c2;
  border-right: 5px solid #c2c2c2;
  border-bottom: 5px solid #c2c2c2;
  border-left: 5px solid #c2c2c2;
  font-weight: 600;
  font-size: 17px;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Percent = styled.span`
  font-size: 10px;
`


//Para resolver o erro da passagem de props abaixo
Card.propTypes = {
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
};


export default function Card({ title, releaseDate, voteAverage, poster }) {
  
  const voteAverageBox = () => {
    if(voteAverage === 0){
      return <WhiteCard>{voteAverage.toFixed(1)}<Percent>%</Percent></WhiteCard>
    }
    if(voteAverage > 0 && voteAverage < 5){
      return <RedCard>{voteAverage.toFixed(1)}<Percent>%</Percent></RedCard>
    }
    else if(voteAverage > 4 && voteAverage < 7){
      return <YellowCard>{voteAverage.toFixed(1)}<Percent>%</Percent></YellowCard>
    }
    else if(voteAverage > 6 && voteAverage <= 10){
      return <GreenCard>{voteAverage.toFixed(1)}<Percent>%</Percent></GreenCard>
    }
  }
  
  return (
    <CardContainer>
        <CardComponents>
            <CardImgArea>
                <CardImg src={imgURL + poster} alt="imagem do filme" />
            </CardImgArea>
            <CardVoteArea>
              {voteAverageBox()}
            </CardVoteArea>
            <CardInfoArea>
              <CardInfoTitle>{title}</CardInfoTitle>
              <CardInfoDate>{releaseDate}</CardInfoDate>
            </CardInfoArea>
        </CardComponents>
    </CardContainer>
  )
}

