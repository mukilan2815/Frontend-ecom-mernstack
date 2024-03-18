import React from "react";
import arrow from "../Assets/breadcrum_arrow.png";
const Breadcrum = (props) => {
  const { product } = props;
  console.log(product);
  return (
    <div className="flex">
      Home <img src={arrow} alt="" /> Shop <img src={arrow} alt="" />
      {product.category} <img src={arrow} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrum;
