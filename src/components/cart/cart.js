import React from 'react';
import classes from './cart.module.css';
import CartItems from '../cartItems/cartItems';

const cart =(props)=>{
    return(
        <div className={classes.cart}>
            <h1>Your Cart</h1>
                <ul className={classes.cartItems}>
                    <li>PRODUCTS</li>
                    <li>NAME OF PRODUCT</li>
                    <li>PRICE</li>
                    <li>QUANTITY</li>
                    <li>REMOVE</li>
                    <li>TOTOAL</li>
                </ul>
                <CartItems cartItems={classes.cartItems} storeProducts={props.storeProducts} removeHandler={props.removeHandler}/>
        </div>
    )
}

export default cart;