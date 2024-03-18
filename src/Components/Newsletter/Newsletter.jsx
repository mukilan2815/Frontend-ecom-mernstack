import React from "react";

const Newsletter = () => {
  return (
    <div className="my-10 bg-gradient-to-b from-red-100 via-red-50 to-white">
      <h1 className="text-3xl my-10 font-bold flex justify-center">
        GET EXCLUSIVE OFFERS ON YOUR MAIL
      </h1>
      <h2 className="flex justify-center mb-5">
        Subscribe to our newsletter and stay updated
      </h2>
      <div className="flex justify-center">
        <input
          type="text"
          className="px-6 py-3 border rounded-3xl"
          placeholder="Your mail id"
        />
        <button className="rounded-3xl bg-black text-white px-8 py-1 -ml-10">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
