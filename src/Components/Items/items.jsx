import React from "react";
import { Link } from "react-router-dom";

const items = (props) => {
  return (
    <div className="p-4 border m-3 w-1/5 hover:bg-slate-50">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="image" className="" />
      </Link>
      <p>{props.name}</p>
      <div className="flex">
        <div className="mr-4">${props.newprice}</div>
        <del className=" text-gray-600">${props.oldprice}</del>
      </div>
    </div>
  );
};

export default items;
