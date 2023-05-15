import { useState } from "react"

import "./Navbar.css"

import { Link, useNavigate } from "react-router-dom"

export default function Navbar() {
  const [search, setSearch] = useState("") 

  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    
    if(!search) return

    //vai passar para o path o contaúdo digitado no input (que está no state). O valor será o que vai ser buscado;
    navigate(`/search?q=${search}`)
    setSearch("")
  }

  return (
    <div className="navbar">
        <nav className="navbar-container">
            <div className="navbar-logo-area">
              <Link to="/">THT</Link>
            </div>
            <form onSubmit={handleSubmit} className="navbar-search-area">
              <input type="text" placeholder="Buscar filme" value={search} onChange={(e) => setSearch(e.target.value)} />
            </form>
        </nav>
    </div>
  )
}
