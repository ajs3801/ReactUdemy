import { createContext, useState, useEffect, useReducer } from 'react';

import { createAction } from '../utils/reducer/reducer.utils';

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

// CartContext
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

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0, 
  cartTotal: 0,
};

const CART_ACTION_TYPES = {
  SET_CART_ITMES: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN"
};

const cartReducer = (state, action) => {
  // destructure action
  const { type, payload } = action;

  /*
    const payload = {
      cartItems,
      cartCount,
      cartTotal,
    };
  */
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITMES:
      return {
        ...state,
        ...payload
      };
    
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload
      };
    default: 
      throw new Error(`unhandled type of ${type} in cartReducer`)
  }
};

/*
  product { id, name , price, imageUrl } 

  Cart Item { id, name, price, imageUrl, quantity }
*/
// CartProvider
export const CartProvider = ({children}) => {
  // const [isCartOpen, setIsCartOpen] = useState(false);
  // const [cartItems, setCartItems] = useState([]);
  // const [cartCount, setCartCount ] = useState(0);
  // const [cartTotal, setCartTotal ] = useState(0);

  // useEffect(() => {
  //   const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

  //   setCartCount(newCartCount);
  // }, [cartItems]); //whenever cartItems changed

  // useEffect(() => {
  //   const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

  //   setCartTotal(newCartTotal);
  // }, [cartItems]); //whenever cartItems changed

  // using reducer
  const [{ cartItems, isCartOpen, cartCount, cartTotal }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITMES, {
        cartItems: newCartItems, 
        cartTotal: newCartTotal, 
        cartCount: newCartCount
      })
    );
    /*
      generate newCartTotal

      generate newCartCount

      generate new action with payload = {
        newCartItems,
        newCartTotal,
        newCartCount,
      }
    */
  };

  // function of addItemtToCart
  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemToCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItemsReducer(newCartItems);
  };

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
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