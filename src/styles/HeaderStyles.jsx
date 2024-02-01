import styled from 'styled-components';
import { Link, NavLink } from "react-router-dom";


export const HeaderNavbarContainer = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  width: 50%; 
  margin-left: 20px;

  @media screen and (max-width: 1000px) {
    width: 62%;
  }

  @media screen and (max-width: 850px) {
    width: 66%;
    margin-left: 0;
  }

  @media screen and (max-width: 769px) {
    width: 10%;
  }
`
export const HeaderNavbarContainerFixed = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: space-around; 
  width: 100%; 
  margin: 0px 20px 0px 20px;

  @media screen and (max-width: 600px) {
    justify-content: space-between;
    margin: 0 5px 0 5px;
  } 

  @media screen and (max-width: 470px) {
    justify-content: space-evenly;
    margin: 0 3px 0 3px;
  } 
`
export const HeaderHomeAreaFixed = styled.div``;

export const HeaderHomeArea = styled.div``;

export const HeaderRoutesAreaFixed = styled.div``

export const HeaderRoutesArea = styled.div`
  @media screen and (max-width: 769px) {
    display: none;
  }
`
export const HomeLink = styled(NavLink)`
  color: #e6aa13;
  text-shadow: 0.1em 0.1em #333;
  padding: 6px;

  &:hover {
    transition: 0.3s;
    border-bottom: 4px solid #e6aa13;
  }

  &.active {
    border-bottom: 4px solid #e6aa13;
  }

  @media screen and (max-width: 800px) {
    padding: 6px 2px;
  }

  @media screen and (max-width: 769px) {
    padding: 6px;
    font-size: 24px;
    border-bottom: 4px solid #e6aa13;
  }

  @media screen and (max-width: 530px) {
    padding: 6px 3px;
    margin-left: 5px;
    letter-spacing: 1px;
  }

  @media screen and (max-width: 500px) {
    font-size: 24px;
    padding: 6px;
  }
`
export const LogoLink = styled(NavLink)`
  color: #e6aa13;
  text-shadow: 0.1em 0.1em #333;
  padding: 6px;

  &:hover {
    transition: 0.3s;
    border-bottom: 4px solid #e6aa13;
  }

  &.active {
    border-bottom: 4px solid #e6aa13;
  }

  @media screen and (max-width: 800px) {
    padding: 6px 2px;
  }

  @media screen and (max-width: 769px) {
    padding: 6px;
  }

  @media screen and (max-width: 530px) {
    font-size: 15px;
    padding: 6px 3px;
  }

  @media screen and (max-width: 470px) {
    padding: 6px 0px;
  }

  @media screen and (max-width: 430px) {
    font-size: 14px;
  }

  @media screen and (max-width: 380px) {
    font-size: 13px;
  }

  @media screen and (max-width: 350px) {
    font-size: 12px;
  }
  
`
export const NavbarSearchArea = styled.form`
  display: flex;
  align-items: center;
  margin-right: 20px;

  @media screen and (max-width: 850px) {
    margin-right: 0px;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    justify-content: center;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`
export const NavbarSearchAreaInput = styled.input`
  padding: 8px 12px;
  border-radius: 5px;
  margin-right: 5px;
  letter-spacing: 1px;
  font-size: 14px;
  border: none;

  @media screen and (max-width: 900px) {
    padding: 8px 0px 8px 10px;
  }

  @media screen and (max-width: 900px) {
    margin-left: 30px;
  }

  @media screen and (max-width: 769px) {
    width: 56%;
    padding: 10px 10px;
  }

  @media screen and (max-width: 600px) {
    width: 46%;
    padding: 10px 10px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`
export const NavbarSearchAreaInputMobile = styled.input`
  padding: 8px 12px;
  border-radius: 5px;
  margin-right: 5px;
  letter-spacing: 1px;
  font-size: 14px;
  border: none;

  @media screen and (max-width: 769px) {
    width: 56%;
    padding: 10px 10px;
  }

  @media screen and (max-width: 600px) {
    width: 46%;
  }
`
export const NavbarSearchAreaButton = styled.button`
  padding: 8px 10px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  background-color: white;

  &:hover {
    background-color: #ffb700;
    transition: 0.5s;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }


`


