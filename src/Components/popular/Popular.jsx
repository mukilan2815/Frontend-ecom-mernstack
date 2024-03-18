import React from "react";
import dataproduct from "../Assets/data";
import Item from "../Items/items";
import "../../App.css";
const Popular = () => {
  return (
    <div className="my-10">
      <h1 className="text-2xl flex justify-center text-black font-bold">
        POPULAR IN WOMEN'S CLOTHING
      </h1>
      <div className="popular-items flex flex-wrap justify-center">
        {dataproduct.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              newprice={item.new_price}
              oldprice={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
