import React from 'react';
import classes from './orderSummary.module.css';
import {Link} from 'react-router-dom';
const orderSummary =(props)=>{
    return(
        <div className={classes.orderSummary}>
            <h1>Item Added to Cart</h1>
            <img src={require(`../card/${props.img}`)}/>
            <h2>{props.title}</h2>
            <h2><span className={classes.priceColor}>Price : ${props.price}</span></h2>
            <button onClick={props.cancelledHandler}>Continue Shopping</button>
            <button><Link to="/my-cart">Go to Cart</Link></button>
        </div>
    )
}
export default orderSummary
//{require(`./${props.img}`)}