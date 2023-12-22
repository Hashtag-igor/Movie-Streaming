import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from "./styles/GlobalStyle.jsx"

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import Search from './pages/Search.jsx'
import Trending from './pages/Trending.jsx'
import InTheaters from './pages/InTheaters.jsx'
import TopRated from './pages/TopRated.jsx'
import Popular from "./pages/Popular.jsx"

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/profile/:id",
        element: <Profile />
      },
      {
        path: "/search",
        element: <Search />
      },
      {
        path: "/trending",
        element: <Trending />
      },
      {
        path: "/in-theaters",
        element: <InTheaters />
      },
      {
        path: "/top-rated",
        element: <TopRated />
      },
      {
        path: "/popular",
        element: <Popular />
      }
    ]
  }
]

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
)
