import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import SignUp from './components/SignUp'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App