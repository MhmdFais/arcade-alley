import PropTypes from 'prop-types';

function Card({ game, onClickIncrement, onClickDecrement, quantity }) {

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
            <div className="flex items-center justify-between p-2 px-4 border-solid border border-y-white">
                <div className="text">
                    <h1 className="text-2xl text-white font-medium">Quantity</h1>
                </div>
                <div className="meter">
                    <button className="decrement px-3 py-1 bg-gray-200 text-gray-700 rounded-l-md hover:bg-gray-300" onClick={onClickDecrement}>-</button>
                    <input type="text" value={quantity} className="text-center w-12 py-1 border-none focus:outline-none" readOnly/>
                    <button className="increment px-3 py-1 bg-gray-200 text-gray-700 rounded-r-md hover:bg-gray-300" onClick={onClickIncrement}>+</button>
                </div>
            </div>
            <div className="addToCardDiv p-2 px-4 items-center justify-center">
                <button className='bg-inherit text-white p-2 rounded-md w-full font-medium border border-solid border-yellow-200'>+ Add to Cart</button>
            </div>
        </div>
    )
}

Card.propTypes = {
    game: PropTypes.object.isRequired,
    onClickIncrement: PropTypes.func.isRequired,
    onClickDecrement: PropTypes.func.isRequired,
    quantity: PropTypes.number.isRequired
}

export default Card;