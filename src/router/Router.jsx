import { useState } from "react";

import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";

import {BrowserRouter, Routes, Route} from "react-router-dom"

export default function Router() {
  const [moviesData, setMoviesData] = useState([])
  
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home setMoviesData={setMoviesData}/>}/>
            <Route path="/profile" element={<Profile moviesData={moviesData}/>} />
        </Routes>
    </BrowserRouter>
  )
}


