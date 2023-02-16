import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems,productToAdd) => {
  // find if cartTiems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // If found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) => 
      (cartItem.id === productToAdd.id) ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
    );
  }
  // return new array with modified cartItems/ new cart item
  return [...cartItems, { ...productToAdd, quantity: 1}];
};  

const removeCartItem = (cartItems,cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  
  // check if quantity is eqaul to 1, if it is remove that item from cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) => 
    (cartItem.id === cartItemToRemove.id) ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
  );
};

const clearCartItem = (cartItems,cartItemToClear) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {}, // increment the item
  removeItemToCart: () => {}, // decrement the item
  clearItemFromCart: () => {},
  cartCount: 0, // total number of count
  cartTotal: 0,
});

/*
  product { id, name , price, imageUrl } 

  Cart Item { id, name, price, imageUrl, quantity }
*/

export const CartProvider = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount ] = useState(0);
  const [cartTotal, setCartTotal ] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

    setCartCount(newCartCount);
  }, [cartItems]); //whenever cartItems changed

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

    setCartTotal(newCartTotal);
  }, [cartItems]); //whenever cartItems changed

  // function of addItemtToCart
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  // pass this value to argument
  const value = { 
    isCartOpen, 
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};