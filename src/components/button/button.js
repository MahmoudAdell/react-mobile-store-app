import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import classes from './button.module.css';
import {Link} from 'react-router-dom';
const button=(props)=>{
    return(
            
                <Link  to="/my-cart" className={classes.button} >
                    <FontAwesomeIcon className={classes.buttonIcon} icon={faShoppingCart}/>
                    My Cart
                </Link>

    )
        

}

export default button;