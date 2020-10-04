import React from 'react';
//import storeProducts from '../../data/data';
import Card from '../card/card';


const cards=(props)=>{
    return(
                props.storeProducts.map(store=>{
                    return(
                        
                            <Card   key={store.id} 
                                    img={store.img} 
                                    title={store.title} 
                                    price={store.price} 
                                    inCartHandler={props.inCartHandler} 
                                    id={store.id}
                                    info={store.info}
                                    company={store.company} 
                                    showHandler={props.showHandler}
                                    dataForModalHandler={props.dataForModalHandler}
                                    /> 

                        
                    )
                })

    )

}
    
export default cards;