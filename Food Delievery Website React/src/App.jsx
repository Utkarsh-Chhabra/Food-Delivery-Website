import Login from "./components/Login"
import Navbar from "./components/Navbar"

const Home = () => {
  return (
    <div className='h-screen w-screen bg-black text-white justify-center'>
      {/* <Navbar /> */}
      <Login />
    </div>
  )
}

export default Home