export const HeaderContainer = styled.div`
  width: 100%;
  background-color: #0e0e0e;
  border-bottom: 3px solid #0e0e0e;

  @media screen and (max-width: 500px) {
    border-bottom: none;
    padding-bottom: 5px;
  }
`
export const HeaderNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;

  @media screen and (max-width: 950px) {
    padding: 20px 20px;
  }

  @media screen and (max-width: 769px) {
    justify-content: left;
  }

  @media screen and (max-width: 500px) {
    padding: 25px 20px;
  }
`

//Header Fixed
export const HeaderContainerFixed = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  background-color: #191919;
  height: 80px;
  z-index: 999;
  top: 0;
`
export const HeaderNavbarFixed = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px 15px 30px;
    width: 95%;
    margin: auto;

    @media screen and (max-width: 800px) {
      width: 100%;
      padding: 0 10px 0 10px;
    }

    @media screen and (max-width: 600px) {
      padding: 0 7px 0 7px;
    }

    @media screen and (max-width: 470px) {
      padding: 0 1px 0 1px;
    }
`

//Mobile Page
export const PaginaOverlayMobile = styled.div`
  @media screen and (max-width: 769px) {
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 100%;
    background-color: black;
    overflow: hidden;
    transition: height 0.3s ease;
    display: flex;
    align-items: flex-start;
    z-index: 2;
    
    &.pagina-overlay-aberto {
      height: 100vh;
      width: 100%;
      background-color: black;
    }
  }

  @media (orientation: landscape) {
    @media screen and (max-width: 769px) {
      z-index: 1;

      &.pagina-overlay-aberto {
        height: 400vh;
      }
    }
  }
`
export const PaginaConteudoMobileContainer = styled.div`
  @media screen and (max-width: 769px) {
    width: 100%;
    padding: 40px 40px;
    transform: translateY(-100%);
    transition: transform 0.3s ease;
    z-index: 1;
    
    &.pagina-overlay-aberto & {
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 600px) {
    padding: 40px 30px;
  }

  @media screen and (max-width: 330px) {
    padding: 30px 20px;
  }
`
export const PaginaConteudoMobileWrapper = styled.div`
  width: 80%;
  display: flex; 
  flex-direction: column;
  gap: 30px 0;

  @media screen and (max-width: 340px) {
    gap: 24px 0;
  }

  @media (orientation: landscape) {
    @media screen and (max-width: 769px) {
      gap: 18px 0;
    }
  }
`
export const PaginaConteudoMobileTitle = styled(Link)`
  margin-bottom: 15px; 
  font-size: 52px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #e6aa13;
  text-shadow: 0.1em 0.1em #424242;
  font-weight: bolder;

  @media screen and (max-width: 500px) {
    font-size: 44px;
  }

  @media screen and (max-width: 340px) {
    margin-bottom: 15px;
  }

`
export const PaginaConteudoMobileSubTitle = styled.h2`
  font-size: 34px; 
  color: #e6aa13;
  margin-top: 40px;

  @media screen and (max-width: 500px) {
    font-size: 28px;
  }

  @media screen and (max-width: 400px) {
    font-size: 30px;
  }
  
  @media screen and (max-width: 340px) {
    margin-top: 15px;
    font-size: 28px;
  }

  @media (orientation: landscape) {
    @media screen and (max-width: 769px) {
      margin-top: 12px;
    }
  }
`
export const MenuToggleMobile = styled.button`
  z-index: 2;

  @media screen and (max-width: 769px) {
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 36px;
    right: 30px;
  }
`
export const MenuIconMobile = styled.div`
  @media screen and (max-width: 769px) {
    display: block;
    width: 55px;
    height: 8px;
    background: #e6aa13;
    position: relative;
    display: flex;
    transition: transform 0.3s ease;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 55px;
      height: 8px;
      background: #e6aa13;
    }

    &::before {
      top: -13px;
    }

    &::after {
      bottom: -13px;
    }

    &.menu-icon-x {
      transform: rotate(45deg);
    }
  }
`
export const HeaderLinksMobilePage  = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 26px;
  margin-left: 20px;

  &:hover {
    color: #e6aa13;
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    font-size: 24px;
  }

  @media screen and (max-width: 500px) {
    font-size: 22px;
  }

  @media screen and (max-width: 400px) {
    font-size: 20px;
  }

  @media screen and (max-width: 360px) {
    font-size: 18px;
  }
`

