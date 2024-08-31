import PropTypes from 'prop-types';

function Card({ game }) {


    return (
        <div className="cardsDiv backdrop-blur-md border-solid border border-y-white rounded-md">
            <div className="imageDiv grid justify-items-center">
                <img src={game.thumb} alt={game.title} className='rounded-t-lg p-3'/>
            </div>
            <div className="textDiv border-y-2 grid justify-items-center">
                <h1 className="text-xl text-yellow-300 p-2 font-medium">{game.title}</h1>
            </div>
            <div className="priceDiv flex justify-between p-2 px-4">
                <h1 className='text-2xl text-white font-medium'>price</h1>
                <h1 className='text-2xl text-red-500 font-medium'>${game.normalPrice}</h1>
            </div>
        </div>
    )
}

Card.propTypes = {
    game: PropTypes.object.isRequired
}

export default Card;