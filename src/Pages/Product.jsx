import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import Productdisplay from "../Components/ProductDisplay/Productdisplay";
const Product = (props) => {
  const { all_products} = useContext(ShopContext)  ;
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));
  console.log(product);
  return (
    <div>
      <Breadcrum product={product} />
      <Productdisplay product={product} />
    </div>
  );
};

export default Product;
