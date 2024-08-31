import Navbar from './Components/Navbar'
import { useState, useEffect } from 'react';
import Card from './Components/Card'

function Shop(){

    const [isLoading, setIsLoading] = useState(true);
    const [games, setGames] = useState([])

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch('https://www.cheapshark.com/api/1.0/deals')
                const datas = await response.json()

                const filteredGames = datas.filter((game) => (
                    game.gameID !== '171780' && game.thumb && game.thumb.startsWith("https://sttc.gamersgate.com/images")
                ))

                setGames(filteredGames)
                console.log(filteredGames)
                setIsLoading(false)
            }
            catch(error){
                console.log(`Error while fetching`, error)
                setIsLoading(false)
            }
        }

        fetchGames()

        return () => {
            console.log('Component unmounted');
        };
    }, [])


    if(isLoading) return <p className='nav-link text-4xl pl-8 text-yellow-100 hover:text-yellow-400 mt-90'> Loading... </p>

    return(
        <div className="shopDiv">
            <div className="logoDiv">
                <div className="logo"></div>
                <Navbar />
            </div>
            <div className="gamesCardDiv grid grid-cols-3 gap-4 mt-5">
                {games.map((game, index) => (
                     <Card key={index} game={game} />
                ))}
            </div>
        </div>
    )
}

export default Shop;