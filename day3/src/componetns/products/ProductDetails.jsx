import React from 'react'
import ProductCard from './ProductCard'
import Button from '../common/Button'

const ProductDetails = ({products}) => {
  return (
    <>
    {
        products.map((product)=>(
             <div className="">
           <ProductCard product={product}/>
      
           </div>
        ))
    }
    
    </>
  )
}

export default ProductDetails