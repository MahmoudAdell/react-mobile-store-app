import React, { useContext} from 'react';
import classes from './card.module.css';
import AddtocurtButton from '../addtocurtButton/addtocurtButton';
import {DetailsContext} from '../detailsContext/detailsContext';
import {withRouter} from 'react-router-dom';
//import {Link} from 'react-router-dom';
const Card=(props)=>{
    const[Details,setDetails]=useContext(DetailsContext);
        
    const setDetailsHandler=(props)=>{
        setDetails({
            id:props.id,
            title:props.title,
            img:props.img,
            company:props.company,
            price:props.price,
            info:props.info,
        })
        
    };
    

    return(
        <div className={classes.card}>
                
                <img className={classes.img} 
                        src={require(`./${props.img}`)} 
                        onClick={()=>{setDetailsHandler(props);props.history.push("/details")}}/>
        
                <AddtocurtButton 
                                buttonParent={classes.buttonParent} 
                                addtocurtButton={classes.addtocurtButton} 
                                inCartHandler={props.inCartHandler} 
                                id={props.id}
                                img={props.img}
                                title={props.title}
                                price={props.price} 
                                showHandler={props.showHandler}
                                dataForModalHandler={props.dataForModalHandler}/>
                <div className={classes.imgDes}>
                    <span className={classes.imgDesSpan}>{props.title}</span>
                    <span className={classes.imgDesSpan}>${props.price}</span>
                </div>
        </div>
    )
}

export default withRouter(Card);

    /*function changebuttonposistion(e){
        console.log(e.target.childNodes[1].childNodes[0]);
        e.target.childNodes[1].childNodes[0].style.transform="translateX(-75px)";
        e.target.childNodes[1].childNodes[0].style.opacity="1";
    }*/
    /*.style.transform="translateX(50px)"*/ 