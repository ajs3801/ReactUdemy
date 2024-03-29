import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkout.styles.scss';

// 
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className='checkout-container'>
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>

        <div className="header-block">
          <span>Description</span>
        </div>

        <div className="header-block">
          <span>Quantity</span>
        </div>

        <div className="header-block">
          <span>Price</span>
        </div>

        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {
        // map through the cart Items
        cartItems.map((cartItem) => {
          // and return the div tag of name and quantity
          return (
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
          );
        })
      }
      <span className='total'>Total: ${cartTotal}</span>
    </div>
  );
}; 

export default Checkout;