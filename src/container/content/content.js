import React,{Component} from 'react';
import Cards from '../../components/cards/cards';
import classes from './content.module.css';
import Modal from '../../components/modal/modal';
import OrderSummary from '../../components/orderSummary/orderSummary';
import {Link} from 'react-router-dom';

class  content extends Component{
    //console.log(props.storeProducts);
    state={
        id: 0,
        title: "",
        img: "img/product-5.png",
        price: 0,
        company: "",
        info: "",
        inCart: false,
        count: 0,
        total: 0,
        show:false
    }

    showHandler=()=>{
        console.log("showHandler");
        this.setState({
            show:true
        })
        
    };

    cancelledHandler=()=>{
        this.setState({
            show:false
        }) 
    }
    dataForModalHandler=(img,title,price)=>{
        console.log('dataForModalHandler');
        this.setState({
            img:img,
            title:title,
            price:price
        })
    }
    render(){
        return(
        
            <div>  
                <Modal show={this.state.show}  cancelledHandler={this.cancelledHandler}>
                    <OrderSummary img={this.state.img} title={this.state.title} price={this.state.price} cancelledHandler={this.cancelledHandler}/>
                </Modal>
                <h1>Our Products</h1>
                <div className={classes.content}>
                    <Cards  storeProducts={this.props.storeProducts} 
                            inCartHandler={this.props.inCartHandler}
                            removeHandler={this.props.removeHandler} 
                            showHandler={this.showHandler} 
                            cancelledHandler={this.cancelledHandler}
                            dataForModalHandler={this.dataForModalHandler}/>
                </div>
            </div>
    
            
        )
    }
    
}
export default content;