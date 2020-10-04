import React from 'react';
import classes from './layout.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMobileAlt} from '@fortawesome/free-solid-svg-icons';
import Button from '../button/button';
import {Link} from 'react-router-dom';

const layout =()=>{
        return(
            <div className={classes.Navbar} >
                <div className={classes.logo}>
                    <FontAwesomeIcon className={classes.logoItem} icon={faMobileAlt} size="3x" />
                        <Link to='/'>Products</Link> 
                </div>
                <div>
                    <Button/>
                </div>
            </div>
            
        );
    
}
export default layout;