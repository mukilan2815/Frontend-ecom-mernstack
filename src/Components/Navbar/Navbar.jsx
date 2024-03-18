import React, { useState } from "react";
import logo from "../Assets/logo.png";
import cart from "../Assets/cart_icon.png";
import "../../App.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menu, setmenu] = useState("Shop");
  return (
    <div>
      <nav className="flex justify-around items-center w-full ml-5 mt-5">
        <Link to="/" className="flex items-center  w-1/3">
          <img src={logo} alt="" />
          <h1 className="ml-3 font-bold text-2xl">SHOPPER</h1>
        </Link>
        <div className="w-full items-center">
          <ul className="flex transition-all items-center">
            <li onClick={() => setmenu("Shop")}>
              <Link to="/">Shop</Link>
              {menu === "Shop" ? <hr className="hr" /> : <></>}
            </li>
            <li onClick={() => setmenu("Mens")}>
              <Link to="/mens">Mens</Link>{" "}
              {menu === "Mens" ? <hr className="hr" /> : <></>}
            </li>
            <li onClick={() => setmenu("Womens")}>
              <Link to="/womens">Womens</Link>
              {menu === "Womens" ? <hr className="hr" /> : <></>}
            </li>
            <li onClick={() => setmenu("Kids")}>
              <Link to="/kids">Kids</Link>{" "}
              {menu === "Kids" ? <hr className="hr" /> : <></>}
            </li>
            <div className="flex mx-10">
              <Link to="./login">
                <button
                  onClick={() => setmenu("Login")}
                  className="py-3 px-7 mx-7 rounded-3xl border-2 hover:bg-slate-200 hover:border-gray-400 transition-all"
                >
                  Login
                </button>
              </Link>
              <Link to="./cart">
                <img src={cart} alt="cart" className="cart" />
              </Link>
              <div className="cartnumber">0</div>
            </div>
          </ul>
        </div>
      </nav>
      <br />
      <hr />
    </div>
  );
};

export default Navbar;
