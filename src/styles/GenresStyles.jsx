import styled from 'styled-components'

export const TitleWrapper = styled.div`
  margin: 50px 0 0 20px;

  @media screen and (max-width: 800px){
    margin: 50px 0 0 20px;
  }

  @media screen and (max-width: 700px){
    margin: 50px 0 30 38px;
  }

  @media screen and (max-width: 550px){
    margin: 50px 0 0 30px;
  }

  @media screen and (max-width: 430px){
    margin: 30px 0 0 11px;
  }

  @media screen and (max-width: 390px){
    margin: 30px 0 0 10px;
  }

  @media screen and (max-width: 370px){
    margin: 30px 0 0 9px;
  }
`
export const GenresTitle = styled.h2`
  margin: 0 0 18px 0;
  font-weight: bolder;
  font-size: 36px;
  text-shadow: 1px 1px 2px black;
  
  @media screen and (max-width: 500px){
    margin: 0 36px 18px 0;
    text-align: center;
    font-size: 36px;
  }

  @media screen and (max-width: 430px){
    font-size: 35px;
    margin: 40px 0 20px 0;
    padding-right: 15px;
  }

  @media screen and (max-width: 400px){
    font-size: 32px;
  }

  @media screen and (max-width: 375px){
    font-size: 30px;
  }

  @media screen and (max-width: 330px){
    font-size: 26px;
  }
`