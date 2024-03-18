import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Items/items";
import Dropicon from "../Components/Assets/dropdown_icon.png";
const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);
  return (
    <div>
      <img style={{ cursor: "pointer" }} src={props.banner} alt="" />
      <div className="flex items-center justify-between px-28 pt-10">
        <p className=" font-extralight">
          <span className="font-extrabold">Showing 1-12</span> out of 36
          Products
        </p>
        <div className="flex items-center justify-evenly w-fit cursor-pointer px-4 py-2 border rounded-3xl">
          Sort By <img src={Dropicon} width={10} height={10} alt="icon" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {all_products.map((product, i) => {
          if (product.category === props.category) {
            console.log(product.category);
            return (
              <Item
                key={i}
                id={product.id}
                name={product.name}
                image={product.image}
                newprice={product.new_price}
                oldprice={product.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="flex justify-center my-5">
        <button className="px-7 py-3 bg-gray-200 rounded-3xl ml-1">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ShopCategory;
