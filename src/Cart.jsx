import Navbar from './Components/Navbar';
import { useContext } from 'react';
import { CartContext } from './context/CartContext';

function Cart(){

    const { cartItems } = useContext(CartContext);

    const total = cartItems.reduce((acc, item) => acc + item.game.normalPrice * item.quantity, 0);

    return(
        <div className='cartDiv'>
            <div className="logoDiv">
                <div className="logo"></div>
                <Navbar />
            </div>
            <div className="itemCard">
                {cartItems.length === 0 ? (
                    <p className='text-white text-2xl'>Your cart is empty</p>
                ) : (
                    cartItems.map((item, index) => (
                        <div key={index} className="cartItem border-b border-gray-300 p-4">
                            <h2 className="text-2xl text-yellow-300">{item.game.title}</h2>
                            <p className="text-lg text-white">Quantity: {item.quantity}</p>
                            <p className="text-lg text-red-500">Price: ${item.game.normalPrice}</p>
                            <p className="text-lg text-white">Total: ${(item.game.normalPrice * item.quantity).toFixed(2)}</p>
                        </div>
                    ))
                )}
            </div>
            {cartItems.length > 0 && (
                <div className="cartTotalDiv mt-4">
                    <h2 className="text-2xl text-yellow-300">Total Amount: ${total.toFixed(2)}</h2>
                </div>
            )}
        </div>
    )
}

export default Cart;
