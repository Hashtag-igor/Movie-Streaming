import { useState } from "react";

import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Search from "../pages/Search/Search"

import {BrowserRouter, Routes, Route} from "react-router-dom"

export default function Router() {
  const [moviesAndTVShowsData, setmoviesAndTVShowsData] = useState([])
  
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home setmoviesAndTVShowsData={setmoviesAndTVShowsData}/>}/>
            <Route path="/profile/:id" element={<Profile moviesData={moviesAndTVShowsData}/>} />
            <Route path="/profile" element={<Profile moviesAndTVShowsData={moviesAndTVShowsData}/>} />
            <Route path="/search" element={<Search setmoviesAndTVShowsData={setmoviesAndTVShowsData}/>} />
        </Routes>
    </BrowserRouter>
  )
}


