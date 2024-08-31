import { data } from 'autoprefixer';
import Navbar from './Components/Navbar'
import { useState, useEffect } from 'react';

function Shop(){

    const [isLoading, setIsLoading] = useState(true);
    const [games, setGames] = useState([])

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch('https://api.rawg.io/api/games?key=56bac37d425c4333acc6a0aa86319853')
                const datas = await response.json()
                setGames(datas.results)
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


    return(
        <div className="shopDiv">
            <div className="logoDiv">
                <div className="logo"></div>
                <Navbar />
            </div>
        </div>
    )
}

export default Shop;