import Header from "./components/Header/Header"
import { Outlet } from "react-router-dom"
import Footer from "./pages/Footer"

function App() {
  return (
    <div> 
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
