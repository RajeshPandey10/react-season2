import React from 'react'

const ProductCard = ({product}) => {
  return (
    <>
    <div className='h-50 '>

        <img src={product.img} alt="" />

        <p className='text-black'>{product.price}</p>
       <h2 className='font-extrabold'>{product.name}</h2>
       <p className='text-gray-400'>{product.brand}</p>


    </div>
    
    </>
  )
}

export default ProductCard