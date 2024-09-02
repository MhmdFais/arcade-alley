import Navbar from './Components/Navbar';
import { useContext } from 'react';
import { CartContext } from './context/CartContext';

function Cart(){

    const { cartItems, deleteAnItem } = useContext(CartContext);

    const total = cartItems.reduce((acc, item) => acc + item.game.normalPrice * item.quantity, 0);

    return(
        <div className='cartDiv'>
            <div className="logoDiv">
                <div className="logo"></div>
                <Navbar />
            </div>
            <div className="cartBodyDiv flex gap-32 mt-16 justify-center items-center">
                <div className="itemCard p-4 border border-solid border-yellow-200 rounded-md backdrop-blur-md">
                    {cartItems.length === 0 ? (
                        <p className='text-white text-2xl'>Your cart is empty</p>
                    ) : (
                        cartItems.map((item, index) => (
                            <div className="anItem border-b border-gray-300" key={index}>
                                    <div className="cartItem p-4 grid grid-cols-12">
                                    <div className="firstSet col-span-8">
                                        <h2 className="text-2xl text-yellow-300 font-medium">{item.game.title}</h2>
                                        <p className="text-2xl text-white font-medium">Quantity: {item.quantity}</p>
                                    </div>
                                    <div className="lastSet col-span-4 text-right">
                                        <p className="text-2xl text-red-400 font-medium">Price: ${item.game.normalPrice}</p>
                                        <p className="text-2xl text-white font-medium">Total: ${(item.game.normalPrice * item.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                                <div className="deleteAnItem p-4 ">
                                    <button 
                                        className='bg-inherit text-white text-2xl p-1 w-1/4 font-medium border border-solid border-red-600 rounded-md' 
                                        onClick={() => deleteAnItem(item.game.gameID)}
                                    >Delete</button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="totalDiv flex justify-center items-center ">
                    {cartItems.length > 0 && (
                        <div className='p-4 border border-solid border-yellow-200 rounded-md backdrop-blur-md'>
                            <h2 className="text-2xl text-yellow-300 font-medium">Total Amount</h2>
                            <h2 className='text-4xl text-red-400 font-medium'>${total.toFixed(2)}</h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Cart;
