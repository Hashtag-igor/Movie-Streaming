import "./Navbar.css"

import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <div className="navbar">
        <nav className="navbar-container">
            <div className="navbar-logo-area">
            <Link to="/">THT</Link>
            </div>
            <div className="navbar-links-area">
                <div>Movies</div>
                <div>TV Shows</div>
            </div>
            <div className="navbar-search-area">
                <input type="text" placeholder="Buscar filme"/>
            </div>
        </nav>
    </div>
  )
}
