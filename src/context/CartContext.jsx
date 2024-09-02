import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (game, quantity) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.game.gameID === game.gameID);
            if (existingItem) {
                return prevItems.map(item => 
                    item.game.gameID === game.gameID ? { ...item, quantity: item.quantity + quantity } : item
                );
            } else {
                return [...prevItems, { game, quantity }];
            }
        });
    };

    const clearCart = () => setCartItems([]);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
};
