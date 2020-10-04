import React ,{Component}from 'react';
import classes from'./App.module.css';
import Layout from './components/layout/layout';
import Content from './container/content/content';
import Cart from './components/cart/cart';
import Details from './components/details/details';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {DetailsProvider} from './components/detailsContext/detailsContext';

class App extends Component {
  state={
    storeProducts:[
      {
        id: 0,
        title: "Google Pixel - Black",
        img: "img/product-1.png",
        price: 10,
        company: "GOOGLE",
        info:
          "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 1,
        total: 10
      },
      {
        id: 1,
        title: "Samsung S7",
        img: "img/product-2.png",
        price: 16,
        company: "SAMSUNG",
        info:
          "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 1,
        total: 16
      },
      {
        id: 2,
        title: "HTC 10 - Black",
        img: "img/product-3.png",
        price: 8,
        company: "htc",
        info:
          "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 1,
        total: 8
      },
      {
        id: 3,
        title: "HTC 10 - White",
        img: "img/product-4.png",
        price: 18,
        company: "htc",
        info:
          "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 1,
        total: 18
      },
      {
        id: 4,
        title: "HTC Desire 626s",
        img: "img/product-5.png",
        price: 24,
        company: "htc",
        info:
          "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 1,
        total: 24
      },
      {
        id: 5,
        title: "Vintage Iphone",
        img: "img/product-6.png",
        price: 17,
        company: "apple",
        info:
          "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 1,
        total: 17
      },
      {
        id: 6,
        title: "Iphone 7",
        img: "img/product-7.png",
        price: 30,
        company: "apple",
        info:
          "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 1,
        total: 30
      },
      {
        id: 7,
        title: "Smashed Iphone",
        img: "img/product-8.png",
        price: 2,
        company: "apple",
        info:
          "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 1,
        total: 2
      }
    ],
  };

  inCartHandler=(id)=>{
    let updatedStoreProducts=[...this.state.storeProducts];
    let definedCard={...this.state.storeProducts[id]};
    definedCard.inCart=true;
    updatedStoreProducts[id]=definedCard;
    
    this.setState({
      storeProducts:updatedStoreProducts
    })

    console.log(updatedStoreProducts);
  }

  removeHandler=(id)=>{
    let updatedStoreProducts=[...this.state.storeProducts];
    let definedCard={...this.state.storeProducts[id]};
    definedCard.inCart=false;
    updatedStoreProducts[id]=definedCard;
    
    this.setState({
      storeProducts:updatedStoreProducts
    })

    console.log(updatedStoreProducts);
  }


  render(){
    return (
    <BrowserRouter>
      <div className={classes.App}>
        <Layout/>
        
        <Switch>
            <Route path="/my-cart"  render={()=>(
                <Cart storeProducts={this.state.storeProducts} removeHandler={this.removeHandler}/>
            )}/> 
            <Route exact path="/details"  render={()=>(
              <DetailsProvider>
                  <Details storeProducts={this.state.storeProducts} inCartHandler={this.inCartHandler}/>
              </DetailsProvider>
            )} /> 
            <Route exact path="/"  render={()=>(
              <DetailsProvider>
                  <Content storeProducts={this.state.storeProducts} inCartHandler={this.inCartHandler}/>
              </DetailsProvider>
            )} /> 

        </Switch>  

      </div>
      </BrowserRouter>
    );
  }

}

export default App;
