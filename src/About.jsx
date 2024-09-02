import Navbar from './Components/Navbar'

function About(){
    return(
        <div className='aboutDiv'>
            <div className="logoDiv">
                <div className="logo"></div>
                <Navbar />
            </div>
            <div className="contentDiv flex justify-center items-center p-4 border border-solid border-white rounded-md backdrop-blur-md"> 
                <div className="title">
                    <h1 className='text-6xl text-yellow-400 font-bold'>Arcade Alley</h1>
                </div>
                <div className="para text-4xl text-white font-medium text-center">
                    <p>
                        This is not a real store. This is a project created for educational purposes.<br></br>
                        This project is built using ReactJS and TailwindCSS.<br></br>
                        The data is fetched from the CheapShark API.<br></br>
                    </p>
                </div>
                <div className="links">
                    <a href="https://github.com/MhmdFais" target='blank' className='text-blue-400 text-4xl font-medium'>GitHub - MHMD</a>
                </div>
            </div>
        </div>
    )
}

export default About;