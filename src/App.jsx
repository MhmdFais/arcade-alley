import Navbar from './Components/Navbar'
import './styles/Home.css'
import { useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/shop')
  }

  return (
    <div className='homeDiv'>
      <div className="logoDiv">
        <div className="logo"></div>
        <Navbar />
      </div>
      <div className="contentDiv backdrop-blur-md p-16 border-solid border border-y-white rounded-md">
        <div className="homeTextContentDiv">
          <div className="welcomeDiv">
            <h1 className='text-4xl text-slate-50'>Welcome to <span className='text-yellow-500 text-5xl font-medium'>Arcade Alley</span></h1>
          </div>
          <div className="textDiv text-2xl text-slate-50 font-semibold">
            <p>
              Your ultimate destination for the latest and greatest in gaming!<br></br>
              Dive into our extensive collection of games, accessories, and much more.<br></br>
              Whether you are a casual player or a hardcore gamer<br></br>we have something just for you.
            </p>
          </div>
        </div>
        <div className="buttonDiv">
          <button onClick={handleClick}>Shop Now</button>
        </div>
      </div>
    </div>
  )
}

export default App
