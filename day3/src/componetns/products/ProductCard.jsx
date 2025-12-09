import React from 'react'
import Button from '../common/Button'

const ProductCard = ({product}) => {
  return (
    <>
    <div className='border border-amber-300 bg-amber-100 px-4 py-4  rounded-lg'>

        <img src={product.img} alt="" className='rounded-lg' />

        <p className='text-black'>${product.price}</p>
       <h2 className='font-extrabold'>{product.name}</h2>
       <p className='text-gray-400'>{product.brand}</p>
     <Button text="Buy now"/>

    </div>
    
    </>
  )
}

export default ProductCard