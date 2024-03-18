import React from "react";
import star from "../Assets/star_icon.png";
import lowstar from "../Assets/star_dull_icon.png";
const Productdisplay = (props) => {
  const { product } = props;
  return (
    <div className="flex my-5">
      <div className=" flex mr-8">
        <div className="">
          <img
            src={product.image}
            className=" h-24 m-3 cursor-pointer"
            alt=""
          />
          <img
            src={product.image}
            className=" h-24 m-3 cursor-pointer"
            alt=""
          />
          <img src={product.image} className="h-24 m-3 cursor-pointer" alt="" />
          <img
            src={product.image}
            className=" h-24 m-3 cursor-pointer"
            alt=""
          />
        </div>
        <div className="flex object-contain">
          <img src={product.image} alt="" />
        </div>
      </div>
      <div>
        <h1 className="font-bold text-3xl overflow-hidden w-5/6">
          {product.name}
        </h1>
        <div className="flex h-4 my-3">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={lowstar} alt="" />
          <p className=" text-xs">(122)</p>
        </div>
        <div className="flex my-5">
          <del className=" opacity-80 font-bold text-gray-500 text-xl mr-5">
            ${product.old_price}
          </del>
          <p className=" text-red-600 font-bold text-xl">
            ${product.new_price}
          </p>
        </div>
        <p>
          A light weight hansome hoodie where you can just take it out and wear
          it
        </p>
        <h1 className="text-xl font-bold text-gray-400 mt-5 cursor-default">
          Select Size
        </h1>

        <div className="flex mt-2">
          <div className="border cursor-pointer hover:bg-gray-200 hover:border hover:border-black transition-all w-fit m-3 p-3 px-5">
            S
          </div>
          <div className="border cursor-pointer hover:bg-gray-200 hover:border hover:border-black transition-all w-fit m-3 p-3 px-5">
            M
          </div>
          <div className="border cursor-pointer hover:bg-gray-200 hover:border hover:border-black transition-all w-fit m-3 p-3 px-5">
            L
          </div>
          <div className="border cursor-pointer hover:bg-gray-200 hover:border hover:border-black transition-all w-fit m-3 p-3 px-5">
            XL
          </div>
          <div className="border cursor-pointer hover:bg-gray-200 hover:border hover:border-black transition-all w-fit m-3 p-3 px-5">
            XXL
          </div>
        </div>
        <button className="bg-red-600 p-4 text-white font-bold capitalize mt-3">
          Add to cart
        </button>
        <div className="my-5">
          <p className="my-2">
            <span> Category :</span> Womens , Tshirt , Croptop
          </p>
          <p>
            <span>Tags:</span>Modern , Latest
          </p>
        </div>
      </div>
    </div>
  );
};

export default Productdisplay;
