import { useState} from "react"

import "./Navbar.css"

import { SlMagnifier } from "react-icons/sl"

import { Link, useNavigate } from "react-router-dom"

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
    <div className="navbar">
        <nav className="navbar-container">
            <div className="navbar-logo-area">
              <Link to="/" style={{color: "#e6aa13", textShadow: "0.1em 0.1em #333" }}>THTV</Link>
            </div>
            <form className="navbar-search-area">
              <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDown}/>
              <button onClick={handleSubmit}>
                <SlMagnifier/>
              </button>
            </form>
        </nav>
    </div>
  )
}
