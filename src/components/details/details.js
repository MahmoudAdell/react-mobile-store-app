import React, {useContext,useState} from 'react';
import {Link} from 'react-router-dom';
import classes from './details.module.css';
import {DetailsContext} from '../detailsContext/detailsContext';
import Modal from '../modal/modal';
import OrderSummary from '../orderSummary/orderSummary';

const  Details =(props)=>{
    
    const [Details,setDetails]=useContext(DetailsContext);
    const [Show ,setShow]=useState(false);

    const showHandler=()=>{
        setShow(true);
    }
    const cancelledHandler=()=>{
        setShow(false);
    }
  
    return(
            <div>
                <Modal show={Show} cancelledHandler={cancelledHandler}>
                    <OrderSummary img={Details.img} title={Details.title} price={Details.price} cancelledHandler={cancelledHandler}/>
                </Modal>
                <div className={classes.details}>
                    <div className={classes.detailsFirstDiv}>
                        <h1>{Details.title}</h1>
                    </div>
                    <div className={classes.detailsSectDiv}>
                        <div className={classes.lefttDiv}>
                            <img src={require(`../card/${Details.img}`)}></img>
                        </div>
                        <div className={classes.rightDiv}>
                            <h1>Model : {Details.title}</h1>
                            <p>Made By : {Details.company}</p>
                            <p>Price : {Details.price}</p>
                            <p>Some Info About Product</p>
                            <p>{Details.info}</p>
                            <button>
                                <Link to="/">
                                        Back To Products
                                </Link> 
                            </button>
                            <button onClick={()=>{props.inCartHandler(Details.id);showHandler()}}>
                                        In Cart
                            </button>
                        </div>
                    </div>
                    
                </div>

            </div>
        )
    }
    


export default Details;


    /*detailsHandler=(id)=>{
        let allData=[...this.props.storeProducts];
        let detailsData=allData[id]
        let Nid =detailsData.id;
        let Ntitle=detailsData.title;
        let Nimg=detailsData.img;
        let Ncompany = detailsData.company;
        let Nprice = detailsData.price;
        let Ninfo = detailsData.info;
        this.setState({
            id:Nid,
            title:Ntitle,
            img:Nimg,
            company:Ncompany,
            price:Nprice,
            info:Ninfo

        })


    }*/