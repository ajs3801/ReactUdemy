import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemToCart } = useContext(CartContext);

  return (
    <div>
      <h1>I am the checkout page</h1>
      <div>
        {
          // map through the cart Items
          cartItems.map((cartItem) => {
            // destructure it
            const { id, name, quantity } = cartItem;
            
            // and return the div tag of name and quantity
            return (
              <div key={id}>
                <h2>{name}</h2>
                <span>{quantity}</span>
                <br />
                <span onClick={() => {removeItemToCart(cartItem)}}>decrement</span>
                <br />
                <span onClick={() => {addItemToCart(cartItem)}}>increment</span>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}; 

export default Checkout;