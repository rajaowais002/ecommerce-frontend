import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const updateQuantity = (productId, newQuantity) => {
        setCart((prevCart) => {
            return prevCart.map((item) =>
                item.id === productId 
                    ? { ...item, quantity: Math.max(1, newQuantity) } 
                    : item
            );
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};