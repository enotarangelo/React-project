import Button from './../button/button.component';
import './cart-dropdown.component.scss';
import CartItem  from '../cart-item/cart-item.compontent';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.contentent';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate= useNavigate();
    const goToCheckoutHandler=()=> navigate('/checkout')

    return (
      <div className='cart-dropdown-container'>
        <div className='cart-items'>
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))
          ) : (
            <span className='empty-message'>Your cart is empty</span>
          )}
        </div>
        <Button className='button' onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
      </div>
    );
  };
  
export default CartDropdown;