import React from "react";
import Pic from "../Assets/exclusive_image.png";
const Offer = () => {
  return (
    <div className=" bg-gradient-to-b from-red-200 to-white flex m-20">
      <div className="w-1/2 mt-24 ml-36">
        <h1 className="text-6xl mb-5 overflow-hidden font-bold">Exclusive</h1>
        <h1 className="text-6xl mb-5 overflow-hidden font-bold">
          Offers For You
        </h1>
        <h1 className="text-xl mb-5">ONLY ON BEST SELLERS PRODUCTS</h1>
        <button className="px-9 py-2 ml-5 bg-red-600 rounded-3xl text-white font-bold">
          Check Now
        </button>
      </div>
      <div>
        <img src={Pic} alt="Pic" />
      </div>
    </div>
  );
};

export default Offer;
