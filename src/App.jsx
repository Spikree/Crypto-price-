import Navbar from "./components/navbar/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from './pages/home/Home.jsx'
import Coin from './pages/coin/Coin.jsx'
import Footer from "./components/footer/Footer.jsx"

export const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coin/:coinId" element={<Coin/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}
