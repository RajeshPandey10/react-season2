import ProductDetails from "../componetns/products/ProductDetails"
import { productData } from "../constants/productData"


const Products = () => {
  const product = productData
  console.log(product)
  return (
    <>
   <div className="flex flex-wrap justify-center">
     <ProductDetails products = {product}/>
   </div>
    
    </>
  )
}

export default Products