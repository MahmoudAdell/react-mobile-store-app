import React, { Component } from 'react';
import classes from './cartItems.module.css';
import QuantityCounter from '../quantityCounter/quantityCounter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
class cartItems extends Component{
    state={
        cartItemsData:[],
    }
    constructor(props){
        let cartData=[]
        super(props);
        this.props.storeProducts.map((store)=>{
            if(store.inCart===true){
                cartData.push(store);
            }
        })

        this.state={cartItemsData:cartData}
    }

    plusHandler=(id)=>{
        let allData=[...this.state.cartItemsData];
        allData[id].count=allData[id].count+1;
        this.setState({cartItemsData:allData})

    }

    minusHandler=(id)=>{
        let allData=[...this.state.cartItemsData];
        if(allData[id].count>1){
            allData[id].count=allData[id].count-1;
        }
        
        this.setState({cartItemsData:allData})

    }
    totalHandler=(id)=>{
        let allData=[...this.state.cartItemsData];
        allData[id].total=allData[id].count * allData[id].price;
        console.log(allData[id].total);
        this.setState({cartItemsData:allData}) 
    }
    removeItemHandler=(index)=>{
        let allData=[...this.state.cartItemsData];
        allData.splice(index, 1);
        this.setState({cartItemsData:allData}) 

    }

    render(){
        return(
            this.state.cartItemsData.map((oneStore,index)=>{
                return(
                    <ul className={this.props.cartItems}>
                        <li><img className={classes.cartimg} src={require(`../card/${oneStore.img}`)}/></li>
                        <li>{oneStore.title}</li>
                        <li>${oneStore.price}</li>
                        <li><QuantityCounter totalHandler={this.totalHandler} count={oneStore.count} plusHandler={this.plusHandler} minusHandler={this.minusHandler} id={index} /></li>
                        <li><button onClick={()=>{this.props.removeHandler(oneStore.id);this.removeItemHandler(index)}} className={classes.button}><FontAwesomeIcon icon={faTrash} size="2x"/></button></li>
                        <li>${oneStore.total}</li>
                    </ul>

                )
            })

        )
    }

}

export default cartItems;
//{oneStore.count}