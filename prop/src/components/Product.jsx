import React from 'react'
import './Product.css'
function Product(props) {
    // let p = props.appProduct
    let arrayP = props.appArrayProduct

  return (
    <div className='product-container'>
        <div className='product-card'>
    
        <ul>
           {/* { Object.keys(p).map((item) =>
           <li key={item.id}>{item}: {p[item]}</li>
           )} */}
        </ul>
        <ul className='listCard'>
           { Object.keys(arrayP).map((item) =>  
               <li key={item.id}>{arrayP[item]}</li>
        
           )} 
        </ul>


        </div>
    
 
    </div>
  )
}

export default Product
