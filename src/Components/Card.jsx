import PropTypes from 'prop-types';

function Card({ game }) {


    return (
        <div className="cardsDiv backdrop-blur-md border-solid border border-y-white rounded-md">
            <div className="imageDiv">
                <img src={game.background_image} alt={game.name} className='rounded-t-lg'/>
            </div>
            <h3 className="text-xl text-white">{game.name}</h3>
        </div>
    )
}

Card.propTypes = {
    game: PropTypes.object.isRequired
}

export default Card;