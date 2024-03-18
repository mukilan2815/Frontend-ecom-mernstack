import React from "react";
import "../../App.css";
import heroimage from "../Assets/hero_image.png";
const Hero = () => {
  return (
    <div className=" bg-red-100 h-screen items-center flex justify-evenly py-2">
      <main className="flex-col">
        <h3 className=" capitalize z-0 font-bold">New Arrivals Only</h3>
        <h1 class="text-7xl z-10 font-bold overflow-hidden">
          new <span className="waving-hand flex-row">👋</span>
          <br /> collections <br />
          for everyone
        </h1>
        <button className="px-10 py-3 bg-red-500 mt-5 rounded-3xl text-white font-bold hover:bg-red-600 transition-all">
          Latest Collection
        </button>
      </main>
      <img src={heroimage} alt="" width={350} />
    </div>
  );
};

export default Hero;
