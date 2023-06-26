import { useState} from "react"
import { SlMagnifier } from "react-icons/sl"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"


const NavbarContainer = styled.div`
  background-color: black;
  padding: 10px;
  border-bottom: 3px solid #0e0e0e;

  @media screen and (max-width: 480px){
    padding: 20px 0;
  }
`
const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  width: 100%;

  @media screen and (max-width: 480px){
    flex-direction: column;
    gap: 15px;
  }
`
const NavbarLogoArea = styled.div`
  font-size: 40px;
  color: #eeab00;
  letter-spacing: 2px;
  font-weight: 600;

  @media screen and (max-width: 480px){
    font-size: 44px;
    letter-spacing: 3px;
  }
`
const LogoLink = styled(Link)`
  color: #e6aa13;
  text-shadow: 0.1em 0.1em #333;
`
const NavbarSearchArea = styled.form`
  display: flex;
  align-items: center;

  @media screen and (max-width: 480px){
    width: 100%;
    justify-content: center;
  }
`
const NavbarSearchAreaInput = styled.input`
  padding: 8px 12px;
  border-radius: 5px;
  margin-right: 5px;
  letter-spacing: 1px;
  font-size: 14px;
  border: none;

  @media screen and (max-width: 768px){
    font-size: 18px;
  }

  @media screen and (max-width: 480px){
    font-size: 16px;
  }
`
const NavbarSearchAreaButton = styled.button`
  padding: 8px 10px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  background-color: white;

  &:hover{
    background-color: #ffb700;
    transition: 0.5s;
  }

  @media screen and (max-width: 768px){
    font-size: 18px;
  }

  @media screen and (max-width: 480px){
    font-size: 16px;
  }
`


export default function Navbar() {
  const [search, setSearch] = useState("") 

  const navigate = useNavigate()

  const handleSubmit = () =>{
    if(!search) return

    //vai passar para o path o contaúdo digitado no input (que está no state). O valor será o que vai ser buscado;
    navigate(`/search?q=${search}`)
    setSearch("")
  }

  const handleKeyDown = (e) =>{
    if(e.key === "Enter"){    //Verifica se a tecla que foi digitada foi igual a "Enter"
      navigate(`/search?q=${search}`)
      setSearch("")
    }
  }


  return (
    <NavbarContainer>
        <NavbarWrapper>
            <NavbarLogoArea>
              <LogoLink to="/">THTV</LogoLink>
            </NavbarLogoArea>
            <NavbarSearchArea>
              <NavbarSearchAreaInput type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDown}/>
              <NavbarSearchAreaButton onClick={handleSubmit}>
                <SlMagnifier/>
              </NavbarSearchAreaButton>
            </NavbarSearchArea>
        </NavbarWrapper>
    </NavbarContainer>
  )
}
