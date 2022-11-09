import React from 'react'
import './product.css'

let productSample = [ 
    { id:0, title:"mobile", content:"any thing"},
    { id:1, title:"Laptop", content:"any thing"},
    { id:2, title:"mobile", content:"any thing"},
    { id:3, title:"Laptop", content:"any thing"},
    { id:4, title:"mobile", content:"any thing"},
    { id:5, title:"Laptop", content:"any thing"},
    { id:6, title:"mobile", content:"any thing"},
    { id:7, title:"Laptop", content:"any thing"},
    { id:8, title:"mobile", content:"any thing"},
    { id:9, title:"mobile", content:"any thing"},
];
export default function products() {

    const showProduct = productSample.map((prod)=>{
        if(prod.title === "mobile"){
            return(
                <div id='redDiv' key={prod.id}>
                    {prod.title}
                </div>
            );
        }else{
            return(
                <div id='blueDiv' key={prod.id}>
                    {prod.title}
                </div>
            );
        }    
    })

  return (
    <div>{showProduct}</div>
  )
}
