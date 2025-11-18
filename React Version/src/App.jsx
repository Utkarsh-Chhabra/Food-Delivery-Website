import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import SignUp from './components/SignUp'
import HealthyBytes from './components/HealthyBytes'
import GymFreak from './components/GymFreak'
import AboutPage from './components/AboutPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path="/healtybytes" element={<HealthyBytes />} />
          <Route path='/gymfreak' element={<GymFreak />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App