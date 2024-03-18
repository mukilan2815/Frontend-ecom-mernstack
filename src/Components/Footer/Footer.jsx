import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-gray-800 text-white p-4">
        <div className="flex justify-center">
          <div className="mr-4">
            <h1 className="text-2xl">About</h1>
            <p>Our Story</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="mr-4">
            <h1 className="text-2xl">Services</h1>
            <p>Shipping & Returns</p>
            <p>International Shipping</p>
            <p>FAQ</p>
          </div>
          <div className="mr-4">
            <h1 className="text-2xl">Contact</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
