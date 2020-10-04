import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
const addtocurtButton=(props)=>{
    //onClick={()=>{props.inCartHandler(props.id)}}
    return(
        
        <div className={props.buttonParent}>
            <button className={props.addtocurtButton} 
                    onClick={()=>{props.dataForModalHandler(props.img,props.title,props.price);props.inCartHandler(props.id);props.showHandler()}} 
                    //onClick={()=>{props.inCartHandler(props.id)}}
                    //onClick={()=>{props.showHandler()}}
                    >
                <FontAwesomeIcon  icon={faShoppingCart}/>
            </button>
        </div>
    )
}

export default addtocurtButton;
//props.inCartHandler.bind(props.id)