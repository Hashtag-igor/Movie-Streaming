import { useState } from "react";

import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Search from "../pages/Search/Search"

import {BrowserRouter, Routes, Route} from "react-router-dom"

export default function Router() {
  const [moviesAndTVShowsData, setmoviesAndTVShowsData] = useState([])
  const [profileData, setProfileData] = useState([])

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home setmoviesAndTVShowsData={setmoviesAndTVShowsData}/>}/>
            <Route path="/profile/:id" element={<Profile profileData={profileData}/>} />
            <Route path="/profile" element={<Profile moviesAndTVShowsData={moviesAndTVShowsData}/>} />
            <Route path="/search" element={<Search setProfileData={setProfileData}/>} />
        </Routes>
    </BrowserRouter>
  )
}


