import React from "react";
import Button from "../common/Button";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="border px-6 w-70 my-2  ">
        <img src={product.img} alt="prodct img" className="h-60 w-80" />
        <h2>{product.name}</h2>
        <p>{product.brand}</p>
        <p>{product.price}</p>
             <Button text="buy now" color="text-orange-400 bg-white"/>
      </div>
    </>
  );
};

export default ProductCard;
