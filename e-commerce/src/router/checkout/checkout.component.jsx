import { useContext } from 'react';
import './checkout.styles.scss'
import {CartContext} from './../../contexts/cart.contentent'

const Checkout=()=>{
    const {cartItems, addItemToCart}= useContext(CartContext);
    return(
        <div>
            <h1>Checkout page</h1>
            <div>
                {cartItems.map((cartItem)=>{
                    const {id, name, quantity}= cartItem;
                    return(
                        <div key={id}>
                            <h2>{name}</h2>
                            <span>{quantity}</span>
                            <span >decrement</span>
                            <br />
                            <span onClick={()=>addItemToCart()}>increment</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Checkout;