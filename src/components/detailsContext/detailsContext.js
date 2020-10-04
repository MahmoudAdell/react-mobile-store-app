import React,{useState,createContext} from 'react';

export const DetailsContext=createContext();
export const DetailsProvider =props=>{
  const [Details,setDetails]=useState({
      /*id:0,
      title:"",
      img:"",
      company:"",
      price:0,
      info:"",*/

      id: 0,
      title: "Google Pixel - Black",
      img: "img/product-1.png",
      price: 10,
      company: "GOOGLE",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
  });
  return(
      <DetailsContext.Provider value={[Details,setDetails]}>
          {props.children}
      </DetailsContext.Provider>
  );


};
