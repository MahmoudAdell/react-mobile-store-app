import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus,faMinus} from '@fortawesome/free-solid-svg-icons';
import classes from './quantityCounter.module.css';
const quantityCounter=(props)=>{
    return(
        <div className={classes.quantityCounter}>
            <button onClick={()=>{props.minusHandler(props.id);props.totalHandler(props.id)}}>
                <FontAwesomeIcon icon={faMinus}/>
            </button>
            <input  value={props.count}></input>
            <button onClick={()=>{props.plusHandler(props.id);props.totalHandler(props.id)}}>
                <FontAwesomeIcon icon={faPlus}/>
            </button>
        </div>
    )
}

export default quantityCounter;