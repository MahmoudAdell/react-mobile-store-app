import React from 'react';
import Backdrop from '../backdrop/backdrop';
import classes from './modal.module.css';
const modal =(props)=>{
   //clicked={this.props.modalClosed}
   return(
      <div>
            <Backdrop show={props.show}  cancelledHandler={props.cancelledHandler}/>
            <div className={classes.Modal}
                style={{
                        transform:props.show ? 'translateY(0)':'translateY(-100vh)',
                        opacity:props.show ? '1' : '0'
                        }}>
                {props.children}
            </div>
      </div> 

   ) 
}

export default modal;
